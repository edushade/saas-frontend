import { createFileRoute } from "@tanstack/react-router";
import ComparePricingSection from "@/components/pricing/ComparePricingSection";
import PricingSection from "@/components/pricing/PricingSection";
import { CtaSection, FAQSection, LogosSection } from "@/components/shared";

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
		<main className="pt-8">
			<PricingSection />
			<LogosSection />
			<ComparePricingSection />
			<FAQSection />
			<CtaSection />
		</main>
	);
}
