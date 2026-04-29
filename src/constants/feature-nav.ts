import { allFeatureDetails } from 'content-collections';
import {
	NAV_FEATURE_ICON_MAP,
	type NavFeatureIconKey,
} from '@/lib/features/nav-feature-icons';
import type { NavFeatureGroup, NavFeatureItem } from './nav';

export const FEATURE_NAV_GROUP_ORDER = [
	'Build Learning',
	'Deliver & Engage',
	'Manage Roles',
	'Track and Measure',
] as const;

export type FeatureNavGroupTitle = (typeof FEATURE_NAV_GROUP_ORDER)[number];

export const FEATURE_GROUP_DESCRIPTIONS = {
	'Build Learning':
		'Edushade is designed by starting with how educators plan, teach, and support learners. Every part of the platform follows real instructional needs, not predefined software workflows.',
	'Deliver & Engage':
		'Reach learners in the format that works best — recorded video, live sessions, or structured paths. Keep engagement high with discussions, announcements, and feedback tools built directly into your platform.',
	'Manage Roles':
		"Give every user the experience that fits their responsibilities. Edushade's role-based panels keep students, educators, and admins focused on what matters most to them.",
	'Track and Measure':
		"Understand what's working across your platform. From individual learner progress to platform-wide completion rates, every data point is accessible and actionable.",
} satisfies Record<FeatureNavGroupTitle, string>;

export function buildFeatureNavGroups(): NavFeatureGroup[] {
	const byGroup = new Map<string, (typeof allFeatureDetails)[number][]>();

	for (const doc of allFeatureDetails) {
		const title = doc.navGroup;
		const list = byGroup.get(title) ?? [];
		list.push(doc);
		byGroup.set(title, list);
	}

	for (const [, list] of byGroup) {
		list.sort(
			(a, b) =>
				(a.navOrder ?? 0) - (b.navOrder ?? 0) || a.title.localeCompare(b.title),
		);
	}

	const groups: NavFeatureGroup[] = [];

	for (const groupTitle of FEATURE_NAV_GROUP_ORDER) {
		const docs = byGroup.get(groupTitle);
		if (!docs?.length) continue;

		const items: NavFeatureItem[] = docs.map((doc) => {
			const slug = doc.slug ?? '';
			const Icon = NAV_FEATURE_ICON_MAP[doc.navIcon as NavFeatureIconKey];
			return {
				label: doc.title,
				description: doc.description,
				icon: Icon,
				slug,
				href: doc.href,
				comingSoon: doc.comingSoon ?? false,
			};
		});

		groups.push({ title: groupTitle, items });
	}

	return groups;
}
