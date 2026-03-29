import { createFileRoute, redirect } from '@tanstack/react-router';
import { getSiteOrigin } from '@/env';

export const Route = createFileRoute('/dashboard/')({
	head: () => ({
		meta: [{ title: 'Dashboard | Edushade' }],
		links: [{ rel: 'canonical', href: `${getSiteOrigin()}/dashboard` }],
	}),
	beforeLoad: () => {
		throw redirect({ to: '/dashboard/profile' });
	},
});
