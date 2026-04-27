import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { VideoWatchIcon } from '@/assets/icons';
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
				<Button
					variant="ghost"
					className="text-text-primary font-medium md:text-lg hover:bg-transparent h-auto py-3 px-5 gap-2"
					onClick={() => setWatchDemoOpen(true)}
				>
					<VideoWatchIcon className="text-text-primary size-8 shrink-0" />
					Watch Demo
				</Button>
			</div>
			<WatchDemoModal
				open={watchDemoOpen}
				onOpenChange={setWatchDemoOpen}
				videoSrc={DEMO_VIDEO_SRC || undefined}
				title="Watch Demo"
			/>
		</>
	);
}
