import { allFeatureDetails } from 'content-collections';
import { describe, expect, it } from 'vitest';
import { FEATURE_SLUGS } from './features';

describe('FEATURE_SLUGS', () => {
	it('matches content collection count and slugs', () => {
		expect(FEATURE_SLUGS.length).toBe(allFeatureDetails.length);
		const fromDocs = [...allFeatureDetails]
			.map((d) => d.slug)
			.filter(Boolean)
			.sort((a, b) => a.localeCompare(b));
		expect(FEATURE_SLUGS).toEqual(fromDocs);
	});
});
