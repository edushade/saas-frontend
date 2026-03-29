import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import { z } from 'zod';

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
	name: 'blogs',
	directory: 'content/blogs',
	include: '**/*.mdx',
	schema: blogsSchema,
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document);
		const rawPath =
			(document as { _meta?: { path?: string } })._meta?.path ?? '';
		const slug =
			rawPath
				.replace(/\.mdx?$/i, '')
				.split(/[/\\]/)
				.pop() ?? '';
		return {
			...document,
			mdx,
			slug,
		};
	},
});

const legalSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	content: z.string(),
	mdx: z.string().optional(),
	slug: z.string().optional(),
});

const legal = defineCollection({
	name: 'legal',
	directory: 'content/legal',
	include: '**/*.mdx',
	schema: legalSchema,
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document);
		const rawPath =
			(document as { _meta?: { path?: string } })._meta?.path ?? '';
		const slug =
			rawPath
				.replace(/\.mdx?$/i, '')
				.split(/[/\\]/)
				.pop() ?? '';
		return {
			...document,
			mdx,
			slug,
		};
	},
});

/** Must match `NAV_FEATURE_ICON_KEYS` in `src/lib/features/nav-feature-icons.ts`. */
const navFeatureIconKey = z.enum([
	'notebookBookmark',
	'userSpeakRounded',
	'notebookSquare',
	'testTube',
	'calculatorMinimalistic',
	'clipboardList',
	'diploma',
	'clapperboardPlay',
	'routing',
	'usersGroupTwoRounded',
	'dialog',
	'chatUnread',
	'star',
	'calendar',
	'userHeartRounded',
	'sidebar',
	'windowFrame',
	'userGroupRounded',
	'stars',
	'userBlock',
	'pieChart3',
	'chart2',
	'cupStar',
	'widget6',
	'graphNewUp',
]);

/** Must match `FEATURE_CAPABILITY_ICON_KEYS` in `src/lib/features/feature-capability-icons.ts`. */
const featureCapabilityIconKey = z.enum([
	'notebookBookmark',
	'clapperboardPlay',
	'arrowRight',
	'diploma',
	'routing',
	'clipboardList',
]);

const featureSplitSectionSchema = z.object({
	title: z.string(),
	description: z.string(),
	lists: z.array(z.string()),
	imgSrc: z.string(),
	reverse: z.boolean().optional().default(false),
});

/** Optional icon grid (title, description, capability cards). Any feature may use it; copy is MDX-driven. */
const featureCapabilityHighlightsSchema = z
	.object({
		title: z.string().optional(),
		description: z.string().optional(),
		capabilities: z
			.array(
				z.object({
					title: z.string(),
					description: z.string(),
					icon: featureCapabilityIconKey,
				}),
			)
			.optional(),
	})
	.optional();

const quickStartStepSchema = z.object({
	step: z.number(),
	title: z.string(),
	description: z.string(),
	imageSrc: z.string().optional(),
	imageAlt: z.string().optional(),
});

/** Optional numbered steps block (e.g. get started in a few steps). */
const featureQuickStartSchema = z
	.object({
		title: z.string().optional(),
		subtitle: z.string().optional(),
		steps: z.array(quickStartStepSchema).optional(),
	})
	.optional();

/** Hero banner for `/features/:slug` (matches `FeatureBanner` / `FeatureBannerContent` fields except `slug`). */
const featureDetailBannerSchema = z.object({
	tag: z.string(),
	headline: z.string(),
	description: z.string(),
	ctaText: z.string(),
	ctaTo: z.string(),
});

const featureDetailsSchema = z.object({
	featureId: z.string(),
	title: z.string(),
	description: z.string(),
	href: z.string(),
	navGroup: z.string(),
	navIcon: navFeatureIconKey,
	navOrder: z.number().int().optional().default(0),
	content: z.string(),
	mdx: z.string().optional(),
	slug: z.string().optional(),
	banner: featureDetailBannerSchema,
	splitSections: z.array(featureSplitSectionSchema).optional().default([]),
	capabilityHighlights: featureCapabilityHighlightsSchema,
	quickStart: featureQuickStartSchema,
});

const featureDetails = defineCollection({
	name: 'featureDetails',
	directory: 'content/features',
	include: '**/*.mdx',
	schema: featureDetailsSchema,
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document);
		const rawPath =
			(document as { _meta?: { path?: string } })._meta?.path ?? '';
		const pathSlug =
			rawPath
				.replace(/\.mdx?$/i, '')
				.split(/[/\\]/)
				.pop() ?? '';
		if (document.featureId !== pathSlug) {
			throw new Error(
				`featureDetails "${pathSlug}.mdx": featureId must equal filename (got "${document.featureId}")`,
			);
		}
		const expectedHref = `/features/${pathSlug}`;
		if (document.href !== expectedHref) {
			throw new Error(
				`featureDetails "${pathSlug}.mdx": href must be "${expectedHref}" (got "${document.href}")`,
			);
		}
		if (document.slug !== undefined && document.slug !== pathSlug) {
			throw new Error(
				`featureDetails "${pathSlug}.mdx": slug must match filename or be omitted`,
			);
		}
		const { featureId, ...rest } = document;
		return {
			...rest,
			id: featureId,
			mdx,
			slug: pathSlug,
			splitSections: document.splitSections ?? [],
		};
	},
});

export default defineConfig({
	content: [blogs, legal, featureDetails],
});
