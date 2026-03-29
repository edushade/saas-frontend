import { describe, expect, it } from 'vitest';
import { formatCompactInt } from './format-compact-int';

describe('formatCompactInt', () => {
	it('groups thousands with en-US locale', () => {
		expect(formatCompactInt(1240)).toBe('1,240');
		expect(formatCompactInt(285)).toBe('285');
		expect(formatCompactInt(1_000_000)).toBe('1,000,000');
	});

	it('rounds fractional values', () => {
		expect(formatCompactInt(12.7)).toBe('13');
	});

	it('returns 0 for non-finite numbers', () => {
		expect(formatCompactInt(Number.NaN)).toBe('0');
		expect(formatCompactInt(Number.POSITIVE_INFINITY)).toBe('0');
	});
});
