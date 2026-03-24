import {
	ArrowDown,
	ArrowUp,
	ArrowUpDown,
	Check,
	Download,
	Plus,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { formatInvoiceTableDate } from "@/lib/billing/format-invoice-datetime";
import type { BillingInvoiceRow } from "@/lib/billing/invoice-mock";
import { MOCK_BILLING_INVOICES } from "@/lib/billing/invoice-mock";
import { paginateSlice } from "@/lib/billing/paginate";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 5;

type SortKey = "id" | "date" | "amount";
type SortDir = "asc" | "desc";

type StatusFilter = "all" | "paid" | "unpaid";

function formatMoney(cents: number): string {
	const sign = cents < 0 ? "-" : "";
	const abs = Math.abs(cents);
	return `${sign}$${(abs / 100).toFixed(2)}`;
}

function compareRows(
	a: BillingInvoiceRow,
	b: BillingInvoiceRow,
	key: SortKey,
	dir: SortDir,
): number {
	let cmp = 0;
	if (key === "date") {
		cmp =
			new Date(a.dateIso).getTime() - new Date(b.dateIso).getTime();
	} else if (key === "amount") {
		cmp = a.amountCents - b.amountCents;
	} else {
		cmp = a.id.localeCompare(b.id, undefined, { numeric: true });
	}
	return dir === "asc" ? cmp : -cmp;
}

function SortHeaderIcon({ active, dir }: { active: boolean; dir: SortDir }) {
	if (!active) {
		return <ArrowUpDown className="text-text-tertiary size-3.5 shrink-0" />;
	}
	return dir === "asc" ? (
		<ArrowUp className="text-brand-300 size-3.5 shrink-0" />
	) : (
		<ArrowDown className="text-brand-300 size-3.5 shrink-0" />
	);
}

/**
 * Invoices table with search, status filter, sort, and client-side pagination (mock data).
 */
export function BillingInvoicesPanel() {
	const [search, setSearch] = useState("");
	const [status, setStatus] = useState<StatusFilter>("all");
	const [sortKey, setSortKey] = useState<SortKey>("date");
	const [sortDir, setSortDir] = useState<SortDir>("desc");
	const [page, setPage] = useState(1);

	const processed = useMemo(() => {
		const q = search.trim().toLowerCase();
		let rows = [...MOCK_BILLING_INVOICES];
		if (status !== "all") {
			rows = rows.filter((r) => r.status === status);
		}
		if (q) {
			rows = rows.filter(
				(r) =>
					r.title.toLowerCase().includes(q) ||
					r.id.includes(q) ||
					`#${r.id}`.toLowerCase().includes(q),
			);
		}
		rows.sort((a, b) => compareRows(a, b, sortKey, sortDir));
		return rows;
	}, [search, status, sortKey, sortDir]);

	const { slice, totalPages, page: safePage, total, startIndex, endIndex } =
		useMemo(
			() => paginateSlice(processed, page, PAGE_SIZE),
			[processed, page],
		);

	useEffect(() => {
		if (safePage !== page) {
			setPage(safePage);
		}
	}, [safePage, page]);

	const toggleSort = (key: SortKey) => {
		setPage(1);
		if (sortKey === key) {
			setSortDir((d) => (d === "asc" ? "desc" : "asc"));
		} else {
			setSortKey(key);
			setSortDir(key === "date" ? "desc" : "asc");
		}
	};

	const statusLabel =
		status === "all" ? "Status" : status === "paid" ? "Paid" : "Unpaid";

	return (
		<Card className="gap-0 rounded-xl border-border-secondary bg-bg-primary py-0 shadow-sm">
			<CardHeader className="border-b border-border-secondary px-6 py-5">
				<CardTitle className="text-base font-semibold text-text-primary">
					Invoices
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4 px-6 py-5">
				<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
					<Input
						placeholder="Search titles..."
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
							setPage(1);
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
								<DropdownMenuItem
									onSelect={() => {
										setStatus("all");
										setPage(1);
									}}
								>
									All
								</DropdownMenuItem>
								<DropdownMenuItem
									onSelect={() => {
										setStatus("paid");
										setPage(1);
									}}
								>
									Paid
								</DropdownMenuItem>
								<DropdownMenuItem
									onSelect={() => {
										setStatus("unpaid");
										setPage(1);
									}}
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
										setSortKey("date");
										setSortDir("desc");
										setPage(1);
									}}
								>
									Date (newest)
								</DropdownMenuItem>
								<DropdownMenuItem
									onSelect={() => {
										setSortKey("date");
										setSortDir("asc");
										setPage(1);
									}}
								>
									Date (oldest)
								</DropdownMenuItem>
								<DropdownMenuItem
									onSelect={() => {
										setSortKey("amount");
										setSortDir("desc");
										setPage(1);
									}}
								>
									Amount (high)
								</DropdownMenuItem>
								<DropdownMenuItem
									onSelect={() => {
										setSortKey("amount");
										setSortDir("asc");
										setPage(1);
									}}
								>
									Amount (low)
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>

				<div className="rounded-lg border border-border-secondary">
					<Table>
						<TableHeader>
							<TableRow className="border-border-secondary hover:bg-transparent">
								<TableHead className="text-text-primary">
									<button
										type="button"
										className="inline-flex items-center gap-1 font-medium"
										onClick={() => toggleSort("id")}
									>
										ID
										<SortHeaderIcon
											active={sortKey === "id"}
											dir={sortDir}
										/>
									</button>
								</TableHead>
								<TableHead className="text-text-primary">
									<button
										type="button"
										className="inline-flex items-center gap-1 font-medium"
										onClick={() => toggleSort("date")}
									>
										Date
										<SortHeaderIcon
											active={sortKey === "date"}
											dir={sortDir}
										/>
									</button>
								</TableHead>
								<TableHead className="text-text-primary">
									<button
										type="button"
										className="inline-flex items-center gap-1 font-medium"
										onClick={() => toggleSort("amount")}
									>
										Amount
										<SortHeaderIcon
											active={sortKey === "amount"}
											dir={sortDir}
										/>
									</button>
								</TableHead>
								<TableHead className="text-text-primary">Status</TableHead>
								<TableHead className="text-right text-text-primary">
									Action
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{slice.length === 0 ? (
								<TableRow>
									<TableCell
										colSpan={5}
										className="text-text-secondary py-10 text-center"
									>
										No invoices match your filters.
									</TableCell>
								</TableRow>
							) : (
								slice.map((row) => (
									<TableRow
										key={row.id}
										className="border-border-secondary"
									>
										<TableCell className="font-medium text-text-primary">
											#{row.id}
										</TableCell>
										<TableCell className="text-text-secondary">
											{formatInvoiceTableDate(row.dateIso)}
										</TableCell>
										<TableCell className="text-text-primary">
											{formatMoney(row.amountCents)}
										</TableCell>
										<TableCell>
											{row.status === "paid" ? (
												<span
													className={cn(
														"inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
														"bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
													)}
												>
													<Check className="size-3" aria-hidden />
													Paid
												</span>
											) : (
												<span
													className={cn(
														"inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
														"bg-red-500/12 text-red-700 dark:text-red-400",
													)}
												>
													<span
														className="size-1.5 rounded-full bg-red-500"
														aria-hidden
													/>
													Unpaid
												</span>
											)}
										</TableCell>
										<TableCell className="text-right">
											{row.status === "unpaid" ? (
												<Button
													type="button"
													variant="link"
													className="text-brand-300 h-auto p-0"
												>
													Pay Now
												</Button>
											) : (
												<Button
													type="button"
													variant="ghost"
													size="icon"
													className="text-text-primary size-8"
													aria-label={`Download invoice ${row.id}`}
												>
													<Download className="size-4" />
												</Button>
											)}
										</TableCell>
									</TableRow>
								))
							)}
						</TableBody>
					</Table>
				</div>

				<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-text-secondary text-sm">
						{total === 0
							? "No results"
							: `Showing ${startIndex}–${endIndex} of ${total}`}
					</p>
					<div className="flex items-center gap-2">
						<Button
							type="button"
							variant="outline"
							size="sm"
							className="border-border-secondary"
							disabled={safePage <= 1}
							onClick={() => setPage((p) => Math.max(1, p - 1))}
						>
							Previous
						</Button>
						<span className="text-text-secondary text-sm tabular-nums">
							Page {safePage} of {totalPages}
						</span>
						<Button
							type="button"
							variant="outline"
							size="sm"
							className="border-border-secondary"
							disabled={safePage >= totalPages}
							onClick={() =>
								setPage((p) => Math.min(totalPages, p + 1))
							}
						>
							Next
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
