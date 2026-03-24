import { createFileRoute } from '@tanstack/react-router';
import { SaasSecurityPage } from '@/components/dashboard/saas-security-page';

export const Route = createFileRoute('/dashboard/security')({
	component: SaasSecurityPage,
});
