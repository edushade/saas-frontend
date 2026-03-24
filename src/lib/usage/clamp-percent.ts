/**
 * Clamps a numeric percentage to the inclusive range 0–100 for progress UI.
 * Non-finite values become 0.
 */
export function clampPercent(value: number): number {
	if (!Number.isFinite(value)) {
		return 0;
	}
	return Math.min(100, Math.max(0, Math.round(value)));
}
