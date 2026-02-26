import { Typography } from "@/components/ui-custom/typography";
import { CONTACT_SALES_HELP_TAGS } from "@/constants/contact-sales";
import { Badge } from "../ui/badge";
import { BannerTag } from "../ui-custom/BannerTag";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";
import { ContactSalesForm } from "./ContactSalesForm";

export default function ContactSalesSection() {
	return (
		<section className="relative px-4 py-12 md:px-(--es-section-px) md:py-(--es-section-py)">
			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 z-0 h-full w-full rounded-full 
  bg-[linear-gradient(180deg,#FFFFFF_-6.1%,#FFFFFF_20.43%,#B3E9FF_100%)]"
			/>
			<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />
			<div className="relative mx-auto grid max-w-(--es-max-w)">
				<div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
					<div className="flex flex-col justify-between">
						<div className="flex flex-col gap-6">
							<BannerTag tag="Contact Sales" />
							<Typography
								variant="h1"
								className="text-[60px] font-medium leading-tight text-text-primary"
							>
								Talk to Our Sales Team
							</Typography>
							<Typography
								variant="h6"
								className="font-normal leading-relaxed text-text-secondary"
							>
								Connect with our team to discuss pricing, custom requirements,
								integrations, and institutional deployment.
							</Typography>
						</div>

						<div>
							<Typography
								variant="h6"
								className="mb-3 font-medium text-text-secondary"
							>
								What we can help with:
							</Typography>
							<div className="flex flex-wrap gap-2">
								{CONTACT_SALES_HELP_TAGS.map((tag) => (
									<Badge
										key={tag}
										className="rounded-full border font-normal border-border-secondary bg-bg-primary px-4 py-1.5 text-base text-text-secondary"
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
