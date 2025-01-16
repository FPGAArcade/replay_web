import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const authors = defineCollection({
  loader: glob({pattern: "**/[^_]*.md", base: "./src/content/authors"}),
  schema: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

const posts = defineCollection({
  loader: glob({pattern: "**/[^_]*.md", base: "./src/content/posts"}),
  schema: ({image}) => z.object({
    title: z.string(),
    created: z.date(),
    authors: z.array(reference("authors")),
    categories: z.array(z.string()),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
  }),
});

export const collections = {
  authors,
  posts,
};
