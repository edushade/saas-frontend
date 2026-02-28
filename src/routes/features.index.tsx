import { createFileRoute, redirect } from "@tanstack/react-router";

const DEFAULT_FEATURE_SLUG = "courses";

export const Route = createFileRoute("/features/")({
	beforeLoad: () => {
		throw redirect({
			to: "/features/$slug",
			params: { slug: DEFAULT_FEATURE_SLUG },
		});
	},
	component: FeaturesIndexRedirect,
});

function FeaturesIndexRedirect() {
	return null;
}
