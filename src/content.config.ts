import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every Markdown file in /projects becomes an entry. Add a new project by
// dropping a new .md file (and its images) into that folder.
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string().optional(),
      summary: z.string(),
      type: z.string().optional(),
      role: z.string().optional(),
      company: z.string().optional(),
      status: z.string().optional(),
      users: z.string().optional(),
      startDate: z.union([z.string(), z.number()]).nullable().optional(),
      endDate: z.union([z.string(), z.number()]).nullable().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(50),
      repo: z.string().url().nullable().optional(),
      demo: z.string().url().nullable().optional(),
      confidential: z.boolean().default(false),
      cover: image().optional(),
      tech: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { projects };
