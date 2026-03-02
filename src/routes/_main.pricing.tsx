import { createFileRoute } from "@tanstack/react-router";
import ComparePricingSection from "@/components/pricing/ComparePricingSection";
import PricingSection from "@/components/pricing/PricingSection";
import { CtaSection, FAQSection, LogosSection } from "@/components/shared";
import { getSiteOrigin } from "@/env";

export const Route = createFileRoute("/_main/pricing")({
	head: () => ({
		meta: [
			{ title: "Pricing — Edushade" },
			{
				name: "description",
				content:
					"Flexible pricing for educators. Start with Starter, scale with Growth, or go Advanced for institutional needs.",
			},
		],
		links: [{ rel: "canonical", href: `${getSiteOrigin()}/pricing` }],
	}),
	component: PricingPage,
});

function PricingPage() {
	return (
		<main className="pt-(--es-section-pt)">
			<PricingSection />
			<LogosSection />
			<ComparePricingSection />
			<FAQSection />
			<CtaSection />
		</main>
	);
}
