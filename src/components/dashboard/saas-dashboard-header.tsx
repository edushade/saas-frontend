import { useRouterState } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Typography } from '../ui-custom/typography';

// import { DashboardBrandLogo } from './dashboard-brand-logo';

const SEGMENT_LABELS: Record<string, string> = {
	dashboard: 'Dashboard',
	profile: 'Profile',
	security: 'Security',
	billing: 'Billing',
	plans: 'Plans',
	'usage-breakdown': 'Usage Breakdown',
	members: 'Members',
	'audit-logs': 'Audit logs',
	sessions: 'Sessions',
	authentications: 'Authentications',
	support: 'Support',
	feedback: 'Feedback',
};

function useDashboardBreadcrumbs() {
	const pathname = useRouterState({
		select: (s) => s.location.pathname,
	});
	const segments = pathname.split('/').filter(Boolean);
	const crumbs: { label: string; href?: string }[] = [];
	let acc = '';
	for (let i = 0; i < segments.length; i++) {
		acc += `/${segments[i]}`;
		const key = segments[i] ?? '';
		const mapped = SEGMENT_LABELS[key];
		const label =
			mapped ?? key.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
		const isLast = i === segments.length - 1;
		crumbs.push({
			label,
			href: isLast ? undefined : acc,
		});
	}
	return crumbs.length > 0
		? crumbs
		: [{ label: 'Dashboard', href: '/dashboard' }];
}

export type SaasDashboardHeaderProps = {
	actions?: ReactNode;
	children?: ReactNode;
};

export default function SaasDashboardHeader({
	actions,
	children,
}: SaasDashboardHeaderProps) {
	const isMobile = useIsMobile();
	const breadcrumbs = useDashboardBreadcrumbs();
	const pageTitle = breadcrumbs[breadcrumbs.length - 1]?.label ?? 'Dashboard';
	const toolbar = actions ?? children;
	const hasActions = toolbar != null && toolbar !== false;

	return (
		<header
			className={cn(
				'flex w-full shrink-0 flex-col transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:min-h-12',
				hasActions
					? 'md:h-16'
					: 'h-16 group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:h-16',
			)}
		>
			{/* Mobile: viewport < md (768px), same breakpoint as useIsMobile */}
			<div
				className={cn(
					'flex w-full items-center gap-3 px-4 md:hidden',
					hasActions ? 'min-h-14 py-2' : 'h-full',
				)}
			>
				{isMobile ? (
					<SidebarTrigger className="text-text-primary shrink-0" />
				) : null}
				{/* <div className="min-w-0 flex-1">
					<DashboardBrandLogo className="h-7 max-w-[min(100%,11rem)]" />
				</div> */}
				<Typography
					variant="base"
					className="text-text-primary max-w-[36%] truncate text-right text-sm font-semibold"
				>
					{pageTitle}
				</Typography>
			</div>
			{hasActions ? (
				<div className="flex flex-wrap justify-end gap-2 border-t border-border-secondary px-4 py-2 md:hidden">
					{toolbar}
				</div>
			) : null}

			{/* md+ */}
			<div className="hidden h-full min-h-16 w-full items-center gap-3 px-4 md:flex">
				<Typography
					variant="h5"
					className="text-text-primary min-w-0 flex-1 truncate font-semibold"
				>
					{pageTitle}
				</Typography>
				{hasActions ? (
					<div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
						{toolbar}
					</div>
				) : null}
			</div>
		</header>
	);
}
