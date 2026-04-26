import type { ElementType } from 'react';
import {
	CheckPlainIcon,
	FileIcon,
	HeadphoneIcon,
	ListIcon,
	MenuIcon,
	VideoIcon,
} from '@/assets/icons';
import { buildFeatureNavGroups } from './feature-nav';

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

export const FEATURES_GROUPS: NavFeatureGroup[] = buildFeatureNavGroups();

export const FEATURES_CTA: NavCta = {
	highlight: 'Curious how it works?',
	text: 'Book a personalized demo and explore Edushade in action.',
	button: 'Try Demo',
};

export const RESOURCES_ITEMS: NavResourceItem[] = [
	{ label: 'Documentation', icon: FileIcon, href: '#' },
	{ label: 'Integrations', icon: MenuIcon, href: '/integrations' },
	{ label: 'Blog', icon: ListIcon, href: '/blogs' },
	{ label: 'Changelog', icon: CheckPlainIcon, href: '#' },
	{ label: 'Videos', icon: VideoIcon, href: '#' },
	{ label: 'Help Center', icon: HeadphoneIcon, href: '#' },
];

export const NAV_LINKS: NavLinkItem[] = [
	// { label: "Pricing", href: "/pricing" },
	{ label: 'Contact Sales', href: '/contact-sales' },
];
