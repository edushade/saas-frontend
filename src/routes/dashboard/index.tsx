import { createFileRoute } from "@tanstack/react-router";
import { DashboardPagePlaceholder } from "@/components/dashboard/dashboard-page-placeholder";
import { getSiteOrigin } from "@/env";

export const Route = createFileRoute("/dashboard/")({
	head: () => ({
		meta: [{ title: "Dashboard | Edushade" }],
		links: [{ rel: "canonical", href: `${getSiteOrigin()}/dashboard` }],
	}),
	component: DashboardHome,
});

function DashboardHome() {
	return <DashboardPagePlaceholder title="Dashboard overview" />;
}
