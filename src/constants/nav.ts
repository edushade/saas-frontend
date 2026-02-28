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
	slug: string;
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
				slug: "courses",
				href: "/features/courses",
			},
			{
				label: "Live Classes",
				description: "Teach in real time",
				icon: UserSpeakRoundedIcon,
				slug: "live-classes",
				href: "/features/live-classes",
			},
			{
				label: "Cohorts",
				description: "Run guided programs",
				icon: NotebookSquareIcon,
				slug: "cohorts",
				href: "/features/cohorts",
			},
			{
				label: "Workshops",
				description: "Host focused sessions",
				icon: TestTubeIcon,
				slug: "workshops",
				href: "/features/workshops",
			},
			{
				label: "Assessments & Exams",
				description: "Evaluate learner understanding",
				icon: CalculatorMinimalisticIcon,
				slug: "assessments-exams",
				href: "/features/assessments-exams",
			},
			{
				label: "Assignments & Quizzes",
				description: "Reinforce learning outcomes",
				icon: ClipboardListIcon,
				slug: "assignments-quizzes",
				href: "/features/assignments-quizzes",
			},
			{
				label: "Certificates",
				description: "Recognize course completion",
				icon: DiplomaIcon,
				slug: "certificates",
				href: "/features/certificates",
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
				slug: "recorded-lessons",
				href: "/features/recorded-lessons",
			},
			{
				label: "Learning Paths",
				description: "Guide learner progression",
				icon: RoutingIcon,
				slug: "learning-paths",
				href: "/features/learning-paths",
			},
			{
				label: "Community",
				description: "Build learner interaction",
				icon: UsersGroupTwoRoundedIcon,
				slug: "community",
				href: "/features/community",
			},
			{
				label: "Discussions",
				description: "Encourage peer conversation",
				icon: DialogIcon,
				slug: "discussions",
				href: "/features/discussions",
			},
			{
				label: "Announcements",
				description: "Share important updates",
				icon: ChatUnreadIcon,
				slug: "announcements",
				href: "/features/announcements",
			},
			{
				label: "Feedback & Reviews",
				description: "Collect learner input",
				icon: StarIcon,
				slug: "feedback-reviews",
				href: "/features/feedback-reviews",
			},
			{
				label: "Attendance Tracking",
				description: "Monitor session participation",
				icon: CalendarIcon,
				slug: "attendance-tracking",
				href: "/features/attendance-tracking",
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
				slug: "student-panel",
				href: "/features/student-panel",
			},
			{
				label: "Educator Panel",
				description: "Teaching and content control",
				icon: SidebarIcon,
				slug: "educator-panel",
				href: "/features/educator-panel",
			},
			{
				label: "Admin Panel",
				description: "Platform level management",
				icon: WindowFrameIcon,
				slug: "admin-panel",
				href: "/features/admin-panel",
			},
			{
				label: "User Management",
				description: "Manage learners and teams",
				icon: UserGroupRoundedIcon,
				slug: "user-management",
				href: "/features/user-management",
			},
			{
				label: "Role Permissions",
				description: "Control access levels",
				icon: StarsIcon,
				slug: "role-permissions",
				href: "/features/role-permissions",
			},
			{
				label: "Access Control",
				description: "Secure platform usage",
				icon: UserBlockIcon,
				slug: "access-control",
				href: "/features/access-control",
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
				slug: "progress-tracking",
				href: "/features/progress-tracking",
			},
			{
				label: "Learner Analytics",
				description: "Understand engagement patterns",
				icon: Chart2Icon,
				slug: "learner-analytics",
				href: "/features/learner-analytics",
			},
			{
				label: "Assessment Results",
				description: "Review learner performance",
				icon: CupStarIcon,
				slug: "assessment-results",
				href: "/features/assessment-results",
			},
			{
				label: "Completion Reports",
				description: "Track learning outcomes",
				icon: Widget6Icon,
				slug: "completion-reports",
				href: "/features/completion-reports",
			},
			{
				label: "Engagement Insights",
				description: "Measure activity levels",
				icon: GraphNewUpIcon,
				slug: "engagement-insights",
				href: "/features/engagement-insights",
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
	{ label: "Integrations", icon: MenuIcon, href: "/integrations" },
	{ label: "Blog", icon: ListIcon, href: "/blogs" },
	{ label: "Changelog", icon: CheckPlainIcon, href: "/" },
	{ label: "Videos", icon: VideoIcon, href: "/" },
	{ label: "Help Center", icon: HeadphoneIcon, href: "/" },
];

export const NAV_LINKS: NavLinkItem[] = [
	{ label: "Pricing", href: "/pricing" },
	{ label: "Contact Sales", href: "/contact-sales" },
];
