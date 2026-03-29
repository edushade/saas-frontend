/**
 * Formats a finite integer for dashboard metrics using grouped thousands (e.g. 1240 → "1,240").
 * Non-finite values return `"0"`.
 */
export function formatCompactInt(value: number): string {
	if (!Number.isFinite(value)) {
		return '0';
	}
	return Math.round(value).toLocaleString('en-US');
}
