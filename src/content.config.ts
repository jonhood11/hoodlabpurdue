import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    published: z.coerce.date(),
    modified: z.coerce.date().optional(),
    author: z.string().default("Hood Lab"),
    legacyPath: z.string(),
    coverImage: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
  }),
});

export const collections = { news, pages };
