import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import SaasDashboardHeader from './saas-dashboard-header';
import { UsageBreakdownCategorySection } from './usage-breakdown/usage-breakdown-category-cards';
import { UsageBreakdownCtaBanner } from './usage-breakdown/usage-breakdown-cta-banner';
import { UsageBreakdownGrowthChart } from './usage-breakdown/usage-breakdown-growth-chart';
import { UsageBreakdownLimitRow } from './usage-breakdown/usage-breakdown-limit-row';
import {
	UsageBreakdownMetricCard,
	UsageBreakdownTrendBadge,
} from './usage-breakdown/usage-breakdown-metric-card';

const USAGE_SNAPSHOT = {
	learners: { current: 285, cap: 500, percent: 57 },
	storageGb: { current: 12, cap: 50, percent: 24 },
	liveHours: { current: 18, cap: 40, percent: 45 },
} as const;

export function SaasUsageBreakdownPage() {
	const { learners, storageGb, liveHours } = USAGE_SNAPSHOT;

	return (
		<div className="mx-auto flex w-full max-w-full flex-col gap-3 md:gap-4">
			<SaasDashboardHeader
				actions={
					<Button
						type="button"
						variant="outline"
						className="border-border-secondary w-full sm:w-auto"
						asChild
					>
						<Link to="/dashboard/plans">Change Plan</Link>
					</Button>
				}
			/>
			<div className="flex flex-col gap-6">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
					<UsageBreakdownMetricCard
						label="Active Learners"
						trend={
							<UsageBreakdownTrendBadge positive>9.6%</UsageBreakdownTrendBadge>
						}
						value="285"
						footnote="• 57% of Plan"
					/>
					<UsageBreakdownMetricCard
						label="Storage Used"
						trend={
							<UsageBreakdownTrendBadge positive>9.6%</UsageBreakdownTrendBadge>
						}
						value="12 GB"
						footnote="• 24% of plan"
					/>
					<UsageBreakdownMetricCard
						label="Live Session Hours"
						trend={
							<UsageBreakdownTrendBadge positive={false}>
								-3hrs
							</UsageBreakdownTrendBadge>
						}
						value="18 hrs"
						footnote="• 45% of plan"
					/>
					<UsageBreakdownMetricCard
						label="Engagement Rate"
						trend={
							<UsageBreakdownTrendBadge positive>+4%</UsageBreakdownTrendBadge>
						}
						value="82%"
						footnote="• above avg"
					/>
				</div>

				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
					<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
						<CardHeader>
							<CardTitle className="text-sm font-semibold text-text-primary">
								Usage vs Plan Limits
							</CardTitle>
							<CardDescription className="text-text-secondary text-xs font-normal">
								Track your usage and remaining capacity this billing cycle.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6 px-6 py-6">
							<UsageBreakdownLimitRow
								label="Learners"
								current={learners.current}
								capacity={learners.cap}
								percent={learners.percent}
								footer={`${learners.cap - learners.current} learner slots remaining`}
							/>
							<UsageBreakdownLimitRow
								label="Storage"
								current={storageGb.current}
								capacity={storageGb.cap}
								percent={storageGb.percent}
								footer={`${storageGb.cap - storageGb.current} GB available for uploads`}
							/>
							<UsageBreakdownLimitRow
								label="Live Sessions"
								current={liveHours.current}
								capacity={liveHours.cap}
								percent={liveHours.percent}
								footer={`${liveHours.cap - liveHours.current} hours left this cycle`}
							/>
						</CardContent>
					</Card>

					<UsageBreakdownGrowthChart />
				</div>

				<UsageBreakdownCategorySection />

				<UsageBreakdownCtaBanner />
			</div>
		</div>
	);
}
