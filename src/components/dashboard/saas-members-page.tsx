import { ArrowUpDown, Calendar, Clock, Plus, Search } from "lucide-react";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
	DataTable,
	DataTableToolbar,
	DataTableViewOptions,
	useDataTable,
} from "@/components/ui-custom/data-table";
import type { DemoMemberRow } from "@/lib/members/members";
import { DEMO_MEMBERS } from "@/lib/members/members";
import { cn } from "@/lib/utils";
import { createMemberColumns } from "./members/members-columns";
import { membersGlobalFilterFn } from "./members/members-global-filter";
import SaasDashboardHeader from "./saas-dashboard-header";

const DASHED_TOOLBAR_BTN =
	"border-dashed border-border-secondary bg-bg-primary text-text-secondary hover:bg-bg-tertiary";

/**
 * Feature flags for the members table:
 * - `enableColumnHiding` — “View” / toggle columns + header “Hide”
 * - `enableSelection` — checkbox column + row selection
 * - `enableFiltering` — search + Status filter (disables table global/column filters when false)
 * - `enableSorting` — header sort menus + toolbar sort controls
 */
const MEMBERS_TABLE_FEATURES = {
	enableSorting: true,
	enableSelection: true,
	enableColumnHiding: true,
	enableFiltering: true,
} as const;

export function SaasMembersPage() {
	const data = useMemo(() => [...DEMO_MEMBERS], []);

	const columns = useMemo(
		() =>
			createMemberColumns({
				enableSelection: MEMBERS_TABLE_FEATURES.enableSelection,
				enableColumnHiding: MEMBERS_TABLE_FEATURES.enableColumnHiding,
			}),
		[],
	);

	const table = useDataTable<DemoMemberRow>({
		data,
		columns,
		getRowId: (row: DemoMemberRow) => row.id,
		initialState: {
			columnVisibility: { memberStatus: false },
			pagination: { pageIndex: 0, pageSize: 10 },
		},
		globalFilterFn: membersGlobalFilterFn,
		tableOptions: {
			enableRowSelection: MEMBERS_TABLE_FEATURES.enableSelection,
			enableSorting: MEMBERS_TABLE_FEATURES.enableSorting,
			enableGlobalFilter: MEMBERS_TABLE_FEATURES.enableFiltering,
			enableColumnFilters: MEMBERS_TABLE_FEATURES.enableFiltering,
		},
	});

	const resetPage = () => {
		table.setPageIndex(0);
	};

	return (
		<div className="mx-auto flex w-full max-w-full flex-col gap-3 md:gap-4">
			<SaasDashboardHeader
				actions={
					<Button
						type="button"
						className="bg-brand-300 text-text-on-brand hover:bg-brand-200 w-full sm:w-auto"
					>
						<Plus className="size-4" aria-hidden />
						Invite Member
					</Button>
				}
			/>
			<div className="flex flex-col gap-6">
				<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
					<CardContent className="flex flex-col gap-4">
						<CardTitle className="text-sm font-semibold text-text-primary">
							All Members
						</CardTitle>
						<DataTable
							table={table}
							wrapperClassName="mt-3"
							emptyLabel={
								MEMBERS_TABLE_FEATURES.enableFiltering
									? "No members match your filters."
									: "No members."
							}
							pagination={{
								showSelectionSummary: MEMBERS_TABLE_FEATURES.enableSelection,
							}}
							toolbar={
								<DataTableToolbar>
									{MEMBERS_TABLE_FEATURES.enableFiltering ? (
										<div className="relative min-w-0 max-w-md flex-1">
											<Search
												className="text-text-tertiary pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2"
												aria-hidden
											/>
											<Input
												type="search"
												value={String(table.getState().globalFilter ?? "")}
												onChange={(e) => {
													table.setGlobalFilter(e.target.value);
													resetPage();
												}}
												placeholder="Search members..."
												className="border-border-secondary bg-bg-primary pl-9"
												aria-label="Search members"
											/>
										</div>
									) : null}
									<div
										className={cn(
											"flex flex-wrap items-center gap-2",
											MEMBERS_TABLE_FEATURES.enableFiltering
												? "lg:ml-auto lg:justify-end"
												: "w-full justify-end",
										)}
									>
										{MEMBERS_TABLE_FEATURES.enableFiltering ? (
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button
														type="button"
														variant="outline"
														size="sm"
														className={DASHED_TOOLBAR_BTN}
													>
														<Clock className="size-4" aria-hidden />
														Status
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent align="start" className="w-44">
													<DropdownMenuLabel>Status</DropdownMenuLabel>
													<DropdownMenuSeparator />
													<DropdownMenuItem
														onClick={() => {
															table
																.getColumn("memberStatus")
																?.setFilterValue(undefined);
															resetPage();
														}}
													>
														All
													</DropdownMenuItem>
													<DropdownMenuItem
														onClick={() => {
															table
																.getColumn("memberStatus")
																?.setFilterValue("active");
															resetPage();
														}}
													>
														Active
													</DropdownMenuItem>
													<DropdownMenuItem
														onClick={() => {
															table
																.getColumn("memberStatus")
																?.setFilterValue("pending");
															resetPage();
														}}
													>
														Pending invite
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										) : null}
										{MEMBERS_TABLE_FEATURES.enableSorting ? (
											<>
												<DropdownMenu>
													<DropdownMenuTrigger asChild>
														<Button
															type="button"
															variant="outline"
															size="sm"
															className={DASHED_TOOLBAR_BTN}
														>
															<Calendar className="size-4" aria-hidden />
															Date Invited
														</Button>
													</DropdownMenuTrigger>
													<DropdownMenuContent align="start" className="w-52">
														<DropdownMenuLabel>Date invited</DropdownMenuLabel>
														<DropdownMenuSeparator />
														<DropdownMenuItem
															onClick={() => {
																table.setSorting([
																	{ id: "joined", desc: true },
																]);
																resetPage();
															}}
														>
															Sort by newest
														</DropdownMenuItem>
														<DropdownMenuItem
															disabled
															className="text-text-tertiary"
														>
															Custom range (soon)
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
													<DropdownMenuContent align="end" className="w-48">
														<DropdownMenuLabel>Sort by</DropdownMenuLabel>
														<DropdownMenuSeparator />
														<DropdownMenuItem
															onClick={() => {
																table.setSorting([]);
																resetPage();
															}}
														>
															Default
														</DropdownMenuItem>
														<DropdownMenuItem
															onClick={() => {
																table.setSorting([{ id: "name", desc: false }]);
																resetPage();
															}}
														>
															Name
														</DropdownMenuItem>
														<DropdownMenuItem
															onClick={() => {
																table.setSorting([{ id: "role", desc: false }]);
																resetPage();
															}}
														>
															Role
														</DropdownMenuItem>
														<DropdownMenuItem
															onClick={() => {
																table.setSorting([
																	{ id: "joined", desc: true },
																]);
																resetPage();
															}}
														>
															Date joined
														</DropdownMenuItem>
													</DropdownMenuContent>
												</DropdownMenu>
											</>
										) : null}
										{MEMBERS_TABLE_FEATURES.enableColumnHiding ? (
											<DataTableViewOptions table={table} />
										) : null}
									</div>
								</DataTableToolbar>
							}
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
