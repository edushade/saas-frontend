import type { Table as TanstackTable } from '@tanstack/react-table';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const PAGE_SIZES = [5, 10, 20, 50] as const;

export type DataTablePaginationProps<TData> = {
	table: TanstackTable<TData>;
	className?: string;
	pageSizeOptions?: readonly number[];
	showSelectionSummary?: boolean;
};

function linkDisabled(disabled: boolean) {
	return disabled ? 'pointer-events-none opacity-50' : undefined;
}

/**
 * Footer controls using app `Pagination` + TanStack Table page state.
 */
export function DataTablePagination<TData>({
	table,
	className,
	pageSizeOptions = PAGE_SIZES,
	showSelectionSummary = false,
}: DataTablePaginationProps<TData>) {
	const pageCount = table.getPageCount();
	const pageIndex = table.getState().pagination.pageIndex;
	const current = pageIndex + 1;
	const filtered = table.getFilteredRowModel().rows.length;
	const pageSize = table.getState().pagination.pageSize;
	const canPrev = table.getCanPreviousPage();
	const canNext = table.getCanNextPage();
	const selected = table.getFilteredSelectedRowModel().rows.length;

	return (
		<div
			className={cn(
				'flex flex-col gap-3 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-3',
				className,
			)}
		>
			<div className="text-text-secondary flex min-w-0 flex-col gap-1 text-sm tabular-nums sm:flex-1">
				{showSelectionSummary ? (
					<p>
						{selected} of {filtered} row{filtered === 1 ? '' : 's'} selected
					</p>
				) : null}
				<p>
					{filtered} row{filtered === 1 ? '' : 's'}
					{pageCount > 0 ? (
						<>
							{' '}
							· Page {current} of {pageCount}
						</>
					) : null}
				</p>
			</div>
			<div className="flex flex-wrap items-center gap-4 sm:gap-6">
				<div className="flex items-center gap-2">
					<span className="text-text-secondary whitespace-nowrap text-sm">
						Rows per page
					</span>
					<Select
						value={String(pageSize)}
						onValueChange={(v) => {
							table.setPageSize(Number(v));
							table.setPageIndex(0);
						}}
					>
						<SelectTrigger
							size="sm"
							className="border-border-secondary bg-bg-primary w-18"
							aria-label="Rows per page"
						>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{pageSizeOptions.map((n) => (
								<SelectItem key={n} value={String(n)}>
									{n}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<Pagination className="mx-0 w-auto justify-end">
					<PaginationContent className="flex-wrap">
						<PaginationItem>
							<PaginationLink
								href="#"
								size="icon"
								aria-label="First page"
								aria-disabled={!canPrev}
								className={cn(
									'border-border-secondary',
									linkDisabled(!canPrev),
								)}
								onClick={(e) => {
									e.preventDefault();
									if (canPrev) {
										table.setPageIndex(0);
									}
								}}
							>
								<ChevronsLeft className="size-4" />
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationPrevious
								href="#"
								aria-disabled={!canPrev}
								className={cn(
									'border-border-secondary',
									linkDisabled(!canPrev),
								)}
								onClick={(e) => {
									e.preventDefault();
									if (canPrev) {
										table.previousPage();
									}
								}}
							/>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink
								href="#"
								isActive
								size="icon"
								aria-label={`Page ${current}`}
								className="border-border-secondary min-w-9"
								onClick={(e) => e.preventDefault()}
							>
								{pageCount > 0 ? current : 0}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationNext
								href="#"
								aria-disabled={!canNext}
								className={cn(
									'border-border-secondary',
									linkDisabled(!canNext),
								)}
								onClick={(e) => {
									e.preventDefault();
									if (canNext) {
										table.nextPage();
									}
								}}
							/>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink
								href="#"
								size="icon"
								aria-label="Last page"
								aria-disabled={!canNext}
								className={cn(
									'border-border-secondary',
									linkDisabled(!canNext),
								)}
								onClick={(e) => {
									e.preventDefault();
									if (canNext) {
										table.setPageIndex(pageCount - 1);
									}
								}}
							>
								<ChevronsRight className="size-4" />
							</PaginationLink>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
}
