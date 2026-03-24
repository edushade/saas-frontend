import { describe, expect, it } from 'vitest';
import { getProfileImageValidationError } from './profile-image-validation';

describe('getProfileImageValidationError', () => {
	it('returns null for a small PNG', () => {
		const file = new File([new Uint8Array(100)], 'a.png', {
			type: 'image/png',
		});
		expect(getProfileImageValidationError(file)).toBeNull();
	});

	it('returns null for a small JPEG', () => {
		const file = new File([new Uint8Array(50)], 'a.jpg', {
			type: 'image/jpeg',
		});
		expect(getProfileImageValidationError(file)).toBeNull();
	});

	it('rejects non-allowed types', () => {
		const file = new File([new Uint8Array(10)], 'a.gif', { type: 'image/gif' });
		expect(getProfileImageValidationError(file)).toBe(
			'Please choose a PNG or JPEG image.',
		);
	});

	it('rejects files over 2MB', () => {
		const file = new File([new Uint8Array(2 * 1024 * 1024 + 1)], 'big.png', {
			type: 'image/png',
		});
		expect(getProfileImageValidationError(file)).toBe(
			'Image must be 2MB or smaller.',
		);
	});
});
