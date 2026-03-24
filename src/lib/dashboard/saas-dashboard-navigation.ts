import type { LucideIcon } from 'lucide-react';
import {
	CreditCard,
	FileBarChart,
	KeyRound,
	Layers,
	LifeBuoy,
	MonitorSmartphone,
	PieChart,
	Send,
	Shield,
	UserCircle,
	Users,
} from 'lucide-react';

export type DashboardNavItem = {
	title: string;
	url: string;
	icon: LucideIcon;
	items?: { title: string; url: string }[];
};

export type DashboardNavSection = {
	id: string;
	label: string;
	items: DashboardNavItem[];
};

export const saasDashboardNavSections: DashboardNavSection[] = [
	{
		id: 'account',
		label: 'Account',
		items: [
			{ title: 'Profile', url: '/dashboard/profile', icon: UserCircle },
			{ title: 'Security', url: '/dashboard/security', icon: Shield },
		],
	},
	{
		id: 'organization',
		label: 'Organization',
		items: [
			{ title: 'Billing', url: '/dashboard/billing', icon: CreditCard },
			{ title: 'Plans', url: '/dashboard/plans', icon: Layers },
			{
				title: 'Usage breakdown',
				url: '/dashboard/usage-breakdown',
				icon: PieChart,
			},
			{ title: 'Members', url: '/dashboard/members', icon: Users },
			{
				title: 'Audit logs',
				url: '/dashboard/audit-logs',
				icon: FileBarChart,
			},
			{
				title: 'Sessions',
				url: '/dashboard/sessions',
				icon: MonitorSmartphone,
			},
			{
				title: 'Authentications',
				url: '/dashboard/authentications',
				icon: KeyRound,
			},
		],
	},
];

export const saasDashboardFooterNav: DashboardNavItem[] = [
	{ title: 'Support', url: '/dashboard/support', icon: LifeBuoy },
	{ title: 'Feedback', url: '/dashboard/feedback', icon: Send },
];
