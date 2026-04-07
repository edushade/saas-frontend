"use client";

import { ArrowUpDown, Calendar, Plus, Search } from "lucide-react";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { DataTable, useDataTable } from "@/components/ui-custom/data-table";
import { auditLogGlobalFilterFn } from "@/lib/audit/audit-log-global-filter";
import { MOCK_AUDIT_LOG_ROWS } from "@/lib/audit/constants";
import { cn } from "@/lib/utils";
import { auditLogColumns } from "./audit-log-columns";

const PAGE_SIZE = 10;

const DASHED_TOOLBAR_BTN =
	"border-dashed border-border-secondary bg-bg-primary text-text-secondary hover:bg-bg-tertiary";

type TypeFilter = "all" | "Auth" | "Billing" | "Team" | "Security" | "Settings";

export function AuditLogsActivitiesPanel() {
	const data = useMemo(() => [...MOCK_AUDIT_LOG_ROWS], []);

	const table = useDataTable({
		data,
		columns: auditLogColumns,
		getRowId: (row) => row.id,
		defaultPageSize: PAGE_SIZE,
		initialState: {
			sorting: [{ id: "dateIso", desc: true }],
			pagination: { pageIndex: 0, pageSize: PAGE_SIZE },
		},
		globalFilterFn: auditLogGlobalFilterFn,
		tableOptions: {
			enableRowSelection: false,
		},
	});

	const typeRaw = table
		.getState()
		.columnFilters.find((f) => f.id === "type")?.value;
	const typeFilter: TypeFilter =
		typeRaw === "Auth" ||
		typeRaw === "Billing" ||
		typeRaw === "Team" ||
		typeRaw === "Security" ||
		typeRaw === "Settings"
			? typeRaw
			: "all";

	const statusLabel = typeFilter === "all" ? "Status" : typeFilter;

	const setTypeFilter = (next: TypeFilter) => {
		table.getColumn("type")?.setFilterValue(next === "all" ? undefined : next);
		table.setPageIndex(0);
	};

	return (
		<Card className="gap-0 rounded-xl border-border-secondary bg-bg-primary space-y-4  shadow-sm">
			<CardHeader>
				<CardTitle className="text-base font-semibold text-text-primary">
					All Activities
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<DataTable
					table={table}
					emptyLabel="No activities match your filters."
					pagination={{
						pageSizeOptions: [5, 10, 20, 50],
					}}
					wrapperClassName="gap-4"
					toolbar={
						<div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between">
							<div className="relative min-w-0 max-w-md flex-1">
								<Search
									className="text-text-tertiary pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2"
									aria-hidden
								/>
								<Input
									placeholder="Search titles..."
									value={String(table.getState().globalFilter ?? "")}
									onChange={(e) => {
										table.setGlobalFilter(e.target.value);
										table.setPageIndex(0);
									}}
									className="border-border-secondary bg-bg-primary pl-9"
									aria-label="Search activities"
								/>
							</div>
							<div className="flex flex-wrap items-center gap-2 lg:ml-auto lg:justify-end">
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											type="button"
											variant="outline"
											size="sm"
											className={cn(DASHED_TOOLBAR_BTN)}
										>
											<Plus className="size-4" aria-hidden />
											{statusLabel}
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end" className="w-44">
										<DropdownMenuItem onSelect={() => setTypeFilter("all")}>
											All types
										</DropdownMenuItem>
										<DropdownMenuItem onSelect={() => setTypeFilter("Auth")}>
											Auth
										</DropdownMenuItem>
										<DropdownMenuItem onSelect={() => setTypeFilter("Billing")}>
											Billing
										</DropdownMenuItem>
										<DropdownMenuItem onSelect={() => setTypeFilter("Team")}>
											Team
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => setTypeFilter("Security")}
										>
											Security
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => setTypeFilter("Settings")}
										>
											Settings
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>

								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											type="button"
											variant="outline"
											size="sm"
											className={DASHED_TOOLBAR_BTN}
										>
											<Calendar className="size-4" aria-hidden />
											Date
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end" className="w-48">
										<DropdownMenuItem
											onSelect={() => {
												table.setSorting([{ id: "dateIso", desc: true }]);
												table.setPageIndex(0);
											}}
										>
											Newest first
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => {
												table.setSorting([{ id: "dateIso", desc: false }]);
												table.setPageIndex(0);
											}}
										>
											Oldest first
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>

								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											type="button"
											variant="outline"
											size="sm"
											className="border-border-secondary bg-bg-primary text-text-secondary"
										>
											<ArrowUpDown className="size-4" aria-hidden />
											Sort
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end" className="w-52">
										<DropdownMenuItem
											onSelect={() => {
												table.setSorting([{ id: "dateIso", desc: true }]);
												table.setPageIndex(0);
											}}
										>
											Date (newest)
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => {
												table.setSorting([{ id: "dateIso", desc: false }]);
												table.setPageIndex(0);
											}}
										>
											Date (oldest)
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => {
												table.setSorting([{ id: "ipAddress", desc: false }]);
												table.setPageIndex(0);
											}}
										>
											IP address (low → high)
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => {
												table.setSorting([{ id: "ipAddress", desc: true }]);
												table.setPageIndex(0);
											}}
										>
											IP address (high → low)
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => {
												table.setSorting([{ id: "event", desc: false }]);
												table.setPageIndex(0);
											}}
										>
											Event (A–Z)
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => {
												table.setSorting([{ id: "event", desc: true }]);
												table.setPageIndex(0);
											}}
										>
											Event (Z–A)
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
