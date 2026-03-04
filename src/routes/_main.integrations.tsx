import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_main/integrations')({
	component: IntegrationsLayout,
});

function IntegrationsLayout() {
	return <Outlet />;
}
