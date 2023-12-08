import { defineCollection, reference, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    created: z.date(),
    authors: z.array(reference("authors")),
    categories: z.array(z.string()),
    // TODO: Migrate to image+alt object
    //image: z.object({ src: z.string(), alt: z.string() }).optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
  }),
});

const authors = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

export const collections = {
  posts,
  authors,
};
