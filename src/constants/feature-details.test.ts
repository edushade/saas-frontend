import { allFeatureDetails } from 'content-collections';
import { describe, expect, it } from 'vitest';
import {
	getFeatureBannerContentBySlug,
	getFeatureDetailBySlug,
} from './feature-details';

describe('getFeatureDetailBySlug', () => {
	it('returns the courses document when slug matches content/features/courses.mdx', () => {
		const doc = getFeatureDetailBySlug('courses');
		expect(doc).toBeDefined();
		expect(doc?.slug).toBe('courses');
		expect(doc?.id).toBe('courses');
		expect(doc?.title).toBe('Courses');
		expect(doc?.href).toBe('/features/courses');
		expect(doc?.banner.tag).toBe('Courses');
		expect(doc?.banner.headline.length).toBeGreaterThan(0);
		expect(doc?.splitSections?.length).toBeGreaterThanOrEqual(1);
		expect(
			doc?.capabilityHighlights?.capabilities?.length,
		).toBeGreaterThanOrEqual(1);
	});

	it('has unique slugs and required sections for every feature document', () => {
		const seen = new Set<string>();
		for (const doc of allFeatureDetails) {
			const slug = doc.slug;
			expect(slug).toBeTruthy();
			expect(seen.has(slug!), `duplicate slug: ${slug}`).toBe(false);
			seen.add(slug!);
			expect(doc.banner?.headline.length ?? 0).toBeGreaterThan(0);
			expect(doc.splitSections?.length ?? 0).toBeGreaterThanOrEqual(1);
		}
		expect(seen.size).toBe(allFeatureDetails.length);
	});

	it('returns undefined for unknown slugs', () => {
		expect(getFeatureDetailBySlug('nonexistent-feature-xyz')).toBeUndefined();
	});

	it('returns undefined for blank slugs', () => {
		expect(getFeatureDetailBySlug('')).toBeUndefined();
		expect(getFeatureDetailBySlug('   ')).toBeUndefined();
	});
});

describe('getFeatureBannerContentBySlug', () => {
	it('maps courses detail to banner content', () => {
		const banner = getFeatureBannerContentBySlug('courses');
		expect(banner?.slug).toBe('courses');
		expect(banner?.tag).toBe('Courses');
		expect(banner?.headline.length).toBeGreaterThan(0);
	});

	it('returns undefined for unknown slug', () => {
		expect(getFeatureBannerContentBySlug('__missing__')).toBeUndefined();
	});
});
