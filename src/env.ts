import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

const DEFAULT_SITE_ORIGIN = 'https://edushade.com';
const DEFAULT_DEV_ORIGIN = 'http://localhost:3000';

export const env = createEnv({
	server: {
		SERVER_URL: z.string().url().optional(),
		SITE_ORIGIN: z.string().url().optional(),

		// Mailtrap / SMTP (for form submission or email sending)
		EMAIL_PROVIDER: z.string().optional(),
		EMAIL_SMTP_HOST: z.string().optional(),
		EMAIL_SMTP_PORT: z.string().optional(),
		EMAIL_SMTP_USERNAME: z.string().optional(),
		EMAIL_SMTP_PASSWORD: z.string().optional(),
	},

	clientPrefix: 'VITE_',

	client: {
		VITE_APP_TITLE: z.string().min(1).optional(),
		/** Canonical site origin for canonical links, OG tags (e.g. https://edushade.com) */
		VITE_SITE_ORIGIN: z.string().url().optional(),
		/** Microsoft Clarity project ID. When set, the Clarity tag is injected. */
		VITE_CLARITY_PROJECT_ID: z.string().min(1).optional(),
		/** Meta (Facebook) Pixel ID. When set, the Pixel tag + PageView tracking is injected. */
		VITE_FACEBOOK_PIXEL_ID: z.string().min(1).optional(),
	},

	/**
	 * What object holds the environment variables at runtime.
	 * Client (browser): import.meta.env (Vite injects VITE_*).
	 * Server (Node/SSR): merge process.env so SITE_ORIGIN and NODE_ENV are available in production.
	 */
	runtimeEnv:
		process?.env != null
			? { ...import.meta.env, ...process.env }
			: import.meta.env,

	/**
	 * By default, this library will feed the environment variables directly to
	 * the Zod validator.
	 *
	 * This means that if you have an empty string for a value that is supposed
	 * to be a number (e.g. `PORT=` in a ".env" file), Zod will incorrectly flag
	 * it as a type mismatch violation. Additionally, if you have an empty string
	 * for a value that is supposed to be a string with a default value (e.g.
	 * `DOMAIN=` in an ".env" file), the default value will never be applied.
	 *
	 * In order to solve these issues, we recommend that all new projects
	 * explicitly specify this option as true.
	 */
	emptyStringAsUndefined: true,
});

export function getSiteOrigin(): string {
	const fromEnv = env.VITE_SITE_ORIGIN ?? env.SITE_ORIGIN;
	if (fromEnv) return fromEnv;
	return import.meta.env.DEV ? DEFAULT_DEV_ORIGIN : DEFAULT_SITE_ORIGIN;
}
