import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { NotFoundView } from './components/route-states/NotFoundView';
import { RouteErrorView } from './components/route-states/RouteErrorView';
import { getContext } from './integrations/tanstack-query/root-provider';
import { routeTree } from './routeTree.gen';

export function getRouter() {
	const router = createTanStackRouter({
		routeTree,

		context: getContext(),

		scrollRestoration: true,
		defaultPreload: 'intent',

		defaultNotFoundComponent: NotFoundView,
		defaultErrorComponent: RouteErrorView,
	});

	return router;
}

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
