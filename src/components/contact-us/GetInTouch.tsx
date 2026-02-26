import { Mail, Phone } from "lucide-react";
import type { ContactFormValue } from "@/components/contact-sales";
import { ContactSalesForm } from "@/components/contact-sales";
import { Typography } from "@/components/ui-custom/typography";
import {
	CONTACT_ADDRESS,
	CONTACT_EMAIL,
	CONTACT_FORM_NOTE,
	CONTACT_FORM_SECTION_ID,
	CONTACT_PHONE,
} from "@/constants/contact-us";
import { Badge } from "../ui/badge";

function handleContactSubmit(value: ContactFormValue) {
	console.log("Contact us submit", value);
	alert("Message sent! We'll get back to you within 6 hours.");
}

export default function GetInTouch() {
	return (
		<section
			id={CONTACT_FORM_SECTION_ID}
			className="bg-bg-primary px-4 py-12 md:px-(--es-section-px) md:py-(--es-section-py)"
		>
			<div className="mx-auto max-w-(--es-max-w)">
				<div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
					<div className="flex flex-col gap-6">
						<Typography variant="h1" className="font-medium text-text-primary">
							Get in Touch
						</Typography>
						<Typography
							variant="h6"
							className="font-normal leading-relaxed text-text-secondary"
						>
							Have a question or need assistance? Reach out to our team and
							we'll guide you in the right direction.
						</Typography>
						<address className="not-italic">
							<Typography
								variant="base"
								className="font-medium text-text-secondary"
							>
								{CONTACT_ADDRESS.name}
							</Typography>
							{CONTACT_ADDRESS.lines.map((line) => (
								<Typography
									key={line}
									variant="base"
									className="mt-1 font-medium text-text-secondary"
								>
									{line}
								</Typography>
							))}
						</address>
						<div className="flex flex-wrap gap-3">
							<a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>
								<Badge
									variant="secondary"
									className="inline-flex items-center gap-2 rounded-xl border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-text-primary hover:bg-bg-quaternary"
								>
									<Phone className="size-4" />
									{CONTACT_PHONE}
								</Badge>
							</a>
							<a href={`mailto:${CONTACT_EMAIL}`}>
								<Badge className="inline-flex items-center gap-2 rounded-xl border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-text-primary hover:bg-bg-quaternary">
									<Mail className="size-4" />
									{CONTACT_EMAIL}
								</Badge>
							</a>
						</div>
					</div>

					<ContactSalesForm
						title="Please fill out the form"
						note={CONTACT_FORM_NOTE}
						submitLabel="Send Message"
						onSubmit={handleContactSubmit}
					/>
				</div>
			</div>
		</section>
	);
}
