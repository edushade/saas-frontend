import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		tailwindcss(),
		viteReact(),
		tsconfigPaths({ projects: ['./tsconfig.json'] }),
	],
	test: {
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{ts,tsx}'],
	},
});
