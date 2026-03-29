'use client';

import type { Table as TanstackTable } from '@tanstack/react-table';
import { Settings2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export type DataTableViewOptionsProps<TData> = {
	table: TanstackTable<TData>;
	className?: string;
	triggerClassName?: string;
};

export function DataTableViewOptions<TData>({
	table,
	className,
	triggerClassName,
}: DataTableViewOptionsProps<TData>) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					type="button"
					variant="outline"
					size="sm"
					className={cn(
						'border-border-secondary bg-bg-primary text-text-secondary h-8 shrink-0',
						triggerClassName,
					)}
				>
					<Settings2 className="size-4" aria-hidden />
					View
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className={cn('w-44', className)}>
				<DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{table
					.getAllColumns()
					.filter(
						(col) => typeof col.accessorFn !== 'undefined' && col.getCanHide(),
					)
					.map((column) => (
						<DropdownMenuCheckboxItem
							key={column.id}
							className="capitalize"
							checked={column.getIsVisible()}
							onCheckedChange={(value) => column.toggleVisibility(!!value)}
						>
							{column.id}
						</DropdownMenuCheckboxItem>
					))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
