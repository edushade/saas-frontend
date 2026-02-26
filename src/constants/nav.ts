import type { ElementType } from "react";
import {
	CalculatorMinimalisticIcon,
	CalendarIcon,
	Chart2Icon,
	ChatUnreadIcon,
	CheckPlainIcon,
	ClapperboardPlayIcon,
	ClipboardListIcon,
	CupStarIcon,
	DialogIcon,
	DiplomaIcon,
	FileIcon,
	GraphNewUpIcon,
	HeadphoneIcon,
	ListIcon,
	MenuIcon,
	NotebookBookmarkIcon,
	NotebookSquareIcon,
	PieChart3Icon,
	SidebarIcon,
	StarIcon,
	StarsIcon,
	TestTubeIcon,
	UserBlockIcon,
	UserGroupRoundedIcon,
	UserHeartRoundedIcon,
	UserSpeakRoundedIcon,
	UsersGroupTwoRoundedIcon,
	VideoIcon,
	Widget6Icon,
	WindowFrameIcon,
} from "@/assets/icons";
import { RoutingIcon } from "@/assets/icons/routing-icons";

export interface NavFeatureItem {
	label: string;
	description: string;
	icon: ElementType;
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
	icon: ElementType;
	href: string;
}

export interface NavLinkItem {
	label: string;
	href: string;
}

export const FEATURES_GROUPS: NavFeatureGroup[] = [
	{
		title: "Build Learning",
		items: [
			{
				label: "Courses",
				description: "Create structured lessons",
				icon: NotebookBookmarkIcon,
				href: "/",
			},
			{
				label: "Live Classes",
				description: "Teach in real time",
				icon: UserSpeakRoundedIcon,
				href: "/",
			},
			{
				label: "Cohorts",
				description: "Run guided programs",
				icon: NotebookSquareIcon,
				href: "/",
			},
			{
				label: "Workshops",
				description: "Host focused sessions",
				icon: TestTubeIcon,
				href: "/",
			},
			{
				label: "Assessments & Exams",
				description: "Evaluate learner understanding",
				icon: CalculatorMinimalisticIcon,
				href: "/",
			},
			{
				label: "Assignments & Quizzes",
				description: "Reinforce learning outcomes",
				icon: ClipboardListIcon,

				href: "/",
			},
			{
				label: "Certificates",
				description: "Recognize course completion",
				icon: DiplomaIcon,
				href: "/",
			},
		],
	},
	{
		title: "Deliver & Engage",
		items: [
			{
				label: "Recorded Lessons",
				description: "Offer self paced learning",
				icon: ClapperboardPlayIcon,
				href: "/",
			},
			{
				label: "Learning Paths",
				description: "Guide learner progression",
				icon: RoutingIcon,
				href: "/",
			},
			{
				label: "Community",
				description: "Build learner interaction",
				icon: UsersGroupTwoRoundedIcon,
				href: "/",
			},
			{
				label: "Discussions",
				description: "Encourage peer conversation",
				icon: DialogIcon,
				href: "/",
			},
			{
				label: "Announcements",
				description: "Share important updates",
				icon: ChatUnreadIcon,
				href: "/",
			},
			{
				label: "Feedback & Reviews",
				description: "Collect learner input",
				icon: StarIcon,
				href: "/",
			},
			{
				label: "Attendance Tracking",
				description: "Monitor session participation",
				icon: CalendarIcon,
				href: "/",
			},
		],
	},
	{
		title: "Manage Roles",
		items: [
			{
				label: "Student Panel",
				description: "Focused learning space",
				icon: UserHeartRoundedIcon,
				href: "/",
			},
			{
				label: "Educator Panel",
				description: "Teaching and content control",
				icon: SidebarIcon,
				href: "/",
			},
			{
				label: "Admin Panel",
				description: "Platform level management",
				icon: WindowFrameIcon,
				href: "/",
			},
			{
				label: "User Management",
				description: "Manage learners and teams",
				icon: UserGroupRoundedIcon,
				href: "/",
			},
			{
				label: "Role Permissions",
				description: "Control access levels",
				icon: StarsIcon,
				href: "/",
			},
			{
				label: "Access Control",
				description: "Secure platform usage",
				icon: UserBlockIcon,
				href: "/",
			},
		],
	},
	{
		title: "Track and Measure",
		items: [
			{
				label: "Progress Tracking",
				description: "Follow learner completion",
				icon: PieChart3Icon,
				href: "/",
			},
			{
				label: "Learner Analytics",
				description: "Understand engagement patterns",
				icon: Chart2Icon,
				href: "/",
			},
			{
				label: "Assessment Results",
				description: "Review learner performance",
				icon: CupStarIcon,
				href: "/",
			},
			{
				label: "Completion Reports",
				description: "Track learning outcomes",
				icon: Widget6Icon,
				href: "/",
			},
			{
				label: "Engagement Insights",
				description: "Measure activity levels",
				icon: GraphNewUpIcon,
				href: "/",
			},
		],
	},
];

export const FEATURES_CTA: NavCta = {
	highlight: "Want to launch fast?",
	text: "Launch your EdTech platform in 60 seconds",
	button: "Get Started",
};

export const RESOURCES_ITEMS: NavResourceItem[] = [
	{ label: "Documentation", icon: FileIcon, href: "/" },
	{ label: "Integrations", icon: MenuIcon, href: "/" },
	{ label: "Blog", icon: ListIcon, href: "/" },
	{ label: "Changelog", icon: CheckPlainIcon, href: "/" },
	{ label: "Videos", icon: VideoIcon, href: "/" },
	{ label: "Help Center", icon: HeadphoneIcon, href: "/" },
];

export const NAV_LINKS: NavLinkItem[] = [
	{ label: "Pricing", href: "/pricing" },
	{ label: "Contact Sales", href: "/contact-sales" },
];
