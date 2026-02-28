import { createFileRoute } from "@tanstack/react-router";
import { IntegrationDetails } from "@/components/integrations/IntegrationDetails";
import { getIntegrationDetail } from "@/constants/integrations";

const SITE_ORIGIN = "https://edushade.com";

export const Route = createFileRoute("/integrations/$slug")({
	loader: ({ params }) => {
		const integration = getIntegrationDetail(params?.slug ?? "");
		return { integration };
	},
	head: ({ loaderData }) => {
		const integration = loaderData?.integration;
		if (!integration) {
			return {
				meta: [
					{ title: "Integration not found | Edushade" },
					{ name: "robots", content: "noindex, follow" },
				],
			};
		}
		const title = `${integration.name} | Edushade`;
		const description =
			integration.tagline ||
			integration.descriptionParagraphs?.[0] ||
			integration.name;
		const canonical = `${SITE_ORIGIN}/integrations/${integration.slug}`;
		return {
			meta: [
				{ title },
				{ name: "description", content: description },
				{ property: "og:type", content: "website" },
				{ property: "og:title", content: title },
				{ property: "og:description", content: description },
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
			"public, max-age=3600, s-maxage=3600, stale-while-revalidate=604800",
	}),
	staleTime: 5 * 60_000,
	component: IntegrationDetailPage,
});

function IntegrationDetailPage() {
	const { integration } = Route.useLoaderData();
	const { slug } = Route.useParams();

	if (!integration) {
		return (
			<main className="bg-bg-primary">
				<div className="mx-auto max-w-(--es-max-w) px-4 py-16 text-center">
					<h1 className="text-xl font-semibold text-text-primary">
						Integration not found
					</h1>
					<p className="mt-2 text-text-secondary">
						No integration found for &quot;{slug}&quot;.
					</p>
					<a
						href="/integrations"
						className="mt-4 inline-block font-medium text-brand-300 hover:underline"
					>
						Back to Integrations
					</a>
				</div>
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-bg-primary">
			<IntegrationDetails integration={integration} />
		</main>
	);
}
