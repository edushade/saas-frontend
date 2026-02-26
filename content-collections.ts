import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const blogsSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	date: z.string(),
	tag: z.string(),
	tagClass: z.string(),
	imageSrc: z.string(),
	imageAlt: z.string(),
	content: z.string(),
	mdx: z.string().optional(),
	slug: z.string().optional(),
});

const blogs = defineCollection({
	name: "blogs",
	directory: "content/blogs",
	include: "**/*.mdx",
	schema: blogsSchema,
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document);
		const slug = (document as { _meta?: { path?: string } })._meta?.path ?? "";
		return {
			...document,
			mdx,
			slug,
		};
	},
});

export default defineConfig({
	content: [blogs],
});
