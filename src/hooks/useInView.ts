import { useEffect, useRef, useState } from "react";

/**
 * Returns true once the ref element has entered the viewport (with optional threshold).
 * Does not trigger any scroll; safe for SEO (observation only).
 * @param options - { threshold: 0-1, rootMargin: string }
 */
export function useInView(options?: {
	threshold?: number;
	rootMargin?: string;
}): [React.RefObject<HTMLDivElement | null>, boolean] {
	const ref = useRef<HTMLDivElement>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setInView(true);
			},
			{
				threshold: options?.threshold ?? 0.2,
				rootMargin: options?.rootMargin ?? "0px",
			},
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [options?.threshold, options?.rootMargin]);

	return [ref, inView];
}
