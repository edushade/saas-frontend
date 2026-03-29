import { describe, expect, it } from 'vitest';
import {
	NAV_FEATURE_ICON_KEYS,
	NAV_FEATURE_ICON_MAP,
	resolveNavFeatureIcon,
} from './nav-feature-icons';

describe('NAV_FEATURE_ICON_MAP', () => {
	it('defines a component for every declared key', () => {
		for (const key of NAV_FEATURE_ICON_KEYS) {
			expect(NAV_FEATURE_ICON_MAP[key]).toBeDefined();
			expect(typeof NAV_FEATURE_ICON_MAP[key]).toBe('function');
		}
	});

	it('has no extra keys', () => {
		expect(Object.keys(NAV_FEATURE_ICON_MAP).sort()).toEqual(
			[...NAV_FEATURE_ICON_KEYS].sort(),
		);
	});
});

describe('resolveNavFeatureIcon', () => {
	it('returns an icon for courses by slug or id', () => {
		const doc = resolveNavFeatureIcon('courses');
		expect(doc).toBeDefined();
	});

	it('returns undefined for unknown keys', () => {
		expect(resolveNavFeatureIcon('__no_such_feature__')).toBeUndefined();
	});
});
