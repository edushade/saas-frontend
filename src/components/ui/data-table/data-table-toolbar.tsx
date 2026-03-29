'use client';

import type * as React from 'react';

import { cn } from '@/lib/utils';

export type DataTableToolbarProps = {
	children: React.ReactNode;
	className?: string;
};

export function DataTableToolbar({
	className,
	children,
}: DataTableToolbarProps) {
	return (
		<div
			role="toolbar"
			aria-label="Table tools"
			className={cn(
				'flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between',
				className,
			)}
		>
			{children}
		</div>
	);
}
