import { createFileRoute, redirect } from '@tanstack/react-router';

const DEFAULT_FEATURE_SLUG = 'courses';

export const Route = createFileRoute('/_main/features/')({
	beforeLoad: () => {
		throw redirect({
			to: '/features/$slug',
			params: { slug: DEFAULT_FEATURE_SLUG },
		});
	},
	head: () => {
		return {
			links: [
				{
					rel: 'prerender',
					href: '/features/courses',
				},
			],
		};
	},
});
