import contentCollections from "@content-collections/vite";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import type { PluginOption } from "vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
	plugins: [
		contentCollections(),
		devtools(),
		nitro({ rollupConfig: { external: [/^@sentry\//] } }),
		tsconfigPaths({ projects: ["./tsconfig.json"] }),
		tailwindcss(),
		tanstackStart({
			prerender: {
				enabled: true,
				// Serve pages at /path/index.html instead of /path.html (better for CDN/cache)
				autoSubfolderIndex: true,
				// Discover static routes and merge with `pages`; dynamic/layout routes excluded
				autoStaticPathsDiscovery: true,
				// How many prerender jobs run in parallel
				concurrency: 14,
				// Extract links from HTML and prerender those pages too (e.g. / → /blogs)
				crawlLinks: true,
				// Optional: exclude paths from prerendering (e.g. dynamic-only or auth routes)
				// filter: ({ path }) => !path.startsWith('/do-not-render-me'),
				// Retries for failed prerender jobs
				retryCount: 2,
				retryDelay: 1000,
				maxRedirects: 5,
				// Fail the build if prerender throws. Set false when using Nitro: prerender
				// can receive a request with undefined url and render 0 pages; app still works via SSR.
				failOnError: false,
				// Optional: log when a page is successfully prerendered (useful once Nitro/Start fix request URL)
				// onSuccess: ({ path }) => console.log(`[prerender] Rendered ${path}`),
				// Optional: per-page config (merged with discovered static routes when autoStaticPathsDiscovery is true)
				// pages: [{ path: '/my-page', prerender: { enabled: true, outputPath: '/my-page/index.html' } }],
			},
		}),
		viteReact({
			babel: {
				plugins: ["babel-plugin-react-compiler"],
			},
		}),
	] as PluginOption[],
});

export default config;
