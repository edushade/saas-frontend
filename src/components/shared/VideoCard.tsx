import { useRef, useState } from 'react';
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

	function handlePlay() {
		videoRef.current?.play();
	}

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
				src={src}
				className="h-full w-full object-cover"
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
