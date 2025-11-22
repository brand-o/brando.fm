import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			type: z.enum(['review', 'project', 'post']).default('post'),
			tags: z.array(z.string()).default([]),
			rating: z.number().min(1).max(5).optional(),
			affiliateLinks: z
				.array(
					z.object({
						label: z.string(),
						url: z.string().url(),
						retailer: z.enum(['amazon', 'other']).default('amazon').optional(),
					}),
				)
				.default([]),
			parts: z
				.array(
					z.object({
						name: z.string(),
						url: z.string().url(),
					}),
				)
				.default([]),
			videoUrl: z.string().url().optional(),
			canonicalUrl: z.string().url().optional(),
		}),
});

export const collections = { blog };
