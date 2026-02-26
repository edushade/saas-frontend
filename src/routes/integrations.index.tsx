import { createFileRoute } from "@tanstack/react-router";
import { BannerIntegration, IntegrationsList } from "@/components/integrations";

export const Route = createFileRoute("/integrations/")({
	component: IntegrationsIndexPage,
});

function IntegrationsIndexPage() {
	return (
		<main className="pt-8">
			<BannerIntegration />
			<IntegrationsList />
		</main>
	);
}
