import { createFileRoute } from "@tanstack/react-router";
import { IntegrationDetails } from "@/components/integrations/IntegrationDetails";
import { getIntegrationDetail } from "@/constants/integrations";

export const Route = createFileRoute("/integrations/$slug")({
	component: IntegrationDetailPage,
});

function IntegrationDetailPage() {
	const { slug } = Route.useParams();
	const integration = getIntegrationDetail(slug);

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
