import { allFeatureDetails } from 'content-collections';

/** Shape passed to `FeatureBanner` when a `slug` is included (e.g. legacy helpers). */
export interface FeatureBannerContent {
	slug: string;
	tag: string;
	headline: string;
	description: string;
	ctaText: string;
	ctaTo: string;
}

/** Sorted route slugs for prerender and sitemap-style lists (from `content/features`). */
export const FEATURE_SLUGS: string[] = [...allFeatureDetails]
	.map((d) => d.slug)
	.filter((s): s is string => Boolean(s))
	.sort((a, b) => a.localeCompare(b));
