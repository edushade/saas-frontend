import { useRef, useState } from "react";
import { VideoWatchIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface WatchDemoModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	videoSrc?: string;
	title?: string;
	className?: string;
}

export function WatchDemoModal({
	open,
	onOpenChange,
	videoSrc = "/videos/intro.mp4",
	title = "Watch Demo",
	className,
}: WatchDemoModalProps) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [playing, setPlaying] = useState(false);
	const hasVideo = Boolean(videoSrc?.trim());

	function handlePlay() {
		videoRef.current?.play();
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent
				className={cn(
					"max-w-2xl aspect-video p-0 gap-0 overflow-hidden rounded-2xl border-0 shadow-xl",
					"backdrop-blur-md bg-background/90",
					className,
				)}
				overlayClassName="bg-black/15"
				showCloseButton={true}
				aria-label={title}
			>
				{hasVideo ? (
					<div className="relative h-full w-full overflow-hidden rounded-2xl bg-bg-tertiary">
						<video
							ref={videoRef}
							controls
							src={videoSrc}
							className="h-full w-full object-cover"
							aria-label={title}
							onPlay={() => setPlaying(true)}
							onPause={() => setPlaying(false)}
							onEnded={() => setPlaying(false)}
						>
							<track kind="captions" />
						</video>
						{!playing && (
							<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
								<Button
									size="lg"
									onClick={handlePlay}
									className="pointer-events-auto rounded-full bg-black/20 backdrop-blur-[20px] hover:bg-black/30 text-white gap-2 h-auto px-4 py-2"
								>
									<VideoWatchIcon className="size-7 shrink-0" />
									<span className="text-xl font-normal">{title}</span>
								</Button>
							</div>
						)}
					</div>
				) : (
					<div className="flex h-full w-full items-center justify-center rounded-2xl bg-muted text-muted-foreground text-sm">
						No video URL provided.
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}
