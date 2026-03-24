import { createFileRoute } from '@tanstack/react-router';
import { SaasUsageBreakdownPage } from '@/components/dashboard/saas-usage-breakdown-page';

export const Route = createFileRoute('/dashboard/usage-breakdown')({
	component: SaasUsageBreakdownPage,
});
