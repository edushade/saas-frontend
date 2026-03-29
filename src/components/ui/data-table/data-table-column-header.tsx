'use client';

import type { Column } from '@tanstack/react-table';
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from 'lucide-react';
import type * as React from 'react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export type DataTableColumnHeaderProps<TData, TValue> =
	React.HTMLAttributes<HTMLDivElement> & {
		column: Column<TData, TValue>;
		title: string;
		enableSortingMenu?: boolean;
		enableHidingMenu?: boolean;
	};

export function DataTableColumnHeader<TData, TValue>({
	className,
	title,
	column,
	enableSortingMenu = true,
	enableHidingMenu = true,
}: DataTableColumnHeaderProps<TData, TValue>) {
	const sortable = column.getCanSort() && enableSortingMenu;
	const hideable = column.getCanHide() && enableHidingMenu;

	if (!sortable && !hideable) {
		return <div className={cn(className)}>{title}</div>;
	}

	return (
		<div className={cn('flex items-center gap-2', className)}>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						type="button"
						variant="ghost"
						size="sm"
						className="-ml-3 h-8 text-text-secondary hover:text-text-primary data-[state=open]:bg-bg-tertiary"
					>
						<span>{title}</span>
						{sortable ? (
							column.getIsSorted() === 'desc' ? (
								<ArrowDown className="size-4 shrink-0" aria-hidden />
							) : column.getIsSorted() === 'asc' ? (
								<ArrowUp className="size-4 shrink-0" aria-hidden />
							) : (
								<ChevronsUpDown
									className="size-4 shrink-0 opacity-60"
									aria-hidden
								/>
							)
						) : null}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start" className="w-40">
					{sortable ? (
						<>
							<DropdownMenuItem
								onClick={() => column.toggleSorting(false)}
								className="gap-2"
							>
								<ArrowUp className="size-4" aria-hidden />
								Asc
							</DropdownMenuItem>
							<DropdownMenuItem
								onClick={() => column.toggleSorting(true)}
								className="gap-2"
							>
								<ArrowDown className="size-4" aria-hidden />
								Desc
							</DropdownMenuItem>
						</>
					) : null}
					{hideable ? (
						<>
							{sortable ? <DropdownMenuSeparator /> : null}
							<DropdownMenuItem
								onClick={() => column.toggleVisibility(false)}
								className="gap-2"
							>
								<EyeOff className="size-4" aria-hidden />
								Hide
							</DropdownMenuItem>
						</>
					) : null}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
