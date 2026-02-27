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
	coverImage: z.string().optional(),
	coverImageAlt: z.string().optional(),
	content: z.string(),
	mdx: z.string().optional(),
	slug: z.string().optional(),
	readTimeMinutes: z.number().optional(),

	authorName: z.string().optional(),
	authorRole: z.string().optional(),
	authorAvatar: z.string().optional(),
	authorBio: z.string().optional(),

	authorWebsite: z.string().optional(),
	authorTwitter: z.string().optional(),
	authorX: z.string().optional(),
	authorLinkedIn: z.string().optional(),
	authorFacebook: z.string().optional(),
	authorInstagram: z.string().optional(),
	authorYouTube: z.string().optional(),
	authorGitHub: z.string().optional(),
	authorDiscord: z.string().optional(),
	authorThreads: z.string().optional(),
	authorTikTok: z.string().optional(),
	authorMedium: z.string().optional(),
});

const blogs = defineCollection({
	name: "blogs",
	directory: "content/blogs",
	include: "**/*.mdx",
	schema: blogsSchema,
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document);
		const rawPath = (document as { _meta?: { path?: string } })._meta?.path ?? "";
		const slug = rawPath.replace(/\.mdx?$/i, "").split("/").pop() ?? "";
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
