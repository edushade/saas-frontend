import { useEffect, useRef, useState } from 'react';
import { VideoWatchIcon } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function VideoCard({
	src,
	alt,
	label,
	className,
}: {
	src: string;
	alt: string;
	label: string;
	className?: string;
}) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [playing, setPlaying] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);

	function handlePlay() {
		videoRef.current?.play();
	}

	// Detect fullscreen so we can swap object-cover (good for inline marketing
	// tile) → object-contain (correct letterboxing in fullscreen, especially on
	// portrait mobile screens where object-cover crops the sides off).
	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		function syncFullscreen() {
			const standardEl = document.fullscreenElement;
			const webkitEl = (
				document as Document & { webkitFullscreenElement?: Element | null }
			).webkitFullscreenElement;
			setIsFullscreen(standardEl === video || webkitEl === video);
		}

		// iOS Safari uses video-element-scoped fullscreen events instead of the
		// document fullscreenchange event.
		function handleIosBegin() {
			setIsFullscreen(true);
		}
		function handleIosEnd() {
			setIsFullscreen(false);
		}

		document.addEventListener('fullscreenchange', syncFullscreen);
		document.addEventListener('webkitfullscreenchange', syncFullscreen);
		video.addEventListener('webkitbeginfullscreen', handleIosBegin);
		video.addEventListener('webkitendfullscreen', handleIosEnd);

		return () => {
			document.removeEventListener('fullscreenchange', syncFullscreen);
			document.removeEventListener('webkitfullscreenchange', syncFullscreen);
			video.removeEventListener('webkitbeginfullscreen', handleIosBegin);
			video.removeEventListener('webkitendfullscreen', handleIosEnd);
		};
	}, []);

	return (
		<div
			className={cn(
				'relative h-full min-h-0 w-full overflow-hidden bg-bg-tertiary rounded-lg',
				className,
			)}
		>
			<video
				ref={videoRef}
				controls
				playsInline
				src={src}
				className={cn(
					'h-full w-full',
					isFullscreen ? 'object-contain bg-black' : 'object-cover',
				)}
				aria-label={alt}
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
						className="pointer-events-auto backdrop-blur-[20px] rounded-full bg-[#0000001F] hover:bg-[#00000033] text-white gap-2 h-auto px-0.5 py-2"
					>
						<VideoWatchIcon className="size-7 text-text-on-brand shrink-0" />
						<span className="text-xl font-normal text-text-on-brand">
							{label}
						</span>
					</Button>
				</div>
			)}
		</div>
	);
}
