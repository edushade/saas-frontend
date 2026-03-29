import {
	type ColumnDef,
	type ColumnFiltersState,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type PaginationState,
	type RowSelectionState,
	type SortingState,
	type TableOptions,
	useReactTable,
	type VisibilityState,
} from '@tanstack/react-table';
import { useState } from 'react';

export type UseDataTableProps<TData> = {
	data: TData[];
	/** Per-column `TValue` differs (e.g. booleans vs strings); keep loose for mixed column defs. */
	// biome-ignore lint/suspicious/noExplicitAny: TanStack column defs use heterogeneous TValue
	columns: ColumnDef<TData, any>[];
	getRowId?: TableOptions<TData>['getRowId'];
	initialState?: Partial<{
		sorting: SortingState;
		columnFilters: ColumnFiltersState;
		globalFilter: string;
		pagination: PaginationState;
		columnVisibility: VisibilityState;
		rowSelection: RowSelectionState;
	}>;
	globalFilterFn?: TableOptions<TData>['globalFilterFn'];
	defaultPageSize?: number;
	tableOptions?: Partial<TableOptions<TData>>;
};

export function useDataTable<TData>({
	data,
	columns,
	getRowId,
	initialState,
	globalFilterFn,
	defaultPageSize = 10,
	tableOptions,
}: UseDataTableProps<TData>) {
	const { state: extraTableState, ...tableRest } = tableOptions ?? {};
	const manualFiltering = tableOptions?.manualFiltering === true;
	const manualPagination = tableOptions?.manualPagination === true;
	const manualSorting = tableOptions?.manualSorting === true;

	const [sorting, setSorting] = useState<SortingState>(
		() => initialState?.sorting ?? [],
	);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
		() => initialState?.columnFilters ?? [],
	);
	const [globalFilter, setGlobalFilter] = useState(
		() => initialState?.globalFilter ?? '',
	);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
		() => initialState?.columnVisibility ?? {},
	);
	const [pagination, setPagination] = useState<PaginationState>(() => ({
		pageIndex: initialState?.pagination?.pageIndex ?? 0,
		pageSize: initialState?.pagination?.pageSize ?? defaultPageSize,
	}));
	const [rowSelection, setRowSelection] = useState<RowSelectionState>(
		() => initialState?.rowSelection ?? {},
	);

	return useReactTable({
		data,
		columns,
		getRowId,
		...tableRest,
		state: {
			...extraTableState,
			sorting,
			columnFilters,
			globalFilter,
			columnVisibility,
			pagination,
			rowSelection,
		},
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onGlobalFilterChange: setGlobalFilter,
		onColumnVisibilityChange: setColumnVisibility,
		onPaginationChange: setPagination,
		onRowSelectionChange: setRowSelection,
		getCoreRowModel: getCoreRowModel(),
		...(manualFiltering ? {} : { getFilteredRowModel: getFilteredRowModel() }),
		...(manualSorting ? {} : { getSortedRowModel: getSortedRowModel() }),
		...(manualPagination
			? {}
			: { getPaginationRowModel: getPaginationRowModel() }),
		globalFilterFn: globalFilterFn ?? 'includesString',
	});
}
