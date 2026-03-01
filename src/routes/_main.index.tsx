import { createFileRoute } from "@tanstack/react-router";
import BuiltForTeachSection from "../components/landing/BuiltForTeachSection";
import EducatorsSaySection from "../components/landing/EducatorsSaySection";
import EverythingYouNeedSection from "../components/landing/EverythingYouNeedSection";
import HeroSection from "../components/landing/HeroSection";
import PersonalizedSection from "../components/landing/PersonalizedSection";
import RecentBlogSection from "../components/landing/RecentBlogSection";
import StartIn60SecondsSection from "../components/landing/StartIn60SecondsSection";
import WhyEducatorsLoveSection from "../components/landing/WhyEducatorsLoveSection";
import {
	CtaSection,
	FAQSection,
	GetStartedSection,
	LogosSection,
} from "../components/shared";
import { getSiteOrigin } from "../env";

const ORGANIZATION_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "Edushade",
	applicationCategory: "EducationalApplication",
	operatingSystem: "Web",
	description:
		"Edushade helps educators design, launch, and grow their online courses — starting from intent, not setup.",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
	url: "https://edushade.com",
};

export const Route = createFileRoute("/_main/")({
	head: () => {
		const origin = getSiteOrigin();
		return {
			meta: [
				{
					title: "Edushade — The Platform Built for How You Actually Teach",
				},
				{
					name: "description",
					content:
						"Edushade helps educators design, launch, and grow their online courses — starting from intent, not setup. Join 250+ platforms already growing with Edushade.",
				},
				{
					property: "og:title",
					content: "Edushade — The Platform Built for How You Actually Teach",
				},
				{
					property: "og:description",
					content:
						"Design, launch, and grow your online courses — starting from intent, not setup.",
				},
				{
					property: "og:url",
					content: origin,
				},
				{
					property: "og:image",
					content: `${origin}/og-image.png`,
				},
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{
					name: "twitter:image",
					content: `${origin}/og-image.png`,
				},
			],
			links: [{ rel: "canonical", href: origin }],
			scripts: [
				{
					type: "application/ld+json",
					children: JSON.stringify({ ...ORGANIZATION_SCHEMA, url: origin }),
				},
			],
		};
	},
	component: LandingPage,
});

function LandingPage() {
	return (
		<main className="pt-8 pb-8">
			<HeroSection />
			<LogosSection />
			<BuiltForTeachSection />
			<EverythingYouNeedSection />
			<PersonalizedSection />
			<WhyEducatorsLoveSection />
			<StartIn60SecondsSection />
			<EducatorsSaySection />
			<GetStartedSection />
			<RecentBlogSection />
			<FAQSection />
			<CtaSection />
		</main>
	);
}
