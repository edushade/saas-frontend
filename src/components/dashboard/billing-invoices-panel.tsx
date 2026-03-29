import { Plus } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable, useDataTable } from '@/components/ui/data-table';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { billingInvoicesGlobalFilterFn } from '@/lib/billing/billing-invoices-global-filter';
import { MOCK_BILLING_INVOICES } from '@/lib/billing/invoice-mock';
import { billingInvoiceColumns } from './billing-invoices-columns';

const PAGE_SIZE = 5;

type StatusFilter = 'all' | 'paid' | 'unpaid';

export function BillingInvoicesPanel() {
	const data = useMemo(() => [...MOCK_BILLING_INVOICES], []);

	const table = useDataTable({
		data,
		columns: billingInvoiceColumns,
		getRowId: (row) => row.id,
		defaultPageSize: PAGE_SIZE,
		initialState: {
			sorting: [{ id: 'dateIso', desc: true }],
			pagination: { pageIndex: 0, pageSize: PAGE_SIZE },
		},
		globalFilterFn: billingInvoicesGlobalFilterFn,
		tableOptions: {
			enableRowSelection: false,
		},
	});

	const statusFilter = table
		.getState()
		.columnFilters.find((f) => f.id === 'status')?.value;
	const status: StatusFilter =
		statusFilter === 'paid' || statusFilter === 'unpaid' ? statusFilter : 'all';

	const statusLabel =
		status === 'all' ? 'Status' : status === 'paid' ? 'Paid' : 'Unpaid';

	const setStatusFilter = (next: StatusFilter) => {
		table
			.getColumn('status')
			?.setFilterValue(next === 'all' ? undefined : next);
		table.setPageIndex(0);
	};

	return (
		<Card className="gap-0 rounded-xl border-border-secondary bg-bg-primary shadow-sm">
			<CardHeader>
				<CardTitle className="text-base font-semibold text-text-primary">
					Invoices
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<DataTable
					table={table}
					emptyLabel="No invoices match your filters."
					pagination={{
						pageSizeOptions: [5, 10, 20, 50],
					}}
					wrapperClassName="gap-4"
					toolbar={
						<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
							<Input
								placeholder="Search titles..."
								value={String(table.getState().globalFilter ?? '')}
								onChange={(e) => {
									table.setGlobalFilter(e.target.value);
									table.setPageIndex(0);
								}}
								className="max-w-md border-border-secondary bg-bg-primary"
								aria-label="Search invoices by title or id"
							/>
							<div className="flex flex-wrap items-center gap-2">
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											type="button"
											variant="outline"
											className="border-border-secondary"
										>
											<Plus className="size-4" />
											{statusLabel}
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem onSelect={() => setStatusFilter('all')}>
											All
										</DropdownMenuItem>
										<DropdownMenuItem onSelect={() => setStatusFilter('paid')}>
											Paid
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => setStatusFilter('unpaid')}
										>
											Unpaid
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>

								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											type="button"
											variant="outline"
											className="border-border-secondary"
										>
											Sort
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem
											onSelect={() => {
												table.setSorting([{ id: 'dateIso', desc: true }]);
												table.setPageIndex(0);
											}}
										>
											Date (newest)
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => {
												table.setSorting([{ id: 'dateIso', desc: false }]);
												table.setPageIndex(0);
											}}
										>
											Date (oldest)
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => {
												table.setSorting([{ id: 'amountCents', desc: true }]);
												table.setPageIndex(0);
											}}
										>
											Amount (high)
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => {
												table.setSorting([{ id: 'amountCents', desc: false }]);
												table.setPageIndex(0);
											}}
										>
											Amount (low)
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</div>
					}
				/>
			</CardContent>
		</Card>
	);
}
