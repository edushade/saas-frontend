import { describe, expect, it } from 'vitest';
import {
	FEATURE_CAPABILITY_ICON_KEYS,
	FEATURE_CAPABILITY_ICON_MAP,
} from './feature-capability-icons';

describe('FEATURE_CAPABILITY_ICON_MAP', () => {
	it('has exactly one component per declared icon key', () => {
		for (const key of FEATURE_CAPABILITY_ICON_KEYS) {
			expect(FEATURE_CAPABILITY_ICON_MAP[key]).toBeDefined();
			expect(typeof FEATURE_CAPABILITY_ICON_MAP[key]).toBe('function');
		}
	});

	it('has no extra keys beyond FEATURE_CAPABILITY_ICON_KEYS', () => {
		const mapKeys = Object.keys(FEATURE_CAPABILITY_ICON_MAP).sort();
		const declared = [...FEATURE_CAPABILITY_ICON_KEYS].sort();
		expect(mapKeys).toEqual(declared);
	});
});
