import { TanStackDevtools } from '@tanstack/react-devtools';
import type { QueryClient } from '@tanstack/react-query';
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { NotFoundView } from '../components/route-states/NotFoundView';
import { RouteErrorView } from '../components/route-states/RouteErrorView';
import { Toaster } from '../components/ui/sonner';
import { env, getSiteOrigin } from '../env';

import { FacebookPixelTracker } from '../integrations/facebook-pixel';
import TanStackQueryDevtools from '../integrations/tanstack-query/devtools';
import TanStackQueryProvider from '../integrations/tanstack-query/root-provider';
import appCss from '../styles.css?url';

const CLARITY_BOOTSTRAP = (id: string) =>
	`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script",${JSON.stringify(id)});`;

const FB_PIXEL_BOOTSTRAP = (id: string) =>
	`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', ${JSON.stringify(id)});fbq('track', 'PageView');`;

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => {
		const origin = getSiteOrigin();
		return {
			meta: [
				{ charSet: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'robots', content: 'index, follow' },
				{ name: 'theme-color', content: '#1a6bff' },
				// Default title / description - overridden per-route
				{ title: 'Edushade — The Platform Built for How You Actually Teach' },
				{
					name: 'description',
					content:
						'Edushade helps educators design, launch, and grow their online courses — starting from intent, not setup. Join 250+ platforms already growing with Edushade.',
				},
				// Open Graph defaults
				{
					property: 'og:type',
					content: 'website',
				},
				{
					property: 'og:site_name',
					content: 'Edushade',
				},
				{
					property: 'og:title',
					content: 'Edushade — The Platform Built for How You Actually Teach',
				},
				{
					property: 'og:description',
					content:
						'Design, launch, and grow your online courses — starting from intent, not setup.',
				},
				{ property: 'og:locale', content: 'en_US' },
				// og:image — override per route if needed
				{
					property: 'og:image',
					content: `${origin}/og-image.png`,
				},
				{ property: 'og:image:width', content: '1200' },
				{ property: 'og:image:height', content: '630' },
				{
					property: 'og:image:alt',
					content: 'Edushade — The Platform Built for How You Actually Teach',
				},
				// Twitter Card defaults
				{ name: 'twitter:card', content: 'summary_large_image' },
				{
					name: 'twitter:title',
					content: 'Edushade — The Platform Built for How You Actually Teach',
				},
				{
					name: 'twitter:description',
					content:
						'Design, launch, and grow your online courses — starting from intent, not setup.',
				},
				{
					name: 'twitter:image',
					content: `${origin}/og-image.png`,
				},
			],
			links: [
				{ rel: 'icon', href: '/favicon.ico', sizes: 'any' },
				{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
				{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
				{
					rel: 'preload',
					href: '/fonts/BDOGrotesk/BDOGrotesk-Regular.woff2',
					as: 'font',
					type: 'font/woff2',
					crossOrigin: 'anonymous',
				},
				{
					rel: 'preload',
					href: '/fonts/BDOGrotesk/BDOGrotesk-Medium.woff2',
					as: 'font',
					type: 'font/woff2',
					crossOrigin: 'anonymous',
				},
				{
					rel: 'preload',
					href: '/fonts/BDOGrotesk/BDOGrotesk-Bold.woff2',
					as: 'font',
					type: 'font/woff2',
					crossOrigin: 'anonymous',
				},
				{ rel: 'stylesheet', href: appCss },
			],
			scripts: [
				...(env.VITE_CLARITY_PROJECT_ID
					? [{ children: CLARITY_BOOTSTRAP(env.VITE_CLARITY_PROJECT_ID) }]
					: []),
				...(env.VITE_FACEBOOK_PIXEL_ID
					? [{ children: FB_PIXEL_BOOTSTRAP(env.VITE_FACEBOOK_PIXEL_ID) }]
					: []),
			],
		};
	},
	shellComponent: RootDocument,
	notFoundComponent: NotFoundView,
	errorComponent: RouteErrorView,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body suppressHydrationWarning>
				{env.VITE_FACEBOOK_PIXEL_ID && (
					<noscript>
						<img
							alt=""
							height="1"
							width="1"
							style={{ display: 'none' }}
							src={`https://www.facebook.com/tr?id=${encodeURIComponent(env.VITE_FACEBOOK_PIXEL_ID)}&ev=PageView&noscript=1`}
						/>
					</noscript>
				)}

				<TanStackQueryProvider>
					<div className="flex min-h-screen flex-col">{children}</div>

					<FacebookPixelTracker />

					<Toaster position="top-center" richColors closeButton />

					<TanStackDevtools
						config={{
							position: 'bottom-right',
						}}
						plugins={[
							{
								name: 'Tanstack Router',
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
