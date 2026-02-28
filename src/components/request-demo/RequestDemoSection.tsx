import type { ContactFormValue } from "@/components/contact-sales";
import { ContactSalesForm } from "@/components/contact-sales";
import { Typography } from "@/components/ui-custom/typography";
import { BannerTag } from "../ui-custom/BannerTag";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";

function handleDemoRequest(value: ContactFormValue) {
	console.log("Request demo submit", value);
	alert("Demo request received! We'll be in touch soon.");
}

export default function RequestDemoSection() {
	return (
		<section className="relative px-4 py-12 md:px-(--es-section-px) md:py-(--es-section-py) bg-bg-primary">
			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 z-0 h-full w-full rounded-full bg-grad-lightblue"
			/>
			<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />

			<div className="relative mx-auto grid max-w-(--es-max-w)">
				<div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
					<div className="flex flex-col justify-center">
						<div className="flex flex-col gap-6">
							<BannerTag tag="Request Demo" />
							<Typography
								variant="h1"
								className="text-3xl font-medium leading-tight text-text-primary md:text-4xl lg:text-5xl xl:text-[60px]"
							>
								Let Us Show You the Future of Education Platforms
							</Typography>
							<Typography
								variant="h6"
								className="font-normal leading-relaxed text-text-secondary"
							>
								See how Edushade helps educators and institutions build, manage,
								and scale learning platforms with clarity and control.
							</Typography>
						</div>
					</div>

					<ContactSalesForm
						title="Please fill out the form"
						submitLabel="Request Demo"
						onSubmit={handleDemoRequest}
					/>
				</div>
			</div>
		</section>
	);
}
