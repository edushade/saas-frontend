import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { DialogIcon, HeadphoneIcon, VideoIcon } from "@/assets/icons";
import { Typography } from "@/components/ui-custom/typography";
import {
	CONTACT_FORM_SECTION_ID,
	CONTACT_US_CARDS,
} from "@/lib/contact-us/contact-us";
import { Card, CardContent } from "../ui/card";
import { BannerTag } from "../ui-custom/BannerTag";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";

function ContactCardIcon({
	iconId,
}: {
	iconId: (typeof CONTACT_US_CARDS)[number]["iconId"];
}) {
	switch (iconId) {
		case "general":
			return <DialogIcon className="size-11 text-text-primary" />;
		case "support":
			return <HeadphoneIcon className="size-11 text-text-primary" />;
		case "schedule":
			return <VideoIcon className="size-11 text-text-primary" />;
		default:
			return null;
	}
}

export default function BannerContactUs() {
	return (
		<section className="relative overflow-hidden px-4 md:px-8 xl:px-(--es-section-px) py-(--es-section-py) bg-bg-primary">
			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 z-0 h-full w-full rounded-full bg-grad-lightblue"
			/>
			<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />

			<div className="relative mx-auto max-w-(--es-max-w) space-y-10">
				<div className="flex flex-col items-center text-center">
					<BannerTag tag="Contact Us" />

					<Typography
						variant="h1"
						className="mt-4 text-3xl font-semibold leading-tight text-text-primary md:text-4xl lg:text-[56px]"
					>
						Let's Start the Conversation
					</Typography>
					<Typography
						variant="h6"
						className="mt-4 max-w-xl font-normal leading-relaxed text-text-secondary"
					>
						Have a question, idea, or need support? Reach out to our team and
						we'll get back to you shortly.
					</Typography>
					<a
						href={`/contact-us#${CONTACT_FORM_SECTION_ID}`}
						className="btn-brand-1 mt-6 inline-flex rounded-full px-4 py-2 text-base font-medium text-text-on-brand"
					>
						Start the Conversation
					</a>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{CONTACT_US_CARDS.map((card) => {
						const cardContent = (
							<Card
								key={card.title}
								className="	
							flex flex-col rounded-2xl border border-border-primary bg-[#FFFFFF99] shadow-lg transition-shadow hover:shadow-md"
							>
								<CardContent className="flex flex-col items-start">
									<div className="mb-4 flex justify-center">
										<ContactCardIcon iconId={card.iconId} />
									</div>
									<Typography
										variant="h6"
										className="font-semibold text-text-primary"
									>
										{card.title}
									</Typography>
									<Typography
										variant="small"
										className="mt-2 flex-1 font-normal text-text-secondary"
									>
										{card.description}
									</Typography>
									<Typography
										variant="base"
										className="mt-4 inline-flex items-center font-medium gap-1 text-text-primary"
									>
										{card.label}
										<ArrowUpRight className="size-5" />
									</Typography>
								</CardContent>
							</Card>
						);

						return card.href.startsWith("/") ? (
							<Link key={card.title} to={card.href as "/contact-sales"}>
								{cardContent}
							</Link>
						) : (
							<a key={card.title} href={card.href}>
								{cardContent}
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
}
