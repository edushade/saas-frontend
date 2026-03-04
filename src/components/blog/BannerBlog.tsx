import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui-custom/typography';
import { BannerTag } from '../ui-custom/BannerTag';
import { CardShadeOverlay } from '../ui-custom/card-shade-overlay';

const PRIVACY_POLICY_HREF = '/privacy-policy';

export default function BannerBlog() {
	const [email, setEmail] = useState('');

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (email.trim()) {
			setEmail('');
		}
	}

	return (
		<section className="relative overflow-hidden px-4 md:px-8 xl:px-(--es-section-px) py-(--es-section-py) bg-bg-primary">
			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 z-0 h-full w-full rounded-full bg-grad-lightblue"
			/>
			<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />

			<div className="relative mx-auto max-w-(--es-max-w)">
				<div className="flex flex-col items-center text-center">
					<BannerTag tag="Our Blogs" />

					<Typography
						variant="h1"
						className="mt-4 text-3xl font-medium leading-tight text-text-primary md:text-4xl lg:text-5xl"
					>
						The Latest Writings from Our Team
					</Typography>

					<Typography
						variant="h6"
						className="mt-4 max-w-xl font-normal leading-relaxed text-text-secondary"
					>
						Subscribe to learn about new product features, the latest in
						technology, solutions, and updates.
					</Typography>

					<form
						onSubmit={handleSubmit}
						className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center"
					>
						<Input
							type="email"
							placeholder="Enter your email..."
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="h-11 flex-1 rounded-lg border-border bg-white text-text-primary placeholder:text-text-tertiary focus-visible:ring-brand-200"
							aria-label="Email for newsletter"
						/>
						<Button
							type="submit"
							className="h-11 shrink-0 rounded-lg bg-brand-200 px-6 font-semibold text-white shadow-sm hover:bg-brand-200/90 focus-visible:ring-brand-200"
						>
							Get Started
						</Button>
					</form>

					<Typography variant="small" className="mt-4 text-text-tertiary">
						We care about your data in our{' '}
						<a
							href={PRIVACY_POLICY_HREF}
							className="font-medium text-brand-200 underline-offset-2 hover:underline"
						>
							privacy policy
						</a>
						.
					</Typography>
				</div>
			</div>
		</section>
	);
}
