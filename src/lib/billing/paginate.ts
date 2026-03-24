/**
 * @param items Full list (already filtered/sorted).
 * @param page 1-based page index.
 * @param pageSize Max items per page.
 * @returns Slice for the current page and pagination metadata.
 */
export function paginateSlice<T>(
	items: readonly T[],
	page: number,
	pageSize: number,
): {
	slice: T[];
	page: number;
	totalPages: number;
	total: number;
	startIndex: number;
	endIndex: number;
} {
	const total = items.length;
	const safeSize = Math.max(1, pageSize);
	const totalPages = Math.max(1, Math.ceil(total / safeSize) || 1);
	const safePage = Math.min(Math.max(1, page), totalPages);
	const start = (safePage - 1) * safeSize;
	const slice = items.slice(start, start + safeSize);
	const endIndex = start + slice.length;
	return {
		slice,
		page: safePage,
		totalPages,
		total,
		startIndex: total === 0 ? 0 : start + 1,
		endIndex,
	};
}
