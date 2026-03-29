import { UsageBreakdownTrendBadge } from '@/components/dashboard/usage-breakdown/usage-breakdown-metric-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AuditLogsActivitiesPanel } from './audit-logs-activities-panel';
import SaasDashboardHeader from './saas-dashboard-header';

export function SaasAuditLogsPage() {
	return (
		<div className="mx-auto flex w-full max-w-full flex-col gap-3 md:gap-4">
			<SaasDashboardHeader />
			<div className="flex flex-col gap-6">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
						<CardHeader className="pb-2">
							<CardTitle className="text-text-secondary text-sm font-medium">
								Events (30 days)
							</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-wrap items-baseline justify-between gap-3 pt-0">
							<span className="text-text-primary text-3xl font-semibold tracking-tight">
								128
							</span>
							<UsageBreakdownTrendBadge positive className="shrink-0">
								+12% vs last month
							</UsageBreakdownTrendBadge>
						</CardContent>
					</Card>

					<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
						<CardHeader className="pb-2">
							<CardTitle className="text-text-secondary text-sm font-medium">
								Team Members Active
							</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-wrap items-center justify-between gap-4 pt-0">
							<p className="text-text-primary text-3xl font-semibold tracking-tight">
								4
							</p>
							<p className="text-text-secondary max-w-[55%] text-right text-sm leading-snug">
								2 admins, 2 members
							</p>
						</CardContent>
					</Card>

					<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
						<CardHeader className="pb-2">
							<CardTitle className="text-text-secondary text-sm font-medium">
								Security Alerts
							</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-wrap items-center justify-between gap-4 pt-0">
							<p className="text-text-primary text-3xl font-semibold tracking-tight">
								1
							</p>
							<p className="text-text-secondary max-w-[55%] text-right text-sm leading-snug">
								1 failed login attempt
							</p>
						</CardContent>
					</Card>
				</div>

				<AuditLogsActivitiesPanel />
			</div>
		</div>
	);
}
