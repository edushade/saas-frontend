export type MemberSearchable = {
	name: string | null;
	email: string;
};

/**
 * Filters members by case-insensitive substring match on name or email.
 * Pending members (null name) still match on email.
 */
export function filterMembersBySearch<T extends MemberSearchable>(
	rows: readonly T[],
	query: string,
): T[] {
	const q = query.trim().toLowerCase();
	if (!q) {
		return [...rows];
	}
	return rows.filter((row) => {
		const nameMatch = row.name?.toLowerCase().includes(q) ?? false;
		const emailMatch = row.email.toLowerCase().includes(q);
		return nameMatch || emailMatch;
	});
}
