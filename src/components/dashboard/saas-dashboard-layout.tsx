import type * as React from 'react';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import SaasDashboardHeader from './saas-dashboard-header';
import { SaasDashboardSidebar } from './saas-dashboard-sidebar';

export function SaasDashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider
			className="bg-bg-secondary"
			style={
				{
					'--sidebar-width': 'calc(var(--spacing) * 72)',
					'--header-height': 'calc(var(--spacing) * 12)',
				} as React.CSSProperties
			}
		>
			<SaasDashboardSidebar variant="sidebar" className="bg-bg-secondary" />
			<SidebarInset className="min-w-0 border-none bg-bg-secondary">
				<SaasDashboardHeader />
				<div className="flex min-w-0 flex-1 flex-col gap-3 md:gap-4 px-3 md:px-4 pb-4">
					{children}
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
