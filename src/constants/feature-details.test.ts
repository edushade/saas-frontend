import { allFeatureDetails } from 'content-collections';
import { describe, expect, it } from 'vitest';
import { getFeatureDetailBySlug } from './feature-details';
import { FEATURE_SLUGS } from './features';

describe('getFeatureDetailBySlug', () => {
	it('returns the courses document when slug matches content/features/courses.mdx', () => {
		const doc = getFeatureDetailBySlug('courses');
		expect(doc).toBeDefined();
		expect(doc?.slug).toBe('courses');
		expect(doc?.banner.tag).toBe('Courses');
		expect(doc?.banner.headline.length).toBeGreaterThan(0);
		expect(doc?.splitSections?.length).toBeGreaterThanOrEqual(1);
		expect(
			doc?.capabilityHighlights?.capabilities?.length,
		).toBeGreaterThanOrEqual(1);
	});

	it('has a content document for every feature slug in FEATURES_BY_SLUG', () => {
		const slugs = new Set(
			allFeatureDetails.map((d) => d.slug).filter(Boolean) as string[],
		);
		for (const slug of FEATURE_SLUGS) {
			expect(slugs.has(slug), `missing content/features/${slug}.mdx`).toBe(
				true,
			);
			const doc = getFeatureDetailBySlug(slug);
			expect(doc?.banner?.headline.length ?? 0).toBeGreaterThan(0);
			expect(doc?.splitSections?.length ?? 0).toBeGreaterThanOrEqual(1);
		}
		expect(slugs.size).toBe(FEATURE_SLUGS.length);
	});

	it('returns undefined for unknown slugs', () => {
		expect(getFeatureDetailBySlug('nonexistent-feature-xyz')).toBeUndefined();
	});

	it('returns undefined for blank slugs', () => {
		expect(getFeatureDetailBySlug('')).toBeUndefined();
		expect(getFeatureDetailBySlug('   ')).toBeUndefined();
	});
});
