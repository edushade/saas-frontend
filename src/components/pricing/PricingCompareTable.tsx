import { InfoIcon as InfoIconIcon } from "@/assets/icons";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typography } from "@/components/ui-custom/typography";
import {
	PRICING_COMPARE_SECTIONS,
	type PricingCompareRow,
	type PricingCompareSection,
} from "@/constants/pricing";

const PLAN_LABELS = ["Starter", "Growth", "Advanced"] as const;

function InfoIcon({ tooltip }: { tooltip: string }) {
	return (
		<Tooltip>
			<TooltipTrigger
				type="button"
				className="inline-flex size-4 shrink-0 items-center justify-center text-text-quaternary"
				aria-label="More information"
			>
				<InfoIconIcon className="size-4" />
			</TooltipTrigger>
			<TooltipContent side="top" className="max-w-[220px]">
				{tooltip}
			</TooltipContent>
		</Tooltip>
	);
}

function CompareRowMobile({
	feature,
	tooltip,
	starter,
	growth,
	advanced,
}: {
	feature: string;
	tooltip?: string;
	starter: string;
	growth: string;
	advanced: string;
}) {
	const values = [starter, growth, advanced];
	return (
		<div className="flex items-center gap-2 border-b border-border-primary py-2.5 last:border-b-0">
			<div className="flex min-w-0 flex-1 basis-[40%] items-center gap-1.5">
				<Typography
					variant="small"
					className="truncate font-medium text-text-primary"
				>
					{feature}
				</Typography>
				{tooltip && <InfoIcon tooltip={tooltip} />}
			</div>
			<div className="flex flex-1 basis-[60%] items-center justify-between gap-1 text-center">
				{PLAN_LABELS.map((label, i) => (
					<span
						key={label}
						className="min-w-0 flex-1 text-xs font-normal text-text-secondary"
						title={values[i]}
					>
						<span className="truncate block">{values[i]}</span>
					</span>
				))}
			</div>
		</div>
	);
}

/** Desktop: table layout */
function CompareRowTable({
	feature,
	tooltip,
	starter,
	growth,
	advanced,
}: {
	feature: string;
	tooltip?: string;
	starter: string;
	growth: string;
	advanced: string;
}) {
	const values = [starter, growth, advanced];
	return (
		<tr className="border-b border-border-primary last:border-b-0">
			<td className="w-1/4 py-3 px-4 text-left md:px-6">
				<div className="flex items-center gap-2">
					<Typography variant="base" className="font-medium text-text-primary">
						{feature}
					</Typography>
					{tooltip && <InfoIcon tooltip={tooltip} />}
				</div>
			</td>
			{values.map((value, i) => (
				<td
					key={PLAN_LABELS[i]}
					className="w-1/4 py-3 px-4 text-center md:px-6"
				>
					<Typography
						variant="base"
						className="font-normal text-text-secondary"
					>
						{value}
					</Typography>
				</td>
			))}
		</tr>
	);
}

function SingleCompareTable({ section }: { section: PricingCompareSection }) {
	return (
		<section
			aria-label={`${section.title} comparison`}
			className="w-full max-w-full rounded-[20px] border border-border-secondary bg-bg-primary"
		>
			<Typography
				variant="h6"
				className="border-b border-border-primary bg-bg-primary px-4 py-3 font-semibold text-text-primary md:px-6"
			>
				{section.title}
			</Typography>

			{/* Small devices: inline rows, no scroll */}
			<div className="px-4 md:hidden md:px-0">
				{/* Inline header row */}
				<div className="flex items-center gap-2 border-b border-border-primary py-2 text-text-tertiary">
					<div className="flex min-w-0 flex-1 basis-[40%]">
						<Typography variant="small" className="font-medium">
							Feature
						</Typography>
					</div>
					<div className="flex flex-1 basis-[60%] justify-between gap-1 text-center">
						{PLAN_LABELS.map((label) => (
							<span key={label} className="min-w-0 flex-1 text-xs font-medium">
								{label}
							</span>
						))}
					</div>
				</div>
				{section.rows.map((row: PricingCompareRow) => (
					<CompareRowMobile
						key={row.feature}
						feature={row.feature}
						tooltip={row.tooltip}
						starter={row.starter}
						growth={row.growth}
						advanced={row.advanced}
					/>
				))}
			</div>

			{/* Medium and up: table — equal column width for all */}
			<div className="hidden md:block">
				<table className="w-full table-fixed border-collapse">
					<colgroup>
						<col className="w-1/4" />
						<col className="w-1/4" />
						<col className="w-1/4" />
						<col className="w-1/4" />
					</colgroup>
					<thead>
						<tr className="border-b border-border-primary">
							<th className="w-1/4 py-3 pl-6 text-left">
								<Typography
									variant="small"
									className="font-medium text-text-tertiary"
								>
									Feature
								</Typography>
							</th>
							<th className="w-1/4 py-3 text-center">
								<Typography
									variant="small"
									className="font-medium text-text-tertiary"
								>
									Starter
								</Typography>
							</th>
							<th className="w-1/4 py-3 text-center">
								<Typography
									variant="small"
									className="font-medium text-text-tertiary"
								>
									Growth
								</Typography>
							</th>
							<th className="w-1/4 py-3 text-center">
								<Typography
									variant="small"
									className="font-medium text-text-tertiary"
								>
									Advanced
								</Typography>
							</th>
						</tr>
					</thead>
					<tbody>
						{section.rows.map((row) => (
							<CompareRowTable
								key={row.feature}
								feature={row.feature}
								tooltip={row.tooltip}
								starter={row.starter}
								growth={row.growth}
								advanced={row.advanced}
							/>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}

export function PricingCompareTable() {
	return (
		<TooltipProvider>
			<div className="flex flex-col gap-6">
				{PRICING_COMPARE_SECTIONS.map((section) => (
					<SingleCompareTable key={section.title} section={section} />
				))}
			</div>
		</TooltipProvider>
	);
}
