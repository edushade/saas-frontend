import { createFileRoute } from "@tanstack/react-router";
import { RequestDemoSection } from "@/components/request-demo";
import { CtaSection, FAQSection, GetStartedSection } from "@/components/shared";

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
