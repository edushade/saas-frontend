import { cn } from '@/lib/utils';

const iconWrap =
	'flex size-10 shrink-0 items-center justify-center rounded-lg border border-border-secondary bg-bg-primary';

export function GoogleOAuthIcon({ className }: { className?: string }) {
	return (
		<div className={cn(iconWrap, className)} aria-hidden>
			<svg className="size-6" viewBox="0 0 24 24" aria-hidden>
				<path
					fill="#EA4335"
					d="M12 10.2v3.9h5.5c-.25 1.6-1.9 4.7-5.5 4.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.4 14.7 2.5 12 2.5 6.8 2.5 2.5 6.8 2.5 12s4.3 9.5 9.5 9.5c5.5 0 9.1-3.9 9.1-9.3 0-.6-.1-1.1-.2-1.6H12z"
				/>
				<path
					fill="#34A853"
					d="M3.5 7.3l3.1 2.3C7.3 7.5 9.4 5.8 12 5.8c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.4 14.7 2.5 12 2.5 8.1 2.5 5 4.6 3.5 7.3z"
				/>
				<path
					fill="#4A90E2"
					d="M12 21.5c2.6 0 4.8-.9 6.4-2.4l-3-2.3c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1l-3.1 2.4c1.5 3.1 4.7 5.4 8.7 5.4z"
				/>
				<path
					fill="#FBBC05"
					d="M21.5 12.2c0-.8-.1-1.6-.3-2.3H12v4.5h5.4c-.2 1.3-1 2.9-2.4 3.8l3 2.3c1.7-1.6 2.8-4 2.8-6.3z"
				/>
			</svg>
		</div>
	);
}

export function FacebookOAuthIcon({ className }: { className?: string }) {
	return (
		<div className={cn(iconWrap, className)} aria-hidden>
			<svg className="size-6" viewBox="0 0 24 24" aria-hidden>
				<path
					fill="#1877F2"
					d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93z"
				/>
			</svg>
		</div>
	);
}
