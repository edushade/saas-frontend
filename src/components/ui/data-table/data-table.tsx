import type * as React from 'react';

import { cn } from '@/lib/utils';

import { DataTableGrid, type DataTableGridProps } from './data-table-grid';
import {
	DataTablePagination,
	type DataTablePaginationProps,
} from './data-table-pagination';

export type DataTableProps<TData> = DataTableGridProps<TData> & {
	toolbar?: React.ReactNode;
	pagination?: boolean | Omit<DataTablePaginationProps<TData>, 'table'>;
	wrapperClassName?: string;
};

function paginationOptions<TData>(
	pagination: DataTableProps<TData>['pagination'],
): Omit<DataTablePaginationProps<TData>, 'table'> | null {
	if (pagination === undefined || pagination === false) {
		return null;
	}
	if (pagination === true) {
		return {};
	}
	return pagination;
}

export function DataTable<TData>({
	table,
	toolbar,
	pagination,
	wrapperClassName,
	...grid
}: DataTableProps<TData>) {
	const pageProps = paginationOptions(pagination);
	const { withContainer = true, ...gridRest } = grid;

	return (
		<div className={cn('flex flex-col gap-3', wrapperClassName)}>
			{toolbar ? <div>{toolbar}</div> : null}
			<DataTableGrid
				table={table}
				{...gridRest}
				withContainer={withContainer}
			/>
			{pageProps !== null ? (
				<DataTablePagination table={table} {...pageProps} />
			) : null}
		</div>
	);
}
