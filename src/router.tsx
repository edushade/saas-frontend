import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { NotFoundView } from "./components/route-states/NotFoundView";
import { RouteErrorView } from "./components/route-states/RouteErrorView";
import { RouteLoadingView } from "./components/route-states/RouteLoadingView";
import { getContext } from "./integrations/tanstack-query/root-provider";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
	const router = createTanStackRouter({
		routeTree,

		context: getContext(),

		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,

		defaultNotFoundComponent: NotFoundView,
		defaultErrorComponent: RouteErrorView,
		defaultPendingComponent: RouteLoadingView,
	});

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
