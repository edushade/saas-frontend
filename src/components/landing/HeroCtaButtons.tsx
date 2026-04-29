import { Link } from '@tanstack/react-router';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DEMO_VIDEO_SRC } from '@/constants/hero';
import { WatchDemoModal } from './WatchDemoModal';

export function HeroCtaButtons() {
	const [watchDemoOpen, setWatchDemoOpen] = useState(false);

	return (
		<>
			<div className="flex flex-row items-center gap-2 md:gap-5">
				<Button
					asChild
					className="btn-brand-1 font-medium md:text-lg rounded-full text-white h-auto"
				>
					<Link to="/contact-sales">Build Your Academy</Link>
				</Button>
				<button
					type="button"
					onClick={() => setWatchDemoOpen(true)}
					className="group inline-flex h-12 items-center gap-2 rounded-full bg-white pl-1.5 pr-5 text-base md:text-lg font-medium text-text-primary border border-border-secondary shadow-[0_2px_8px_-3px_rgba(15,60,110,0.15)] transition-all duration-300 hover:text-brand-300 hover:border-brand-300/40 hover:shadow-[0_4px_14px_-4px_rgba(0,102,255,0.25)]"
				>
					<span className="flex size-9 items-center justify-center rounded-full bg-linear-to-br from-brand-300 to-brand-200 text-white transition-transform duration-300 group-hover:scale-105 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.4)]">
						<Play className="size-3.5 translate-x-px fill-current" />
					</span>
					Watch Demo
				</button>
			</div>
			<WatchDemoModal
				open={watchDemoOpen}
				onOpenChange={setWatchDemoOpen}
				videoSrc={DEMO_VIDEO_SRC || undefined}
				title="Watch Demo"
				tag="Edushade"
			/>
		</>
	);
}
