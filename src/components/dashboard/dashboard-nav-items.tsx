import { Link, useRouterState } from '@tanstack/react-router';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	useSidebar,
} from '@/components/ui/sidebar';
import type { DashboardNavItem } from '@/lib/dashboard/saas-dashboard-navigation';
import { cn } from '@/lib/utils';

function isNavActive(pathname: string, url: string) {
	if (url === '/dashboard') {
		return pathname === '/dashboard' || pathname === '/dashboard/';
	}
	return pathname === url || pathname.startsWith(`${url}/`);
}

export function DashboardNavItems({ items }: { items: DashboardNavItem[] }) {
	const { isMobile, toggleSidebar, openMobile } = useSidebar();
	const pathname = useRouterState({
		select: (s) => s.location.pathname,
	});

	return (
		<SidebarMenu className="font-medium">
			{items.map((item) => {
				const isActive = isNavActive(pathname, item.url);

				if (item.items && item.items.length > 0) {
					return (
						<Collapsible
							key={item.title}
							asChild
							defaultOpen={isMobile && openMobile}
							className="group/collapsible"
						>
							<SidebarMenuItem>
								<CollapsibleTrigger asChild>
									<SidebarMenuButton
										size="sm"
										tooltip={item.title}
										isActive={isActive}
										className="text-text-primary data-[active=true]:text-brand-300 data-[active=true]:bg-brand-300/10"
									>
										<item.icon className="size-4 shrink-0" />
										<span>{item.title}</span>
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub
										className={cn(
											'space-y-4',
											isMobile && openMobile ? '!flex' : '',
										)}
									>
										{item.items.map((subItem) => (
											<SidebarMenuSubItem key={subItem.title}>
												<SidebarMenuSubButton
													asChild
													onClick={() => {
														if (isMobile) toggleSidebar();
													}}
													className="text-text-primary data-[active=true]:font-semibold font-medium data-[active=true]:text-brand-300 data-[active=true]:bg-brand-300/10"
												>
													<Link to={subItem.url}>
														<span>{subItem.title}</span>
													</Link>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>
					);
				}

				return (
					<SidebarMenuItem key={item.title}>
						<SidebarMenuButton
							asChild
							size="sm"
							tooltip={item.title}
							isActive={isActive}
							onClick={() => {
								if (isMobile) toggleSidebar();
							}}
							className="text-text-primary font-medium data-[active=true]:font-semibold text-sm data-[active=true]:text-brand-300 data-[active=true]:bg-brand-300/10"
						>
							<Link to={item.url}>
								<item.icon className="size-4 shrink-0" />
								<span>{item.title}</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				);
			})}
		</SidebarMenu>
	);
}
