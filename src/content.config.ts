import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    tag: z.string().optional(),
    date: z.coerce.date(),
    description: z.string().optional(),
    hasCharts: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
