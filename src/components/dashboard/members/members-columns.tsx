'use client';

import {
	type Column,
	type ColumnDef,
	createColumnHelper,
	type Row,
	type Table,
} from '@tanstack/react-table';
import { Mail, MoreVertical, Pencil, Trash2 } from 'lucide-react';
import * as React from 'react';
import { GithubIcon, GoogleIcon } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import { DataTableColumnHeader } from '@/components/ui/data-table';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { DemoMemberRow, MemberAuthProvider } from '@/data/demo-members';
import { cn } from '@/lib/utils';

function LoggedInWithCell({ auth }: { auth: MemberAuthProvider | null }) {
	if (!auth) {
		return <span className="text-text-tertiary">—</span>;
	}
	if (auth === 'google') {
		return (
			<span className="text-text-secondary flex items-center gap-2 text-sm">
				<GoogleIcon />
				Google
			</span>
		);
	}
	if (auth === 'github') {
		return (
			<span className="text-text-secondary flex items-center gap-2 text-sm">
				<GithubIcon className="size-4 shrink-0" aria-hidden />
				Github
			</span>
		);
	}
	return (
		<span className="text-text-secondary flex items-center gap-2 text-sm">
			<Mail className="size-4 shrink-0 text-text-tertiary" aria-hidden />
			Email
		</span>
	);
}

const columnHelper = createColumnHelper<DemoMemberRow>();

/** Native `<input type="checkbox">` so TanStack `getToggle*Handler()` sees `event.target.checked` (Radix `Checkbox` is a button). */
const selectCheckboxClass = cn(
	'border-input text-primary focus-visible:ring-ring size-4 shrink-0 cursor-pointer rounded-[4px] border shadow-xs',
	'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
	'disabled:cursor-not-allowed disabled:opacity-50 accent-primary',
);

function MembersSelectAllHeader({ table }: { table: Table<DemoMemberRow> }) {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const all = table.getIsAllPageRowsSelected();
	const some = table.getIsSomePageRowsSelected();

	React.useLayoutEffect(() => {
		const el = inputRef.current;
		if (el) {
			el.indeterminate = Boolean(some && !all);
		}
	}, [some, all]);

	return (
		<input
			ref={inputRef}
			type="checkbox"
			aria-label="Select all"
			className={selectCheckboxClass}
			checked={all}
			onChange={table.getToggleAllPageRowsSelectedHandler()}
		/>
	);
}

function MembersSelectRowCheckbox({ row }: { row: Row<DemoMemberRow> }) {
	return (
		<input
			type="checkbox"
			aria-label="Select row"
			className={selectCheckboxClass}
			checked={row.getIsSelected()}
			disabled={!row.getCanSelect()}
			onChange={row.getToggleSelectedHandler()}
		/>
	);
}

function joinedToTime(row: DemoMemberRow): number {
	if (row.pending) {
		return 0;
	}
	const t = Date.parse(row.joinedLabel);
	return Number.isFinite(t) ? t : 0;
}

/** Optional behaviors for the members table columns (selection, column visibility). */
export type MemberTableFeatures = {
	/** When false, the select column is omitted; pair with `tableOptions.enableRowSelection: false`. */
	enableSelection?: boolean;
	/** When false, columns cannot be hidden and header menus omit “Hide”. */
	enableColumnHiding?: boolean;
};

const defaultMemberTableFeatures: Required<MemberTableFeatures> = {
	enableSelection: true,
	enableColumnHiding: true,
};

/**
 * Builds members column defs. Use {@link MemberTableFeatures} to omit selection or column hiding.
 */
export function createMemberColumns(
	features: MemberTableFeatures = {},
): ColumnDef<DemoMemberRow, any>[] {
	const f = { ...defaultMemberTableFeatures, ...features };

	function sortableHeader(title: string) {
		return ({ column }: { column: Column<DemoMemberRow, any> }) => (
			<DataTableColumnHeader
				column={column}
				title={title}
				enableHidingMenu={f.enableColumnHiding}
			/>
		);
	}

	const columns: ColumnDef<DemoMemberRow, any>[] = [];

	if (f.enableSelection) {
		columns.push(
			columnHelper.display({
				id: 'select',
				meta: {
					headerClassName: 'w-12 pr-0',
					cellClassName: 'w-12 pr-0',
				},
				header: ({ table }) => <MembersSelectAllHeader table={table} />,
				cell: ({ row }) => <MembersSelectRowCheckbox row={row} />,
				enableSorting: false,
				enableHiding: false,
			}),
		);
	}

	columns.push(
		columnHelper.accessor('pending', {
			id: 'memberStatus',
			header: () => null,
			cell: () => null,
			enableSorting: false,
			enableHiding: false,
			filterFn: (row, _id, value) => {
				if (value === undefined || value === '' || value === 'all') {
					return true;
				}
				if (value === 'pending') {
					return row.original.pending;
				}
				if (value === 'active') {
					return !row.original.pending;
				}
				return true;
			},
		}),
		columnHelper.accessor('name', {
			id: 'name',
			enableHiding: f.enableColumnHiding,
			header: sortableHeader('Name'),
			cell: (info) => (
				<span className="text-text-primary font-medium">
					{info.getValue() ?? <span className="text-text-tertiary">—</span>}
				</span>
			),
		}),
		columnHelper.accessor('email', {
			enableHiding: f.enableColumnHiding,
			header: sortableHeader('Email'),
			cell: (info) => (
				<span className="text-text-secondary text-sm">{info.getValue()}</span>
			),
		}),
		columnHelper.accessor('auth', {
			id: 'auth',
			enableHiding: f.enableColumnHiding,
			header: sortableHeader('Logged in with'),
			cell: (info) => <LoggedInWithCell auth={info.getValue()} />,
		}),
		columnHelper.accessor('role', {
			enableHiding: f.enableColumnHiding,
			header: sortableHeader('Role'),
			cell: (info) => (
				<span className="text-text-primary text-sm">
					{info.getValue() ?? <span className="text-text-tertiary">—</span>}
				</span>
			),
		}),
		columnHelper.accessor('joinedLabel', {
			id: 'joined',
			enableHiding: f.enableColumnHiding,
			sortingFn: (rowA, rowB) => {
				const ta = joinedToTime(rowA.original);
				const tb = joinedToTime(rowB.original);
				if (ta === tb) {
					return 0;
				}
				return ta < tb ? -1 : 1;
			},
			header: sortableHeader('Joined at'),
			cell: (info) => {
				const row = info.row.original;
				return (
					<span
						className={cn(
							'text-sm',
							row.pending ? 'text-text-tertiary italic' : 'text-text-secondary',
						)}
					>
						{info.getValue()}
					</span>
				);
			},
		}),
		columnHelper.display({
			id: 'actions',
			header: () => <span className="sr-only">Actions</span>,
			meta: {
				headerClassName: 'w-12',
			},
			enableHiding: false,
			cell: ({ row }) => {
				const m = row.original;
				if (m.pending) {
					return (
						<span className="text-text-tertiary block text-center">—</span>
					);
				}
				const labelTarget = m.name ?? m.email;
				return (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								type="button"
								variant="ghost"
								size="icon-sm"
								className="text-text-secondary hover:text-text-primary"
								aria-label={`Actions for ${labelTarget}`}
							>
								<MoreVertical className="size-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="w-52">
							<DropdownMenuLabel>Actions</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem
								onClick={() => {
									/* wire when API exists */
								}}
							>
								<Pencil className="size-4" aria-hidden />
								Manage Permissions
							</DropdownMenuItem>
							<DropdownMenuItem variant="destructive">
								<Trash2 className="size-4" aria-hidden />
								Remove Member
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				);
			},
		}),
	);

	return columns;
}

/** Default members columns (selection + column hiding enabled). */
export const memberColumns = createMemberColumns();
