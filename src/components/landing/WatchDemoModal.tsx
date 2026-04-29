import { Play, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { VideoCard } from "../shared";

export interface WatchDemoModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	videoSrc?: string;
	title?: string;
	tag?: string;
	className?: string;
}

export function WatchDemoModal({
	open,
	onOpenChange,
	videoSrc = "/videos/intro.mp4",
	title = "Watch Demo",
	tag = "Edushade",
	className,
}: WatchDemoModalProps) {
	const hasVideo = Boolean(videoSrc?.trim());
	const videoLabel = `Inside ${tag}`;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent
				className={cn(
					"w-[calc(100vw-2rem)] sm:max-w-5xl p-0 gap-0 overflow-visible border-0 bg-transparent shadow-none",
					className,
				)}
				overlayClassName="bg-black/40 backdrop-blur-sm"
				showCloseButton={false}
				aria-label={title}
			>
				{/* Custom close — sits OUTSIDE the device frame on the top-right
				    so it doesn't overlap the QUICK TOUR header / HD badge. */}
				<DialogClose
					aria-label="Close"
					className="absolute -top-3 -right-3 z-50 flex size-9 items-center justify-center rounded-full bg-white border border-border-secondary shadow-[0_4px_14px_-4px_rgba(15,60,110,0.25)] text-text-primary transition-all duration-200 hover:text-brand-300 hover:border-brand-300/40 hover:shadow-[0_6px_18px_-4px_rgba(0,102,255,0.3)] focus:outline-none focus:ring-2 focus:ring-brand-300/40"
				>
					<X className="size-4" />
				</DialogClose>

				{hasVideo ? (
					<div className="hero-device-frame overflow-hidden rounded-3xl">
						{/* Marketing-facing header — same shape as FeatureBanner's video preview */}
						<div className="flex items-center gap-3 border-b border-border-secondary bg-white px-4 py-3 sm:px-5">
							<div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-300/10 text-brand-300">
								<Play
									className="size-3.5 translate-x-px fill-current"
									aria-hidden
								/>
							</div>
							<span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-tertiary">
								Quick Tour
								<span className="mx-1.5 text-border-secondary">·</span>
								<span className="text-dark-15">{tag}</span>
							</span>
							<span className="ml-auto hidden items-center gap-1.5 sm:flex">
								<span className="relative flex h-1.5 w-1.5">
									<span className="absolute inset-0 rounded-full bg-brand-300 animate-hero-ping-soft" />
									<span className="relative h-1.5 w-1.5 rounded-full bg-brand-300" />
								</span>
								<span className="text-[11px] font-medium text-text-tertiary">
									Live
								</span>
							</span>
							<span className="hidden h-4 w-px bg-border-secondary sm:block" />
							<span className="hidden rounded-md bg-bg-tertiary px-2 py-0.5 text-[10px] font-bold tracking-[0.08em] text-text-tertiary sm:inline">
								HD
							</span>
						</div>

						{/* Video edge-to-edge */}
						<Card className="overflow-hidden rounded-none border-0 bg-white p-0 shadow-none">
							<CardContent className="relative aspect-video flex min-h-0 flex-1 p-0">
								<VideoCard
									src={videoSrc}
									alt={videoLabel}
									label={videoLabel}
									className="bg-transparent"
								/>
							</CardContent>
						</Card>
					</div>
				) : (
					<div className="flex aspect-video w-full items-center justify-center rounded-2xl bg-muted text-muted-foreground text-sm">
						No video URL provided.
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}
