import { allFeatureDetails } from 'content-collections';

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
