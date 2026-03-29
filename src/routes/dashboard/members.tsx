import { createFileRoute } from '@tanstack/react-router';
import { SaasMembersPage } from '@/components/dashboard/saas-members-page';

export const Route = createFileRoute('/dashboard/members')({
	component: SaasMembersPage,
});
