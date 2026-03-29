import { allFeatureDetails } from 'content-collections';
import type { ElementType } from 'react';
import {
	CalculatorMinimalisticIcon,
	CalendarIcon,
	Chart2Icon,
	ChatUnreadIcon,
	ClapperboardPlayIcon,
	ClipboardListIcon,
	CupStarIcon,
	DialogIcon,
	DiplomaIcon,
	GraphNewUpIcon,
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
	Widget6Icon,
	WindowFrameIcon,
} from '@/assets/icons';
import { RoutingIcon } from '@/assets/icons/routing-icons';

export const NAV_FEATURE_ICON_KEYS = [
	'notebookBookmark',
	'userSpeakRounded',
	'notebookSquare',
	'testTube',
	'calculatorMinimalistic',
	'clipboardList',
	'diploma',
	'clapperboardPlay',
	'routing',
	'usersGroupTwoRounded',
	'dialog',
	'chatUnread',
	'star',
	'calendar',
	'userHeartRounded',
	'sidebar',
	'windowFrame',
	'userGroupRounded',
	'stars',
	'userBlock',
	'pieChart3',
	'chart2',
	'cupStar',
	'widget6',
	'graphNewUp',
] as const;

export type NavFeatureIconKey = (typeof NAV_FEATURE_ICON_KEYS)[number];

export const NAV_FEATURE_ICON_MAP: Record<NavFeatureIconKey, ElementType> = {
	notebookBookmark: NotebookBookmarkIcon,
	userSpeakRounded: UserSpeakRoundedIcon,
	notebookSquare: NotebookSquareIcon,
	testTube: TestTubeIcon,
	calculatorMinimalistic: CalculatorMinimalisticIcon,
	clipboardList: ClipboardListIcon,
	diploma: DiplomaIcon,
	clapperboardPlay: ClapperboardPlayIcon,
	routing: RoutingIcon,
	usersGroupTwoRounded: UsersGroupTwoRoundedIcon,
	dialog: DialogIcon,
	chatUnread: ChatUnreadIcon,
	star: StarIcon,
	calendar: CalendarIcon,
	userHeartRounded: UserHeartRoundedIcon,
	sidebar: SidebarIcon,
	windowFrame: WindowFrameIcon,
	userGroupRounded: UserGroupRoundedIcon,
	stars: StarsIcon,
	userBlock: UserBlockIcon,
	pieChart3: PieChart3Icon,
	chart2: Chart2Icon,
	cupStar: CupStarIcon,
	widget6: Widget6Icon,
	graphNewUp: GraphNewUpIcon,
};

export function resolveNavFeatureIcon(
	slugOrId: string,
): ElementType | undefined {
	const doc = allFeatureDetails.find(
		(d) => d.slug === slugOrId || d.id === slugOrId,
	);
	if (!doc?.navIcon) return undefined;
	return NAV_FEATURE_ICON_MAP[doc.navIcon as NavFeatureIconKey];
}
