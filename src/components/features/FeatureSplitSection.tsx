import { CheckRightIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Typography } from '../ui-custom/typography';

export interface FeatureSplitSectionProps {
	title: string;
	description: string;
	lists: string[];
	imgSrc?: string;
	reverse?: boolean;
}

export default function FeatureSplitSection({
	title,
	description,
	lists,
	imgSrc = '/svgs/hero/banner.svg',
	reverse = false,
}: FeatureSplitSectionProps) {
	return (
		<section className="bg-bg-primary py-(--es-section-py) px-4 md:px-8 xl:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w) ">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
					<div
						className={cn(
							'flex flex-col items-stretch gap-6',
							reverse ? 'lg:order-2' : 'lg:order-1',
						)}
					>
						<h1
							// variant="h1"
							className="text-2xl md:text-[2rem] lg:text-[2.75rem] max-w-xl leading-snug font-medium text-text-primary"
						>
							{title}
						</h1>
						<Typography
							variant="h6"
							className="font-normal leading-relaxed text-text-secondary "
						>
							{description}
						</Typography>

						<ul className="flex flex-col gap-3">
							{lists.map((benefit) => (
								<li key={benefit} className="flex items-center gap-3">
									<CheckRightIcon className="size-4" />
									<Typography
										variant="base"
										className="font-normal leading-snug text-text-tertiary"
									>
										{benefit}
									</Typography>
								</li>
							))}
						</ul>

						<div>
							<Button className="btn-brand-2 rounded-xl h-auto px-5 hover:bg-brand-200/90 py-3 text-base font-medium">
								Get Started Free
							</Button>
						</div>
					</div>

					<div
						className={cn(
							'display-frame relative overflow-hidden rounded-[20px] sm:rounded-[28px]',
							reverse ? 'lg:order-1' : 'lg:order-2',
						)}
					>
						{/* Smaller inset on mobile keeps the frame proportional. */}
						<div
							aria-hidden
							className="frame-inset-border inset-3 sm:inset-4 rounded-[12px] sm:rounded-[18px]"
						/>

						{/* Markers shift inward on mobile to stay on the smaller inset
						    border arc. Marker size itself is responsive in styles.css
						    (14px → 18px at sm+). */}
						<span aria-hidden className="frame-marker top-4.5 left-4.5 sm:top-6.5 sm:left-6.5 z-20" />
						<span aria-hidden className="frame-marker top-4.5 right-4.5 sm:top-6.5 sm:right-6.5 z-20" />
						<span aria-hidden className="frame-marker bottom-4.5 left-4.5 sm:bottom-6.5 sm:left-6.5 z-20" />
						<span aria-hidden className="frame-marker bottom-4.5 right-4.5 sm:bottom-6.5 sm:right-6.5 z-20" />

						{/* Tighter offset padding on mobile (24px gap from inset border
						    on top/left), expands to 30px on sm+. */}
						<div className="relative z-10 pt-9 pl-9 pr-3 pb-3 sm:pt-13 sm:pl-13 sm:pr-4 sm:pb-4">
							<div className="overflow-hidden rounded-tl-lg sm:rounded-tl-xl rounded-br-[10px] sm:rounded-br-[14px] bg-white shadow-[0_18px_36px_-20px_rgba(15,60,110,0.35),0_6px_14px_-8px_rgba(15,60,110,0.18)]">
								<img
									src={imgSrc}
									alt="Dashboard"
									className="block h-auto w-full"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
