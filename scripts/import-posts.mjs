import { mkdir, readFile, writeFile } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);
const inventoryPath = new URL(".migration-cache/inventory.json", projectRoot);
const destination = new URL("src/content/news/", projectRoot);
const inventory = JSON.parse(await readFile(inventoryPath, "utf8"));

await mkdir(destination, { recursive: true });

function field(value) {
  return JSON.stringify(value ?? "");
}

for (const post of inventory.routes.filter((route) => route.type === "post")) {
  const slug = post.pathname.split("/").filter(Boolean).at(-1);
  const body = post.markdown.trim() || post.description?.trim() || "";
  const frontmatter = [
    "---",
    `title: ${field(post.title.trim())}`,
    `description: ${field(post.description?.trim())}`,
    `published: ${field(post.datePublished)}`,
    `modified: ${field(post.dateModified)}`,
    `author: ${field(post.author || "Hood Lab")}`,
    `legacyPath: ${field(post.pathname)}`,
    post.coverImage ? `coverImage: ${field(post.coverImage)}` : undefined,
    "---",
  ]
    .filter(Boolean)
    .join("\n");

  await writeFile(new URL(`${slug}.md`, destination), `${frontmatter}\n\n${body}\n`);
}

console.log(`Imported ${inventory.routes.filter((route) => route.type === "post").length} news posts.`);
