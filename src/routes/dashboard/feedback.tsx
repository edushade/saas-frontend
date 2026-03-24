import { createFileRoute } from '@tanstack/react-router';
import { DashboardPagePlaceholder } from '@/components/dashboard/dashboard-page-placeholder';

export const Route = createFileRoute('/dashboard/feedback')({
	component: () => <DashboardPagePlaceholder title="Feedback" />,
});
