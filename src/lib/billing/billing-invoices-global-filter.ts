import type { Row } from '@tanstack/react-table';

import type { BillingInvoiceRow } from '@/lib/billing/invoice-mock';


export function billingInvoicesGlobalFilterFn(
	row: Row<BillingInvoiceRow>,
	_columnId: string,
	filterValue: unknown,
): boolean {
	const q = String(filterValue ?? '')
		.trim()
		.toLowerCase();
	if (!q) {
		return true;
	}
	const r = row.original;
	return (
		r.title.toLowerCase().includes(q) ||
		r.id.includes(q) ||
		`#${r.id}`.toLowerCase().includes(q)
	);
}
