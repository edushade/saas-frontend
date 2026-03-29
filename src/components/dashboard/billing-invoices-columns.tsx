'use client';

import { type ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { Check, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTableColumnHeader } from '@/components/ui/data-table';
import { formatInvoiceTableDate } from '@/lib/billing/format-invoice-datetime';
import type { BillingInvoiceRow } from '@/lib/billing/invoice-mock';
import { cn } from '@/lib/utils';

function formatMoney(cents: number): string {
	const sign = cents < 0 ? '-' : '';
	const abs = Math.abs(cents);
	return `${sign}$${(abs / 100).toFixed(2)}`;
}

const columnHelper = createColumnHelper<BillingInvoiceRow>();

export const billingInvoiceColumns = [
	columnHelper.accessor('id', {
		id: 'id',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="ID" />
		),
		cell: (ctx) => (
			<span className="font-medium text-text-primary">#{ctx.getValue()}</span>
		),
		sortingFn: (rowA, rowB) =>
			rowA.original.id.localeCompare(rowB.original.id, undefined, {
				numeric: true,
			}),
	}),
	columnHelper.accessor('dateIso', {
		id: 'dateIso',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Date" />
		),
		cell: (ctx) => (
			<span className="text-text-secondary">
				{formatInvoiceTableDate(ctx.getValue())}
			</span>
		),
		sortingFn: (rowA, rowB) =>
			new Date(rowA.original.dateIso).getTime() -
			new Date(rowB.original.dateIso).getTime(),
	}),
	columnHelper.accessor('amountCents', {
		id: 'amountCents',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Amount" />
		),
		cell: (ctx) => (
			<span className="text-text-primary">{formatMoney(ctx.getValue())}</span>
		),
	}),
	columnHelper.accessor('status', {
		id: 'status',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Status" />
		),
		filterFn: (row, columnId, filterValue) => {
			if (
				filterValue === undefined ||
				filterValue === null ||
				filterValue === 'all' ||
				filterValue === ''
			) {
				return true;
			}
			return row.getValue(columnId) === filterValue;
		},
		enableSorting: false,
		cell: (ctx) => {
			const status = ctx.getValue();
			return status === 'paid' ? (
				<span
					className={cn(
						'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium',
						'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400',
					)}
				>
					<Check className="size-3" aria-hidden />
					Paid
				</span>
			) : (
				<span
					className={cn(
						'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium',
						'bg-red-500/12 text-red-700 dark:text-red-400',
					)}
				>
					<span className="size-1.5 rounded-full bg-red-500" aria-hidden />
					Unpaid
				</span>
			);
		},
	}),
	columnHelper.display({
		id: 'actions',
		meta: {
			headerClassName: 'text-right',
			cellClassName: 'text-right',
		},
		header: () => <span className="text-text-primary font-medium">Action</span>,
		cell: ({ row }) => {
			const inv = row.original;
			return inv.status === 'unpaid' ? (
				<Button
					type="button"
					variant="link"
					className="text-brand-300 h-auto p-0"
				>
					Pay Now
				</Button>
			) : (
				<Button
					type="button"
					variant="ghost"
					size="icon"
					className="text-text-primary size-8"
					aria-label={`Download invoice ${inv.id}`}
				>
					<Download className="size-4" />
				</Button>
			);
		},
	}),
] as ColumnDef<BillingInvoiceRow, unknown>[];
