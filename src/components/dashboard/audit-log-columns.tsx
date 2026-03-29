'use client';

import { type ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { format } from 'date-fns';
import { DataTableColumnHeader } from '@/components/ui/data-table';
import type { AuditLogRow } from '@/lib/audit/audit-log-mock';

function formatActedAt(iso: string): string {
	return format(new Date(iso), 'MMM d, yyyy; h:mm aa');
}

const columnHelper = createColumnHelper<AuditLogRow>();

export const auditLogColumns: ColumnDef<AuditLogRow, any>[] = [
	columnHelper.accessor('event', {
		id: 'event',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Events" />
		),
		cell: (ctx) => (
			<span className="text-text-primary font-medium">{ctx.getValue()}</span>
		),
		sortingFn: (a, b) =>
			a.original.event.localeCompare(b.original.event, undefined, {
				sensitivity: 'base',
			}),
	}),
	columnHelper.accessor('type', {
		id: 'type',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Type" />
		),
		filterFn: (row, columnId, filterValue) => {
			if (
				filterValue === undefined ||
				filterValue === null ||
				filterValue === '' ||
				filterValue === 'all'
			) {
				return true;
			}
			return row.getValue(columnId) === filterValue;
		},
		enableSorting: false,
		cell: (ctx) => (
			<span className="text-text-secondary text-sm">{ctx.getValue()}</span>
		),
	}),
	columnHelper.accessor('actedBy', {
		id: 'actedBy',
		header: 'Acted By',
		enableSorting: false,
		cell: (ctx) => (
			<span className="text-text-primary text-sm">{ctx.getValue()}</span>
		),
	}),
	columnHelper.accessor('email', {
		id: 'email',
		header: 'Email',
		enableSorting: false,
		cell: (ctx) => (
			<span className="text-text-secondary text-sm">{ctx.getValue()}</span>
		),
	}),
	columnHelper.accessor('role', {
		id: 'role',
		header: 'Role',
		enableSorting: false,
		cell: (ctx) => (
			<span className="text-text-primary text-sm">{ctx.getValue()}</span>
		),
	}),
	columnHelper.accessor('ipAddress', {
		id: 'ipAddress',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="IP Address" />
		),
		cell: (ctx) => (
			<span className="text-text-secondary font-mono text-sm">
				{ctx.getValue()}
			</span>
		),
		sortingFn: (a, b) =>
			a.original.ipAddress.localeCompare(b.original.ipAddress, undefined, {
				numeric: true,
			}),
	}),
	columnHelper.accessor('dateIso', {
		id: 'dateIso',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Date Acted" />
		),
		cell: (ctx) => (
			<span className="text-text-secondary text-sm">
				{formatActedAt(ctx.getValue())}
			</span>
		),
		sortingFn: (a, b) =>
			new Date(a.original.dateIso).getTime() -
			new Date(b.original.dateIso).getTime(),
	}),
];
