import { createFileRoute } from "@tanstack/react-router";
import { BannerIntegration, IntegrationsList } from "@/components/integrations";

export const Route = createFileRoute("/_main/integrations/")({
	component: IntegrationsIndexPage,
});

function IntegrationsIndexPage() {
	return (
		<main className="pt-(--es-section-pt)">
			<BannerIntegration />
			<IntegrationsList />
		</main>
	);
}
