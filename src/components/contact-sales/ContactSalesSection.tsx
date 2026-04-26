import { Typography } from '@/components/ui-custom/typography';
import { CONTACT_SALES_HELP_TAGS } from '@/lib/contact-sales/constants';
import { Badge } from '../ui/badge';
import { BannerTag } from '../ui-custom/BannerTag';
import { CardShadeOverlay } from '../ui-custom/card-shade-overlay';
import { ContactSalesForm } from './ContactSalesForm';

export default function ContactSalesSection() {
	return (
		<section className="relative overflow-hidden px-4 md:px-8 xl:px-(--es-section-px) py-(--es-section-py)">
			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 z-0 h-full w-full max-w-full bg-grad-lightblue"
			/>
			<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />

			<div className="relative mx-auto grid max-w-(--es-max-w)">
				<div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
					<div className="flex flex-col justify-between gap-4 md:gap-4">
						<div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
							<BannerTag tag="Contact Sales" />
							<Typography
								variant="h1"
								className="text-3xl md:text-[60px] font-medium leading-tight text-text-primary"
							>
								Talk to Our Sales Team
							</Typography>
							<Typography
								variant="h6"
								className="font-normal leading-relaxed text-center md:text-left  text-text-secondary"
							>
								Connect with our team to discuss pricing, custom requirements,
								integrations, and institutional deployment.
							</Typography>
						</div>

						<div className="flex flex-col items-center md:items-start gap-2 md:gap-4">
							<Typography
								variant="h6"
								className="font-medium text-center md:text-left text-text-secondary"
							>
								What we can help with:
							</Typography>
							<div className="flex flex-wrap gap-1 md:gap-2">
								{CONTACT_SALES_HELP_TAGS.map((tag) => (
									<Badge
										key={tag}
										className="rounded-full border font-normal border-border-secondary bg-bg-primary px-4 py-1.5 text-xs md:text-base text-text-secondary"
									>
										{tag}
									</Badge>
								))}
							</div>
						</div>
					</div>

					<ContactSalesForm />
				</div>
			</div>
		</section>
	);
}
