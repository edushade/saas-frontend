import { useCallback, useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui-custom/typography";
import { cn } from "@/lib/utils";

const RADIO_GROUP_NAME = "compose-model-tags";
const AUTO_ROTATE_INTERVAL_MS = 5000;
const PAUSE_AFTER_INTERACTION_MS = 10000;

export interface ComposeModelTagsProps {
	tags: string[];
	defaultSelected?: string;
	value?: string;
	onChange?: (tag: string) => void;
	name?: string;
	description?: string;
	className?: string;
	autoRotate?: boolean;
	autoRotateIntervalMs?: number;
	pauseAfterInteractionMs?: number;
}

export function ComposeModelTags({
	tags,
	defaultSelected,
	value: controlledValue,
	onChange,
	name = RADIO_GROUP_NAME,
	description = "You can compose your own learning model",
	className,
	autoRotate = true,
	autoRotateIntervalMs = AUTO_ROTATE_INTERVAL_MS,
	pauseAfterInteractionMs = PAUSE_AFTER_INTERACTION_MS,
}: ComposeModelTagsProps) {
	const isControlled = controlledValue !== undefined && onChange !== undefined;
	const [internalValue, setInternalValue] = useState<string>(
		defaultSelected ?? tags[0] ?? "",
	);
	const selected = isControlled ? controlledValue : internalValue;
	const activeIndex = Math.max(0, tags.indexOf(selected));

	const [progress, setProgress] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const progressRef = useRef(0);
	const lastTickRef = useRef(0);
	const rafRef = useRef<number>(0);
	const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const setSelected = useCallback(
		(tag: string) => {
			if (isControlled) {
				onChange?.(tag);
			} else {
				setInternalValue(tag);
			}
		},
		[isControlled, onChange],
	);

	const handleSelect = useCallback(
		(tag: string) => {
			setSelected(tag);
			progressRef.current = 0;
			setProgress(0);
			setIsPaused(true);
			if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
			pauseTimerRef.current = setTimeout(
				() => setIsPaused(false),
				pauseAfterInteractionMs,
			);
		},
		[setSelected, pauseAfterInteractionMs],
	);

	useEffect(() => {
		progressRef.current = 0;
		setProgress(0);
	}, []);

	useEffect(() => {
		if (!autoRotate || tags.length <= 1 || isPaused) {
			lastTickRef.current = 0;
			return;
		}

		lastTickRef.current = 0;

		const tick = (timestamp: number) => {
			if (lastTickRef.current === 0) lastTickRef.current = timestamp;
			const delta = timestamp - lastTickRef.current;
			lastTickRef.current = timestamp;

			progressRef.current += delta / autoRotateIntervalMs;
			if (progressRef.current >= 1) {
				progressRef.current = 0;
				setProgress(0);
				const nextIndex = (activeIndex + 1) % tags.length;
				setSelected(tags[nextIndex]);
			} else {
				setProgress(progressRef.current);
			}

			rafRef.current = requestAnimationFrame(tick);
		};

		rafRef.current = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(rafRef.current);
	}, [
		autoRotate,
		autoRotateIntervalMs,
		isPaused,
		activeIndex,
		tags,
		setSelected,
	]);

	useEffect(() => {
		return () => {
			if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, []);

	if (tags.length === 0) return null;

	return (
		<fieldset
			className={cn("border-0 p-0", className)}
			aria-label="Learning model options"
		>
			{description ? (
				<Typography
					as="legend"
					variant="small"
					className="mb-3 font-normal text-text-tertiary"
				>
					{description}
				</Typography>
			) : null}
			<ul className="flex flex-wrap gap-3 max-w-[580px] list-none p-0 m-0">
				{tags.map((tag) => {
					const isActive = selected === tag;
					return (
						<li key={tag}>
							<label className="cursor-pointer">
								<input
									type="radio"
									name={name}
									value={tag}
									checked={isActive}
									onChange={(e) => {
										if (e.target.checked) handleSelect(tag);
									}}
									className="sr-only"
									aria-label={`Learning model: ${tag}`}
								/>
								<Badge
									variant="outline"
									className={cn(
										"relative cursor-pointer rounded-full px-2 py-1 text-base transition-colors duration-300 hover:border-brand-300 hover:text-brand-300",
										isActive
											? "border-brand-200 font-semibold text-brand-300"
											: "border-border-primary text-text-secondary",
									)}
								>
									{isActive ? (
										<span
											aria-hidden
											className="absolute inset-0 rounded-full bg-[#E6F0FF]"
											style={{
												transform: `scaleX(${progress})`,
												transformOrigin: "left",
											}}
										/>
									) : null}
									<span className="relative z-10">{tag}</span>
								</Badge>
							</label>
						</li>
					);
				})}
			</ul>
		</fieldset>
	);
}
