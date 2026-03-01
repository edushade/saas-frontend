import { createFileRoute } from "@tanstack/react-router";
import { ContactSalesSection } from "@/components/contact-sales";
import { CtaSection, FAQSection, LogosSection } from "@/components/shared";

export const Route = createFileRoute("/_main/contact-sales")({
	component: ContactSalesPage,
});

function ContactSalesPage() {
	return (
		<main className="pt-8">
			<ContactSalesSection />
			<LogosSection />
			<FAQSection />
			<CtaSection />
		</main>
	);
}
