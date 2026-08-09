import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer-core";

const origin = process.argv[2] || "http://127.0.0.1:4321";
const chrome = process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const outputDir = ".migration-cache/qa";
const views = [
  ["home-desktop", "/", 1440, 1200],
  ["team-desktop", "/team", 1440, 1200],
  ["home-mobile", "/", 390, 844],
  ["team-mobile", "/team", 390, 1200],
  ["blog-mobile", "/blog", 390, 1200],
];

await mkdir(outputDir, { recursive: true });
const browser = await puppeteer.launch({ headless: true, executablePath: chrome });
const page = await browser.newPage();

for (const [name, pathname, width, height] of views) {
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto(`${origin}${pathname}`, { waitUntil: "networkidle0" });
  const sizes = await page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth }));
  if (sizes.scrollWidth > sizes.width) throw new Error(`${name} overflows horizontally`);
  await page.screenshot({ path: `${outputDir}/${name}.png` });
}

await browser.close();
console.log(`Captured ${views.length} responsive QA screenshots in ${outputDir}.`);
