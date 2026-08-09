import { mkdir, readFile, writeFile } from "node:fs/promises";

const inventory = JSON.parse(await readFile(".migration-cache/inventory.json", "utf8"));
const outputDir = "src/content/pages";
await mkdir(outputDir, { recursive: true });

const pages = [
  ["/publications", "publications", "Publications", "Publications from the Hood Lab at Purdue University."],
  ["/theses", "theses", "Theses", "Graduates and theses from the Hood Lab."],
  ["/links", "links", "Links", "Hood Lab links and community resources."],
  ["/blank-6", "open-positions", "Open Positions", "Open positions in the Hood Lab at Purdue University."],
];

for (const [pathname, filename, title, description] of pages) {
  const source = inventory.routes.find((route) => route.pathname === pathname);
  if (!source) throw new Error(`Missing ${pathname} in Wix inventory`);

  const body = source.markdown
    .replaceAll("https://www.hoodlabpurdue.com/research", "/research")
    .replaceAll("\u200b", "")
    .replace(/\n{4,}/g, "\n\n")
    .trim();
  const frontmatter = `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\n---\n\n`;
  await writeFile(`${outputDir}/${filename}.md`, `${frontmatter}${body}\n`);
}

console.log(`Imported ${pages.length} static pages.`);
