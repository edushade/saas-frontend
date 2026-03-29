import type { Row } from '@tanstack/react-table';
import type { DemoMemberRow } from '@/data/demo-members';

export function membersGlobalFilterFn(
	row: Row<DemoMemberRow>,
	_columnId: string,
	filterValue: unknown,
): boolean {
	const q = String(filterValue ?? '')
		.trim()
		.toLowerCase();
	if (!q) {
		return true;
	}
	const o = row.original;
	const name = o.name?.toLowerCase() ?? '';
	const email = o.email.toLowerCase();
	return name.includes(q) || email.includes(q);
}
