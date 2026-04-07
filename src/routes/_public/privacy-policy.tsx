import { createFileRoute } from "@tanstack/react-router";
import { LegalPageView } from "@/components/legal/LegalPageView";
import { getSiteOrigin } from "@/env";
import { getLegalBySlug } from "@/lib/legals/legal";

const SLUG = "privacy-policy";

export const Route = createFileRoute("/_public/privacy-policy")({
	loader: () => {
		const doc = getLegalBySlug(SLUG);
		return { doc };
	},
	head: ({ loaderData }) => {
		const doc = loaderData?.doc;
		if (!doc) {
			return {
				meta: [
					{ title: "Privacy Policy | Edushade" },
					{ name: "robots", content: "noindex, follow" },
				],
			};
		}
		const origin = getSiteOrigin();
		const title = `${doc.title} | Edushade`;
		const description = doc.description ?? doc.title;
		const canonical = `${origin}/privacy-policy`;
		return {
			meta: [
				{ title },
				{ name: "description", content: description },
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
	component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
	const { doc } = Route.useLoaderData();
	if (!doc) {
		return (
			<main className="mx-auto max-w-(--es-max-w) px-4 py-16 text-center">
				<h1 className="text-xl font-semibold text-text-primary">
					Page not found
				</h1>
				<p className="mt-2 text-text-secondary">
					The requested legal page could not be found.
				</p>
				<a
					href="/"
					className="mt-4 inline-block font-medium text-brand-200 hover:underline"
				>
					Back to home
				</a>
			</main>
		);
	}
	return <LegalPageView doc={doc} />;
}
