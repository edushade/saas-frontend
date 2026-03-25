import { useRouterState } from '@tanstack/react-router';
// import {
// 	Breadcrumb,
// 	BreadcrumbItem,
// 	BreadcrumbLink,
// 	BreadcrumbList,
// 	BreadcrumbPage,
// 	BreadcrumbSeparator,
// } from '@/components/ui/breadcrumb';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Typography } from '../ui-custom/typography';
import { DashboardBrandLogo } from './dashboard-brand-logo';

const SEGMENT_LABELS: Record<string, string> = {
	dashboard: 'Dashboard',
	profile: 'Profile',
	security: 'Security',
	billing: 'Billing',
	plans: 'Plans',
	'usage-breakdown': 'Usage breakdown',
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

export default function SaasDashboardHeader() {
	const breadcrumbs = useDashboardBreadcrumbs();

	return (
		<header className="flex h-16 w-full shrink-0 flex-col transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
			<div className="flex h-full w-full items-center gap-3 border-b border-border-secondary bg-bg-primary px-4 sm:hidden">
				<SidebarTrigger className="text-text-primary shrink-0" />
				<div className="min-w-0 flex-1">
					<DashboardBrandLogo className="h-7 max-w-[min(100%,11rem)]" />
				</div>
			</div>

			<div className="hidden h-full w-full items-center gap-2 px-4 sm:flex">
				{/* <Breadcrumb className="min-w-0">
					<BreadcrumbList>
						{breadcrumbs.map((crumb, i) => (
							<div
								key={`${crumb.label}-${i}`}
								className="flex items-center gap-2"
							>
								{i > 0 && <BreadcrumbSeparator className="hidden md:block" />}
								<BreadcrumbItem className={i === 0 ? 'hidden md:block' : ''}>
									{i === breadcrumbs.length - 1 || !crumb.href ? (
										<BreadcrumbPage className="text-text-tertiary font-normal text-sm">
											{crumb.label}
										</BreadcrumbPage>
									) : (
										<BreadcrumbLink asChild>
											<Link to={crumb.href}>{crumb.label}</Link>
										</BreadcrumbLink>
									)}
								</BreadcrumbItem>
							</div>
						))}
					</BreadcrumbList>
				</Breadcrumb> */}
				{/* need to title of current active page */}
				<Typography variant="base" className="font-semibold text-text-primary">
					{breadcrumbs[breadcrumbs.length - 1].label}
				</Typography>
			</div>
		</header>
	);
}
