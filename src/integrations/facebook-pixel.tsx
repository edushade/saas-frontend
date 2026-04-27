import { useRouterState } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import { env } from '@/env';

declare global {
	interface Window {
		fbq?: (...args: unknown[]) => void;
	}
}

/**
 * Fires `fbq('track', 'PageView')` on every SPA navigation after the initial
 * page load. The initial PageView is sent by the inline pixel bootstrap in
 * `<head>` so first-paint capture survives hydration delay.
 */
export function FacebookPixelTracker() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (!env.VITE_FACEBOOK_PIXEL_ID) return;
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		if (typeof window === 'undefined') return;
		if (typeof window.fbq !== 'function') return;
		window.fbq('track', 'PageView');
	}, [pathname]);

	return null;
}
