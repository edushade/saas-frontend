import { createFileRoute } from "@tanstack/react-router";
import CtaSection from "@/components/landing/CtaSection";
import FAQSection from "@/components/landing/FAQSection";
import GetStartedSection from "@/components/landing/GetStartedSection";
import { RequestDemoSection } from "@/components/request-demo";

export const Route = createFileRoute("/request-demo")({
	component: RequestDemoPage,
});

function RequestDemoPage() {
	return (
		<main className="pt-8">
			<RequestDemoSection />
			<GetStartedSection />
			<FAQSection />
			<CtaSection />
		</main>
	);
}
