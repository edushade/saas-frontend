import { createFileRoute } from "@tanstack/react-router";
import { ContactSalesSection } from "@/components/contact-sales";
import { CtaSection, FAQSection, LogosSection } from "@/components/shared";

export const Route = createFileRoute("/_main/contact-sales")({
	component: ContactSalesPage,
});

function ContactSalesPage() {
	return (
		<main className="pt-(--es-section-pt)">
			<ContactSalesSection />
			<LogosSection />
			<FAQSection />
			<CtaSection />
		</main>
	);
}
