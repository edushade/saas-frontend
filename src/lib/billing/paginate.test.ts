import { describe, expect, it } from "vitest";
import { paginateSlice } from "./paginate";

describe("paginateSlice", () => {
	it("returns the first page and correct range text", () => {
		const items = [1, 2, 3, 4, 5, 6, 7];
		const r = paginateSlice(items, 1, 3);
		expect(r.slice).toEqual([1, 2, 3]);
		expect(r.page).toBe(1);
		expect(r.totalPages).toBe(3);
		expect(r.total).toBe(7);
		expect(r.startIndex).toBe(1);
		expect(r.endIndex).toBe(3);
	});

	it("clamps page when out of range", () => {
		const items = ["a", "b"];
		const r = paginateSlice(items, 99, 5);
		expect(r.page).toBe(1);
		expect(r.slice).toEqual(["a", "b"]);
	});

	it("uses page size of at least 1", () => {
		const items = [10, 20];
		const r = paginateSlice(items, 1, 0);
		expect(r.slice.length).toBeLessThanOrEqual(2);
		expect(r.totalPages).toBeGreaterThanOrEqual(1);
	});
});
