import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename } from "node:path";
import { load } from "cheerio";
import TurndownService from "turndown";

const origin = "https://www.hoodlabpurdue.com";
const cacheDir = new URL("../.migration-cache/", import.meta.url);
const rawDir = new URL("../.migration-cache/raw/", import.meta.url);
const mediaDir = new URL("../public/media/", import.meta.url);
const turndown = new TurndownService({ headingStyle: "atx", bulletListMarker: "-" });

await Promise.all([
  mkdir(cacheDir, { recursive: true }),
  mkdir(rawDir, { recursive: true }),
  mkdir(mediaDir, { recursive: true }),
]);

function urlsFromXml(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim());
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 HoodLab migration archive" },
    redirect: "follow",
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

function localNameForPath(pathname) {
  if (pathname === "/") return "index";
  return pathname.replace(/^\//, "").replaceAll("/", "--").replace(/[^a-zA-Z0-9._-]/g, "-");
}

function parseImageUri(url) {
  if (!url) return undefined;
  const match = url.match(/https:\/\/static\.wixstatic\.com\/media\/([^/?]+)(?:\/v1\/[^?#]*)?/);
  return match?.[1];
}

function safeMediaName(uri) {
  return basename(uri).replace(/[^a-zA-Z0-9._~-]/g, "_");
}

function localizeWixMedia(markdown) {
  return markdown.replace(
    /https:\/\/static\.wixstatic\.com\/media\/([^/?\s)]+)(?:\/v1\/[^\s)]*)?/g,
    (_, uri) => `/media/${safeMediaName(uri)}`,
  );
}

function extractMedia($, html) {
  const media = new Map();

  function add(uri, details = {}) {
    if (!uri || !/\.(?:avif|gif|jpe?g|png|svg|webp|mp4|mov)$/i.test(uri)) return;
    const current = media.get(uri) ?? {
      uri,
      originalUrl: `https://static.wixstatic.com/media/${uri}`,
      localPath: `/media/${safeMediaName(uri)}`,
    };
    media.set(uri, { ...current, ...Object.fromEntries(Object.entries(details).filter(([, value]) => value)) });
  }

  $("img").each((_, element) => {
    const image = $(element);
    const candidates = [image.attr("src"), image.attr("data-src")];
    for (const entry of (image.attr("srcset") ?? "").split(",")) {
      candidates.push(entry.trim().split(/\s+/)[0]);
    }
    for (const candidate of candidates) {
      add(parseImageUri(candidate), {
        alt: image.attr("alt")?.trim(),
        width: Number(image.attr("width")) || undefined,
        height: Number(image.attr("height")) || undefined,
      });
    }
  });

  $("[data-image-info]").each((_, element) => {
    try {
      const info = JSON.parse($(element).attr("data-image-info"));
      const data = info.imageData ?? info;
      add(data.uri, {
        alt: $(element).find("img").attr("alt")?.trim() || data.name,
        width: data.width,
        height: data.height,
      });
    } catch {
      // Some Wix components have non-JSON placeholders during server rendering.
    }
  });

  for (const match of html.matchAll(/(?:\\?"|&quot;)uri(?:\\?"|&quot;)\s*:\s*(?:\\?"|&quot;)([^"&]+?\.(?:avif|gif|jpe?g|png|svg|webp|mp4|mov))(?:\\?"|&quot;)/gi)) {
    add(match[1].replaceAll("\\/", "/"));
  }

  add(parseImageUri($("meta[property='og:image']").attr("content")), {
    alt: $("meta[property='og:title']").attr("content"),
  });

  return [...media.values()].sort((a, b) => a.uri.localeCompare(b.uri));
}

function extractStructuredData($) {
  const records = [];
  $("script[type='application/ld+json']").each((_, element) => {
    try {
      records.push(JSON.parse($(element).text()));
    } catch {
      // Ignore unrelated malformed third-party JSON-LD.
    }
  });
  return records;
}

async function downloadMedia(record) {
  const destination = new URL(`../public${record.localPath}`, import.meta.url);
  try {
    await readFile(destination);
    return { ...record, status: "existing" };
  } catch {
    // Continue with a public original-asset download.
  }

  const response = await fetch(record.originalUrl, {
    headers: { "user-agent": "Mozilla/5.0 HoodLab migration archive" },
    redirect: "follow",
  });
  if (!response.ok) return { ...record, status: `http-${response.status}` };
  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(destination, bytes);
  return {
    ...record,
    status: "downloaded",
    bytes: bytes.length,
    contentType: response.headers.get("content-type"),
  };
}

const sitemapIndex = await fetchText(`${origin}/sitemap.xml`);
const sitemapUrls = urlsFromXml(sitemapIndex).filter((url) =>
  /(?:pages|blog-posts)-sitemap\.xml$/.test(url),
);
const pageUrls = [];
for (const sitemapUrl of sitemapUrls) {
  pageUrls.push(...urlsFromXml(await fetchText(sitemapUrl)));
}

const uniqueUrls = [...new Set(pageUrls)].sort((a, b) => a.localeCompare(b));
const pages = [];
const allMedia = new Map();

for (const [index, url] of uniqueUrls.entries()) {
  const pathname = new URL(url).pathname || "/";
  process.stdout.write(`[${index + 1}/${uniqueUrls.length}] ${pathname}\n`);
  const html = await fetchText(url);
  await writeFile(new URL(`${localNameForPath(pathname)}.html`, rawDir), html);
  const $ = load(html);
  const structuredData = extractStructuredData($);
  const blogPosting = structuredData.find((entry) => entry?.["@type"] === "BlogPosting");
  const body = pathname.startsWith("/post/")
    ? $("article > div > section").first()
    : $("#PAGES_CONTAINER").first();

  const coverImageUri = parseImageUri($("meta[property='og:image']").attr("content"));
  const bodyMediaUris = [
    ...new Set(
      body
        .find("img")
        .toArray()
        .map((element) => parseImageUri($(element).attr("src")))
        .filter(Boolean),
    ),
  ];

  body.find("script, style, noscript").remove();
  const bodyHtml = body.html() ?? "";
  const media = extractMedia($, html);
  for (const item of media) {
    allMedia.set(item.uri, { ...(allMedia.get(item.uri) ?? {}), ...item });
  }

  pages.push({
    url,
    pathname,
    type: pathname.startsWith("/post/") ? "post" : "page",
    title:
      blogPosting?.headline ??
      $("meta[property='og:title']").attr("content") ??
      $("title").text().replace(/\s*\|\s*Hood Lab.*$/i, "").trim(),
    description:
      blogPosting?.description ??
      $("meta[property='og:description']").attr("content") ??
      $("meta[name='description']").attr("content"),
    datePublished: blogPosting?.datePublished,
    dateModified: blogPosting?.dateModified,
    author: blogPosting?.author?.name,
    coverImage: coverImageUri ? `/media/${safeMediaName(coverImageUri)}` : undefined,
    bodyMedia: bodyMediaUris.map((uri) => `/media/${safeMediaName(uri)}`),
    markdown: localizeWixMedia(turndown.turndown(bodyHtml).trim()),
    media: media.map(({ uri, localPath, alt, width, height }) => ({
      uri,
      localPath,
      alt,
      width,
      height,
    })),
  });
}

const mediaResults = [];
for (const [index, media] of [...allMedia.values()].entries()) {
  process.stdout.write(`media [${index + 1}/${allMedia.size}] ${media.uri}\n`);
  mediaResults.push(await downloadMedia(media));
}

const inventory = {
  generatedAt: new Date().toISOString(),
  origin,
  routes: pages,
  media: mediaResults,
};
await writeFile(new URL("inventory.json", cacheDir), `${JSON.stringify(inventory, null, 2)}\n`);

console.log(
  JSON.stringify(
    {
      routes: pages.length,
      pages: pages.filter((page) => page.type === "page").length,
      posts: pages.filter((page) => page.type === "post").length,
      media: mediaResults.length,
      failedMedia: mediaResults.filter((item) => !["downloaded", "existing"].includes(item.status)),
    },
    null,
    2,
  ),
);
