import { Link } from '@tanstack/react-router';
import { ArrowDown, ArrowUp } from 'lucide-react';
import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Typography } from '@/components/ui-custom/typography';
import { clampPercent } from '@/lib/usage/clamp-percent';
import { cn } from '@/lib/utils';

type TrendProps = {
	positive: boolean;
	children: ReactNode;
	className?: string;
};

function TrendBadge({ positive, children, className }: TrendProps) {
	return (
		<span
			className={cn(
				'inline-flex items-center gap-0.5 text-xs font-medium',
				positive
					? 'text-emerald-600 dark:text-emerald-400'
					: 'text-red-600 dark:text-red-400',
				className,
			)}
		>
			{positive ? (
				<ArrowUp className="size-3.5 shrink-0" aria-hidden />
			) : (
				<ArrowDown className="size-3.5 shrink-0" aria-hidden />
			)}
			{children}
		</span>
	);
}

type SummaryMetricProps = {
	label: string;
	trend: ReactNode;
	value: string;
	footnote: string;
};

function SummaryMetricCard({
	label,
	trend,
	value,
	footnote,
}: SummaryMetricProps) {
	return (
		<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
			<CardContent className="space-y-2 p-5">
				<div className="flex items-start justify-between gap-2">
					<span className="text-text-secondary text-sm font-medium">
						{label}
					</span>
					{trend}
				</div>
				<p className="text-text-primary text-2xl font-semibold tracking-tight">
					{value}
				</p>
				<p className="text-text-secondary text-sm">{footnote}</p>
			</CardContent>
		</Card>
	);
}

type LimitRowProps = {
	label: string;
	usedLabel: string;
	percent: number;
	footer: string;
};

function UsageLimitRow({ label, usedLabel, percent, footer }: LimitRowProps) {
	const p = clampPercent(percent);
	return (
		<div className="space-y-2">
			<div className="flex flex-wrap items-center justify-between gap-2">
				<span className="text-text-primary text-sm font-semibold">{label}</span>
				<div className="flex items-center gap-2">
					<span className="text-text-secondary text-sm">{usedLabel}</span>
					<Badge className="rounded-full bg-brand-300/15 px-2.5 py-0.5 text-xs font-medium text-brand-300">
						{p}%
					</Badge>
				</div>
			</div>
			<Progress
				value={p}
				className="bg-bg-tertiary h-2 **:data-[slot=progress-indicator]:bg-brand-300"
				aria-label={`${label} usage ${p} percent`}
			/>
			<p className="text-text-secondary text-xs">{footer}</p>
		</div>
	);
}

const USAGE_SNAPSHOT = {
	learners: { current: 285, cap: 500, percent: 57 },
	storageGb: { current: 12, cap: 50, percent: 24 },
	liveHours: { current: 18, cap: 40, percent: 45 },
	engagementPercent: 82,
};

export function SaasUsageBreakdownPage() {
	const { learners, storageGb, liveHours, engagementPercent } = USAGE_SNAPSHOT;

	return (
		<div className="flex flex-col gap-6 max-w-[1138px] w-full mx-auto">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<Typography variant="h5" className="font-semibold text-text-primary">
					Usage Breakdown
				</Typography>
				<Button
					type="button"
					variant="outline"
					className="border-border-secondary sm:w-auto"
					asChild
				>
					<Link to="/dashboard/plans">Change Plan</Link>
				</Button>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
				<SummaryMetricCard
					label="Active Learners"
					trend={<TrendBadge positive>9.6%</TrendBadge>}
					value="285"
					footnote="• 57% of Plan"
				/>
				<SummaryMetricCard
					label="Storage Used"
					trend={<TrendBadge positive>9.6%</TrendBadge>}
					value="12 GB"
					footnote="• 24% of plan"
				/>
				<SummaryMetricCard
					label="Live Session Hours"
					trend={<TrendBadge positive={false}>-3hrs</TrendBadge>}
					value="18 hrs"
					footnote="• 45% of plan"
				/>
				<SummaryMetricCard
					label="Engagement Rate"
					trend={<TrendBadge positive>+4%</TrendBadge>}
					value="82%"
					footnote="• above avg"
				/>
			</div>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
				<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
					<CardHeader className="border-b border-border-secondary">
						<CardTitle className="text-base font-semibold text-text-primary">
							Usage vs Plan Limits
						</CardTitle>
						<CardDescription className="text-text-secondary text-sm">
							Track your usage and remaining capacity this billing cycle.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-8 px-6 py-6">
						<UsageLimitRow
							label="Learners"
							usedLabel={`${learners.current} / ${learners.cap}`}
							percent={learners.percent}
							footer={`${learners.cap - learners.current} learner slots remaining`}
						/>
						<UsageLimitRow
							label="Storage"
							usedLabel={`${storageGb.current} GB / ${storageGb.cap} GB`}
							percent={storageGb.percent}
							footer={`${storageGb.cap - storageGb.current} GB available for uploads`}
						/>
						<UsageLimitRow
							label="Live Sessions"
							usedLabel={`${liveHours.current} hrs / ${liveHours.cap} hrs`}
							percent={liveHours.percent}
							footer={`${liveHours.cap - liveHours.current} hours left this cycle`}
						/>
					</CardContent>
				</Card>

				<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
					<CardHeader className="flex flex-row items-start justify-between space-y-0 border-b border-border-secondary px-6 py-5">
						<CardTitle className="text-base font-semibold text-text-primary">
							Engagement Rate
						</CardTitle>
						<TrendBadge positive>+4%</TrendBadge>
					</CardHeader>
					<CardContent className="px-6 py-8">
						<p className="text-text-primary text-4xl font-semibold tracking-tight">
							{engagementPercent}%
						</p>
						<p className="text-text-secondary mt-2 text-sm">• above avg</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
