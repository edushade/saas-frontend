import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1800;
const EASING = (t: number) => 1 - (1 - t) ** 3; // ease-out cubic

export function parseStatValue(display: string): {
	value: number;
	suffix: string;
} {
	const match = display.match(/^([\d.]+)(.*)$/);
	if (!match) return { value: 0, suffix: display };
	const num = Number.parseFloat(match[1]);
	const suffix = match[2] ?? "";
	return { value: num, suffix };
}

export function StatCounter({
	displayValue,
	inView,
}: {
	displayValue: string;
	inView: boolean;
}) {
	const { value: target, suffix } = parseStatValue(displayValue);
	const [current, setCurrent] = useState<number | null>(null);
	const started = useRef(false);

	useEffect(() => {
		if (!inView || started.current) return;
		started.current = true;

		const startTime = performance.now();

		const tick = (now: number) => {
			const elapsed = now - startTime;
			const progress = Math.min(elapsed / DURATION_MS, 1);
			const eased = EASING(progress);
			setCurrent(Math.round(eased * target));

			if (progress < 1) requestAnimationFrame(tick);
		};

		requestAnimationFrame(tick);
	}, [inView, target]);

	const showTarget = current === null;
	const value = showTarget ? target : (current ?? 0);
	const formatted =
		target % 1 !== 0 ? (value as number).toFixed(1) : String(value);

	return (
		<span className="tabular-nums">
			{formatted}
			{suffix}
		</span>
	);
}
