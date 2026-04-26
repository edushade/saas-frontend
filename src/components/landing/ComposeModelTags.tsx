import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui-custom/typography";
import { cn } from "@/lib/utils";

const RADIO_GROUP_NAME = "compose-model-tags";
const AUTO_ROTATE_INTERVAL_MS = 2500;
const AUTO_ROTATE_DELAY_MS = 2000;

const LABEL_SELECTED =
	"[&:has(input:checked)>*]:border-brand-300 [&:has(input:checked)>*]:bg-brand-light [&:has(input:checked)>*]:text-brand-300 [&:has(input:checked)>*]:font-medium";

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
	autoRotateDelayMs?: number;
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
	autoRotateDelayMs = AUTO_ROTATE_DELAY_MS,
}: ComposeModelTagsProps) {
	const fieldsetRef = useRef<HTMLFieldSetElement>(null);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const isControlled = controlledValue !== undefined && onChange !== undefined;
	const selected = isControlled
		? controlledValue
		: (defaultSelected ?? tags[0]);

	useEffect(() => {
		if (!autoRotate || tags.length <= 1) return;
		const el = fieldsetRef.current;
		if (!el) return;

		const radios = el.querySelectorAll<HTMLInputElement>('input[type="radio"]');
		if (radios.length === 0) return;

		const startId = window.setTimeout(() => {
			const id = setInterval(() => {
				let currentIndex = -1;
				for (let i = 0; i < radios.length; i++) {
					if (radios[i].checked) {
						currentIndex = i;
						break;
					}
				}
				const nextIndex = (currentIndex + 1) % radios.length;
				const nextTag = tags[nextIndex];
				if (onChange) {
					onChange(nextTag);
				} else {
					radios[nextIndex].checked = true;
				}
			}, autoRotateIntervalMs);
			intervalRef.current = id;
		}, autoRotateDelayMs);

		return () => {
			window.clearTimeout(startId);
			if (intervalRef.current !== null) clearInterval(intervalRef.current);
		};
	}, [autoRotate, autoRotateIntervalMs, autoRotateDelayMs, tags, onChange]);

	if (tags.length === 0) return null;

	return (
		<fieldset
			ref={fieldsetRef}
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
				{tags.map((tag) => (
					<li key={tag}>
						<label className={`cursor-pointer ${LABEL_SELECTED}`}>
							<input
								type="radio"
								name={name}
								value={tag}
								{...(isControlled
									? { checked: controlledValue === tag }
									: { defaultChecked: tag === selected })}
								onChange={
									onChange
										? (e) => e.target.checked && onChange(tag)
										: undefined
								}
								className="sr-only"
								aria-label={`Learning model: ${tag}`}
							/>
							<Badge
								variant="outline"
								className={cn(
									"cursor-pointer rounded-full  px-2 py-1	 text-base  transition-colors hover:border-brand-300 hover:text-brand-300",
									selected === tag
										? "border-brand-200 bg-[#E6F0FF] font-semibold text-brand-300"
										: "border-border-primary text-text-secondary",
								)}
							>
								{tag}
							</Badge>
						</label>
					</li>
				))}
			</ul>
		</fieldset>
	);
}
