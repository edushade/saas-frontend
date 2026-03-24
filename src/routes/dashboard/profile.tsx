import { createFileRoute } from '@tanstack/react-router';
import { SaasProfilePage } from '@/components/dashboard/saas-profile-page';

export const Route = createFileRoute('/dashboard/profile')({
	component: SaasProfilePage,
});
