import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui-custom/typography';
import { getSiteOrigin } from '@/env';

export const Route = createFileRoute('/_auth/password-created')({
	head: () => ({
		meta: [
			{ title: 'Password Created | Edushade' },
			{
				name: 'description',
				content: 'Your Edushade password was set successfully.',
			},
		],
		links: [{ rel: 'canonical', href: `${getSiteOrigin()}/password-created` }],
	}),
	component: PasswordCreatedPage,
});

function PasswordCreatedPage() {
	return (
		<div className="flex flex-col items-center gap-8 text-center">
			<div className="relative flex size-24 items-center justify-center">
				<div
					className="absolute size-22 rounded-full bg-emerald-500/15"
					aria-hidden
				/>
				<div className="relative flex size-16 items-center justify-center rounded-full bg-emerald-500">
					<Check className="size-9 text-white" strokeWidth={2.5} aria-hidden />
				</div>
			</div>

			<div className="flex max-w-md flex-col gap-2">
				<Typography variant="h5" className="font-semibold text-text-primary">
					Password Created Successfully
				</Typography>
				<Typography variant="small" className="font-normal text-text-secondary">
					Your password has been set. You can now use it to log in to your
					account.
				</Typography>
			</div>

			<Button
				type="button"
				variant="outline"
				className="border-border-secondary text-text-primary h-11 rounded-xl px-6"
				asChild
			>
				<Link to="/dashboard/profile">
					<ArrowLeft className="mr-2 size-4" aria-hidden />
					Return to Account
				</Link>
			</Button>
		</div>
	);
}
