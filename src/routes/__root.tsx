import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { NotFoundView } from "../components/route-states/NotFoundView";
import { RouteErrorView } from "../components/route-states/RouteErrorView";
import { RouteLoadingView } from "../components/route-states/RouteLoadingView";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import TanStackQueryProvider from "../integrations/tanstack-query/root-provider";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "robots", content: "index, follow" },
			{ name: "theme-color", content: "#1a6bff" },
			// Default title / description — overridden per-route
			{ title: "Edushade — The Platform Built for How You Actually Teach" },
			{
				name: "description",
				content:
					"Edushade helps educators design, launch, and grow their online courses — starting from intent, not setup. Join 250+ platforms already growing with Edushade.",
			},
			// Open Graph defaults
			{
				property: "og:type",
				content: "website",
			},
			{
				property: "og:site_name",
				content: "Edushade",
			},
			{
				property: "og:title",
				content: "Edushade — The Platform Built for How You Actually Teach",
			},
			{
				property: "og:description",
				content:
					"Design, launch, and grow your online courses — starting from intent, not setup.",
			},
			{ property: "og:locale", content: "en_US" },
			// og:image — override per route if needed
			{
				property: "og:image",
				content: "https://edushade.com/og-image.png",
			},
			{ property: "og:image:width", content: "1200" },
			{ property: "og:image:height", content: "630" },
			{ property: "og:image:alt", content: "Edushade — The Platform Built for How You Actually Teach" },
			// Twitter Card defaults
			{ name: "twitter:card", content: "summary_large_image" },
			{
				name: "twitter:title",
				content: "Edushade — The Platform Built for How You Actually Teach",
			},
			{
				name: "twitter:description",
				content:
					"Design, launch, and grow your online courses — starting from intent, not setup.",
			},
			{
				name: "twitter:image",
				content: "https://edushade.com/og-image.png",
			},
		],
		links: [
			{ rel: "icon", href: "/favicon.ico", sizes: "any" },
			{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
			{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
			},
			{ rel: "stylesheet", href: appCss },
		],
	}),
	shellComponent: RootDocument,
	notFoundComponent: NotFoundView,
	errorComponent: RouteErrorView,
	pendingComponent: RouteLoadingView,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<TanStackQueryProvider>
					<div className="flex min-h-screen flex-col">
						<Header />
						<div className="flex flex-1 flex-col">{children}</div>
						<Footer />
					</div>

					<TanStackDevtools
						config={{
							position: "bottom-right",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
							TanStackQueryDevtools,
						]}
					/>
				</TanStackQueryProvider>
				<Scripts />
			</body>
		</html>
	);
}
