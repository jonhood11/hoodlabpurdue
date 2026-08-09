import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkBasePath from "./scripts/remark-base-path.mjs";

export default defineConfig({
  site: process.env.SITE_URL || "https://www.hoodlabpurdue.com",
  base: process.env.BASE_PATH || "/",
  output: "static",
  markdown: { remarkPlugins: [remarkBasePath] },
  integrations: [sitemap()],
});
