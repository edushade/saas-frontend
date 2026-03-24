import { describe, expect, it } from "vitest";
import { clampPercent } from "./clamp-percent";

describe("clampPercent", () => {
	it("rounds and clamps to 0–100", () => {
		expect(clampPercent(57.4)).toBe(57);
		expect(clampPercent(0)).toBe(0);
		expect(clampPercent(100)).toBe(100);
		expect(clampPercent(150)).toBe(100);
		expect(clampPercent(-10)).toBe(0);
	});

	it("returns 0 for non-finite values", () => {
		expect(clampPercent(Number.NaN)).toBe(0);
		expect(clampPercent(Number.POSITIVE_INFINITY)).toBe(0);
	});
});
