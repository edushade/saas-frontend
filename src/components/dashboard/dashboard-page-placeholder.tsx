import { Typography } from '@/components/ui-custom/typography';
import SaasDashboardHeader from './saas-dashboard-header';

/** Placeholder body; title bar from `SaasDashboardHeader` (rendered here per page). */
export function DashboardPagePlaceholder() {
	return (
		<div className="flex flex-col gap-3 md:gap-4">
			<SaasDashboardHeader />
			<div className="flex min-h-[40vh] flex-col gap-2 rounded-xl border border-border-secondary bg-bg-primary p-6">
				<Typography variant="small" className="text-text-secondary">
					SaaS dashboard panel placeholder. Connect billing, members, and org
					data here when your APIs are ready.
				</Typography>
			</div>
		</div>
	);
}
