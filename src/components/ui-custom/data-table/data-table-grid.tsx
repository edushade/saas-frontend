import { flexRender, type Table as TanstackTable } from '@tanstack/react-table';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

import type { DataTableColumnMeta } from './types';

export type DataTableGridProps<TData> = {
	table: TanstackTable<TData>;
	className?: string;
	withContainer?: boolean;
	headerRowClassName?: string;
	getBodyRowClassName?: (row: TData) => string | undefined;
	emptyLabel?: string;
};

export function DataTableGrid<TData>({
	table,
	className,
	withContainer = true,
	headerRowClassName,
	getBodyRowClassName,
	emptyLabel = 'No results.',
}: DataTableGridProps<TData>) {
	const columns = table.getAllColumns().filter((c) => c.getIsVisible()).length;

	const tableNode = (
		<Table>
			<TableHeader>
				{table.getHeaderGroups().map((headerGroup) => (
					<TableRow
						key={headerGroup.id}
						className={cn(
							'border-border-secondary hover:bg-transparent',
							headerRowClassName,
						)}
					>
						{headerGroup.headers
							.filter((header) => header.column.getIsVisible())
							.map((header) => {
								const headMeta = header.column.columnDef.meta as
									| DataTableColumnMeta
									| undefined;
								return (
									<TableHead
										key={header.id}
										colSpan={header.colSpan}
										className={cn(
											'text-text-secondary h-12 px-4 text-xs font-semibold sm:px-6',
											headMeta?.headerClassName,
										)}
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
									</TableHead>
								);
							})}
					</TableRow>
				))}
			</TableHeader>
			<TableBody>
				{table.getRowModel().rows?.length ? (
					table.getRowModel().rows.map((row) => (
						<TableRow
							key={row.id}
							data-state={row.getIsSelected() ? 'selected' : undefined}
							className={cn(
								'border-border-secondary hover:bg-bg-secondary/80',
								getBodyRowClassName?.(row.original),
							)}
						>
							{row.getVisibleCells().map((cell) => {
								const cellMeta = cell.column.columnDef.meta as
									| DataTableColumnMeta
									| undefined;
								return (
									<TableCell
										key={cell.id}
										className={cn(
											'px-4 py-4 align-middle sm:px-6',
											cellMeta?.cellClassName,
										)}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								);
							})}
						</TableRow>
					))
				) : (
					<TableRow>
						<TableCell
							colSpan={Math.max(columns, 1)}
							className="text-text-secondary h-24 text-center"
						>
							{emptyLabel}
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);

	if (withContainer) {
		return (
			<div
				className={cn(
					'border-border-secondary overflow-hidden rounded-md border',
					className,
				)}
			>
				{tableNode}
			</div>
		);
	}

	return <div className={className}>{tableNode}</div>;
}
