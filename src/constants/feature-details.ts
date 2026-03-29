import { allFeatureDetails } from 'content-collections';
import type { FeatureBannerContent } from './features';

export type FeatureDetailDocument = (typeof allFeatureDetails)[number];

export function getFeatureDetailBySlug(
	slug: string,
): FeatureDetailDocument | undefined {
	const trimmed = slug.trim();
	if (!trimmed) {
		return undefined;
	}
	return allFeatureDetails.find((doc) => (doc.slug ?? '') === trimmed);
}

export function getFeatureBannerContentBySlug(
	slug: string,
): FeatureBannerContent | undefined {
	const doc = getFeatureDetailBySlug(slug);
	if (!doc) return undefined;
	return {
		slug: doc.slug ?? slug,
		tag: doc.banner.tag,
		headline: doc.banner.headline,
		description: doc.banner.description,
		ctaText: doc.banner.ctaText,
		ctaTo: doc.banner.ctaTo,
	};
}
