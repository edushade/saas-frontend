import { ArrowRight } from 'lucide-react';
import type { ElementType } from 'react';
import {
	ClapperboardPlayIcon,
	ClipboardListIcon,
	DiplomaIcon,
	NotebookBookmarkIcon,
} from '@/assets/icons';
import { RoutingIcon } from '@/assets/icons/routing-icons';

export const FEATURE_CAPABILITY_ICON_KEYS = [
	'notebookBookmark',
	'clapperboardPlay',
	'arrowRight',
	'diploma',
	'routing',
	'clipboardList',
] as const;

export type FeatureCapabilityIconKey =
	(typeof FEATURE_CAPABILITY_ICON_KEYS)[number];

export const FEATURE_CAPABILITY_ICON_MAP: Record<
	FeatureCapabilityIconKey,
	ElementType
> = {
	notebookBookmark: NotebookBookmarkIcon,
	clapperboardPlay: ClapperboardPlayIcon,
	arrowRight: ArrowRight,
	diploma: DiplomaIcon,
	routing: RoutingIcon,
	clipboardList: ClipboardListIcon,
};
