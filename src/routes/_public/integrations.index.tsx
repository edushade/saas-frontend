import { createFileRoute } from "@tanstack/react-router";
import { BannerIntegration, IntegrationsList } from "@/components/integrations";
import { getSiteOrigin } from "@/env";

export const Route = createFileRoute("/_public/integrations/")({
	head: () => {
		const origin = getSiteOrigin();
		const title = "Integrations | Edushade";
		const description =
			"Connect the tools you already use. Explore Edushade integrations for support, payments, data, scheduling, and more.";
		const canonical = `${origin}/integrations`;
		return {
			meta: [
				{ title },
				{ name: "description", content: description },
				{ property: "og:title", content: title },
				{ property: "og:description", content: description },
				{ property: "og:type", content: "website" },
				{ property: "og:url", content: canonical },
				{ name: "twitter:card", content: "summary" },
				{ name: "twitter:title", content: title },
				{ name: "twitter:description", content: description },
			],
			links: [{ rel: "canonical", href: canonical }],
		};
	},
	headers: () => ({
		"Cache-Control":
			"public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
	}),
	staleTime: 5 * 60_000,
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
