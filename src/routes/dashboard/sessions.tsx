import { createFileRoute } from '@tanstack/react-router';
import { SaasSessionsPage } from '@/components/dashboard/saas-sessions-page';

export const Route = createFileRoute('/dashboard/sessions')({
	component: SaasSessionsPage,
});