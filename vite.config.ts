import contentCollections from "@content-collections/vite";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import type { PluginOption } from "vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { prerenderRequestUrlFix } from "./vite-plugins/prerender-request-url-fix";

const config = defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		contentCollections(),
		devtools(),
		tailwindcss(),
		tsconfigPaths({ projects: ["./tsconfig.json"] }),
		tanstackStart({
			srcDirectory: "src",
			prerender: {
				enabled: process.env.VERCEL !== "1",
				autoSubfolderIndex: true,
				autoStaticPathsDiscovery: true,
				crawlLinks: true,
				filter: ({ path }: { path: string }) =>
					path === "/" || (!path.endsWith("/") && !path.startsWith("/api")),
				retryCount: 2,
				retryDelay: 1000,
				maxRedirects: 5,
				failOnError: false,
			},
		}),
		prerenderRequestUrlFix(),
		viteReact({
			babel: {
				plugins: ["babel-plugin-react-compiler"],
			},
		}),
		nitro(),
	] as PluginOption[],
});

export default config;
