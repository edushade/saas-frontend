const MAX_PROFILE_IMAGE_BYTES = 2 * 1024 * 1024;
const ALLOWED_PROFILE_IMAGE_TYPES = new Set(['image/png', 'image/jpeg']);

export function getProfileImageValidationError(file: File): string | null {
	if (!ALLOWED_PROFILE_IMAGE_TYPES.has(file.type)) {
		return 'Please choose a PNG or JPEG image.';
	}
	if (file.size > MAX_PROFILE_IMAGE_BYTES) {
		return 'Image must be 2MB or smaller.';
	}
	return null;
}
