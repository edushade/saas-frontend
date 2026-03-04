import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_main/features')({
	component: FeaturesLayout,
});

function FeaturesLayout() {
	return <Outlet />;
}
