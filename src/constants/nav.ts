import {
	Activity,
	Award,
	BarChart2,
	BookMarked,
	BookOpen,
	BookUser,
	CalendarCheck,
	ClipboardList,
	FileCheck,
	FileText,
	GitBranch,
	GitCommit,
	GraduationCap,
	LifeBuoy,
	Lock,
	Megaphone,
	MessageCircle,
	MessageSquare,
	PenLine,
	PlayCircle,
	PlaySquare,
	Puzzle,
	Rss,
	Settings2,
	Shield,
	ThumbsUp,
	TrendingUp,
	UserRound,
	Users,
	Video,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavFeatureItem {
	label: string;
	description: string;
	icon: LucideIcon;
	href: string;
}

export interface NavFeatureGroup {
	title: string;
	items: NavFeatureItem[];
}

export interface NavCta {
	highlight: string;
	text: string;
	button: string;
}

export interface NavResourceItem {
	label: string;
	icon: LucideIcon;
	href: string;
}

export interface NavLinkItem {
	label: string;
	href: string;
}

export const FEATURES_GROUPS: NavFeatureGroup[] = [
	{
		title: 'Build Learning',
		items: [
			{ label: 'Courses', description: 'Create structured lessons', icon: BookOpen, href: '/' },
			{ label: 'Live Classes', description: 'Teach in real time', icon: Video, href: '/' },
			{ label: 'Cohorts', description: 'Run guided programs', icon: Users, href: '/' },
			{ label: 'Workshops', description: 'Host focused sessions', icon: BookMarked, href: '/' },
			{ label: 'Assessments & Exams', description: 'Evaluate learner understanding', icon: ClipboardList, href: '/' },
			{ label: 'Assignments & Quizzes', description: 'Reinforce learning outcomes', icon: PenLine, href: '/' },
			{ label: 'Certificates', description: 'Recognize course completion', icon: Award, href: '/' },
		],
	},
	{
		title: 'Deliver & Engage',
		items: [
			{ label: 'Recorded Lessons', description: 'Offer self paced learning', icon: PlayCircle, href: '/' },
			{ label: 'Learning Paths', description: 'Guide learner progression', icon: GitBranch, href: '/' },
			{ label: 'Community', description: 'Build learner interaction', icon: MessageCircle, href: '/' },
			{ label: 'Discussions', description: 'Encourage peer conversation', icon: MessageSquare, href: '/' },
			{ label: 'Announcements', description: 'Share important updates', icon: Megaphone, href: '/' },
			{ label: 'Feedback & Reviews', description: 'Collect learner input', icon: ThumbsUp, href: '/' },
			{ label: 'Attendance Tracking', description: 'Monitor session participation', icon: CalendarCheck, href: '/' },
		],
	},
	{
		title: 'Manage Roles',
		items: [
			{ label: 'Student Panel', description: 'Focused learning space', icon: GraduationCap, href: '/' },
			{ label: 'Educator Panel', description: 'Teaching and content control', icon: BookUser, href: '/' },
			{ label: 'Admin Panel', description: 'Platform level management', icon: Settings2, href: '/' },
			{ label: 'User Management', description: 'Manage learners and teams', icon: UserRound, href: '/' },
			{ label: 'Role Permissions', description: 'Control access levels', icon: Shield, href: '/' },
			{ label: 'Access Control', description: 'Secure platform usage', icon: Lock, href: '/' },
		],
	},
	{
		title: 'Track and Measure',
		items: [
			{ label: 'Progress Tracking', description: 'Follow learner completion', icon: TrendingUp, href: '/' },
			{ label: 'Learner Analytics', description: 'Understand engagement patterns', icon: BarChart2, href: '/' },
			{ label: 'Assessment Results', description: 'Review learner performance', icon: FileText, href: '/' },
			{ label: 'Completion Reports', description: 'Track learning outcomes', icon: FileCheck, href: '/' },
			{ label: 'Engagement Insights', description: 'Measure activity levels', icon: Activity, href: '/' },
		],
	},
];

export const FEATURES_CTA: NavCta = {
	highlight: 'Want to launch fast?',
	text: 'Launch your EdTech platform in 60 seconds',
	button: 'Get Started',
};

export const RESOURCES_ITEMS: NavResourceItem[] = [
	{ label: 'Documentation', icon: FileText, href: '/' },
	{ label: 'Integrations', icon: Puzzle, href: '/' },
	{ label: 'Blog', icon: Rss, href: '/' },
	{ label: 'Changelog', icon: GitCommit, href: '/' },
	{ label: 'Videos', icon: PlaySquare, href: '/' },
	{ label: 'Help Center', icon: LifeBuoy, href: '/' },
];

export const NAV_LINKS: NavLinkItem[] = [
	{ label: 'Pricing', href: '/' },
	{ label: 'Contact Sales', href: '/' },
];
