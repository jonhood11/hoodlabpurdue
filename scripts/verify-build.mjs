import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join, normalize, relative, resolve } from "node:path";
import { load } from "cheerio";

const outputDir = resolve(process.argv[2] || "dist");
const expectedBase = process.argv[3] || "/";
const htmlFiles = await collectHtml(outputDir);
const errors = [];
const expectedRoutes = new Set(["/", "/blank-6", "/blog", "/links", "/publications", "/research", "/team", "/theses"]);
// Pages added deliberately after the Wix migration. They are excluded from the
// count comparison below so that it keeps guarding the legacy routes only.
const intentionalExtras = new Set(["/404.html"]);

for (const file of await readdir("src/content/news")) {
  if (!file.endsWith(".md")) continue;
  const source = await readFile(join("src/content/news", file), "utf8");
  const match = source.match(/^legacyPath:\s*["']?([^"'\n]+)["']?$/m);
  if (!match) errors.push(`Missing legacyPath in news source: ${file}`);
  else expectedRoutes.add(match[1]);
}

const builtRoutes = new Set(
  htmlFiles.map((file) => {
    const rel = relative(outputDir, file).replaceAll("\\", "/");
    if (rel === "index.html") return "/";
    return `/${rel.replace(/\/index\.html$/, "")}`;
  }),
);

for (const route of expectedRoutes) {
  if (!builtRoutes.has(route)) errors.push(`Missing legacy route: ${route}`);
}

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const $ = load(html);
  if (!$('meta[name="viewport"]').length) errors.push(`Missing viewport: ${relative(outputDir, file)}`);
  if (!$('link[rel="canonical"]').attr("href")) errors.push(`Missing canonical: ${relative(outputDir, file)}`);

  for (const element of $("img[src], a[href], iframe[src]").toArray()) {
    const attribute = element.name === "a" ? "href" : "src";
    const value = $(element).attr(attribute);
    if (!value || value.startsWith("#") || /^(https?:|mailto:|tel:|data:)/.test(value)) continue;

    const clean = value.split(/[?#]/)[0];
    let localPath;
    if (clean.startsWith("/")) {
      if (expectedBase !== "/" && !clean.startsWith(`${expectedBase}/`) && clean !== expectedBase) {
        errors.push(`Unprefixed URL in ${relative(outputDir, file)}: ${clean}`);
        continue;
      }
      const withoutBase = expectedBase === "/" ? clean : clean.slice(expectedBase.length);
      localPath = join(outputDir, withoutBase);
    } else {
      localPath = resolve(dirname(file), clean);
    }

    if (!normalize(localPath).startsWith(outputDir)) {
      errors.push(`URL escapes output directory in ${relative(outputDir, file)}: ${clean}`);
      continue;
    }

    try {
      const target = localPath.endsWith("/") ? join(localPath, "index.html") : localPath;
      await access(target);
    } catch {
      try {
        await access(join(localPath, "index.html"));
      } catch {
        errors.push(`Broken local URL in ${relative(outputDir, file)}: ${clean}`);
      }
    }
  }
}

const builtLegacyRoutes = new Set([...builtRoutes].filter((route) => !intentionalExtras.has(route)));
if (builtLegacyRoutes.size !== expectedRoutes.size) {
  errors.push(`Route count differs: built ${builtLegacyRoutes.size}, expected ${expectedRoutes.size}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Verified ${builtRoutes.size} routes and all local links/assets in ${relative(process.cwd(), outputDir)}.`);

async function collectHtml(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtml(path));
    else if (entry.name.endsWith(".html")) files.push(path);
  }
  return files;
}
