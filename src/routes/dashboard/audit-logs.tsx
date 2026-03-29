import { createFileRoute } from '@tanstack/react-router';
import { SaasAuditLogsPage } from '@/components/dashboard/saas-audit-logs-page';

export const Route = createFileRoute('/dashboard/audit-logs')({
	component: SaasAuditLogsPage,
});
