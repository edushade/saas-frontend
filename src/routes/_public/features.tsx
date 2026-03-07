import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_public/features')({
	component: FeaturesLayout,
});

function FeaturesLayout() {
	return <Outlet />;
}
