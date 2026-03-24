import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SaasDashboardLayout } from "@/components/dashboard/saas-dashboard-layout";

export const Route = createFileRoute("/dashboard")({
	component: DashboardLayout,
});

function DashboardLayout() {
	return (
		<SaasDashboardLayout>
			<Outlet />
		</SaasDashboardLayout>
	);
}
