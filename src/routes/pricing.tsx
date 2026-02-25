import { createFileRoute } from "@tanstack/react-router";
import CtaSection from "@/components/landing/CtaSection";
import FAQSection from "@/components/landing/FAQSection";
import LogosSection from "@/components/landing/LogosSection";
import PricingSection from "@/components/pricing/PricingSection";

export const Route = createFileRoute("/pricing")({
	head: () => ({
		meta: [
			{ title: "Pricing — Edushade" },
			{
				name: "description",
				content:
					"Flexible pricing for educators. Start with Starter, scale with Growth, or go Advanced for institutional needs.",
			},
		],
		links: [{ rel: "canonical", href: "https://edushade.com/pricing" }],
	}),
	component: PricingPage,
});

function PricingPage() {
	return (
		<main>
			<PricingSection />
			<LogosSection />\
			<FAQSection />
			<CtaSection />
		</main>
	);
}
