import { Link, useRouterState } from '@tanstack/react-router';
import type * as React from 'react';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar';
import {
	saasDashboardFooterNav,
	saasDashboardNavSections,
} from '@/lib/dashboard/saas-dashboard-navigation';
import { cn } from '@/lib/utils';
import { DashboardNavItems } from './dashboard-nav-items';
import { OrganizationSwitcher } from './organization-switcher';

function isFooterActive(pathname: string, url: string) {
	return pathname === url || pathname.startsWith(`${url}/`);
}

export function SaasDashboardSidebar({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { open: isSidebarOpen, isMobile, openMobile } = useSidebar();
	const sidebarIsOpen = isMobile ? openMobile : isSidebarOpen;

	return (
		<Sidebar collapsible="icon" {...props} className="p-1">
			<SidebarHeader className="border-b border-border-secondary bg-bg-primary rounded-t-2xl gap-2">
				<OrganizationSwitcher />
			</SidebarHeader>
			<SidebarContent className="bg-bg-primary rounded-b-2xl gap-0">
				{saasDashboardNavSections.map((section) => (
					<SidebarGroup key={section.id} className="px-1">
						<SidebarGroupLabel>{section.label}</SidebarGroupLabel>
						<SidebarGroupContent>
							<DashboardNavItems items={section.items} />
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarFooter className="border-t border-dashed border-border-secondary bg-bg-primary p-2">
				<SidebarMenu className="flex flex-row items-center justify-between gap-1">
					{saasDashboardFooterNav.map((item) => (
						<SidebarMenuItem key={item.url} className="flex-1">
							<SidebarMenuButton
								asChild
								size="sm"
								tooltip={item.title}
								isActive={isFooterActive(pathname, item.url)}
								className="text-text-primary data-[active=true]:text-brand-300"
							>
								<Link to={item.url} className="gap-2">
									<item.icon className="size-4 shrink-0" />
									<span className="group-data-[collapsible=icon]:hidden">
										{item.title}
									</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
