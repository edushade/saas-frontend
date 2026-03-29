import { createFileRoute } from '@tanstack/react-router';
import { DashboardPagePlaceholder } from '@/components/dashboard/dashboard-page-placeholder';

export const Route = createFileRoute('/dashboard/sessions')({
	component: DashboardPagePlaceholder,
});
