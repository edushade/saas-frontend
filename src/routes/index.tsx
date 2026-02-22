import { createFileRoute } from "@tanstack/react-router";
import BuiltForTeachSection from "../components/landing/BuiltForTeachSection";
import CtaSection from "../components/landing/CtaSection";
import EducatorsSaySection from "../components/landing/EducatorsSaySection";
import EverythingYouNeedSection from "../components/landing/EverythingYouNeedSection";
import FAQSection from "../components/landing/FAQSection";
import GetStartedSection from "../components/landing/GetStartedSection";
import HeroSection from "../components/landing/HeroSection";
import LogosSection from "../components/landing/LogosSection";
import PersonalizedSection from "../components/landing/PersonalizedSection";
import ResourceCenterSection from "../components/landing/ResourceCenterSection";
import StartIn60SecondsSection from "../components/landing/StartIn60SecondsSection";
import WhyEducatorsLoveSection from "../components/landing/WhyEducatorsLoveSection";

export const Route = createFileRoute("/")({ component: LandingPage });

function LandingPage() {
	return (
		<main>
			<HeroSection />
			<LogosSection />
			<BuiltForTeachSection />
			<EverythingYouNeedSection />
			<PersonalizedSection />
			<WhyEducatorsLoveSection />
			<StartIn60SecondsSection />
			<EducatorsSaySection />
			<GetStartedSection />
			<ResourceCenterSection />
			<FAQSection />
			<CtaSection />
		</main>
	);
}
