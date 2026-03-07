import { GithubIcon, GoogleIcon } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface SocialAuthButtonsProps {
	onGoogle?: () => void;
	onGithub?: () => void;
}

export function SocialAuthButtons({
	onGoogle,
	onGithub,
}: SocialAuthButtonsProps) {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-3">
				<Separator className="flex-1" />
				<span className="text-sm font-normal text-text-tertiary whitespace-nowrap">
					or continue with
				</span>
				<Separator className="flex-1" />
			</div>

			<div className="grid grid-cols-2 gap-3">
				<Button
					type="button"
					variant="outline"
					className="h-11 rounded-xl border-border-secondary text-sm font-medium text-text-primary gap-2"
					onClick={onGoogle}
				>
					<GoogleIcon />
					Google
				</Button>
				<Button
					type="button"
					variant="outline"
					className="h-11 rounded-xl border-border-secondary text-sm font-medium text-text-primary gap-2"
					onClick={onGithub}
				>
					<GithubIcon className="size-5" />
					Github
				</Button>
			</div>
		</div>
	);
}
