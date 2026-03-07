import { createFileRoute } from '@tanstack/react-router';
import { FeaturesBanner } from '@/components/features/FeaturesBanner';
import { FeaturesListSections } from '@/components/features/FeaturesListSections';
import { CtaSection } from '@/components/shared';
import { getSiteOrigin } from '@/env';

export const Route = createFileRoute('/_public/features/')({
	head: () => ({
		meta: [
			{ title: 'All Features | Edushade' },
			{
				name: 'description',
				content:
					'Explore all Edushade features — courses, live classes, assessments, analytics, and more designed to power your educational platform.',
			},
		],
		links: [{ rel: 'canonical', href: `${getSiteOrigin()}/features` }],
	}),
	component: FeaturesPage,
});

function FeaturesPage() {
	return (
		<main className="bg-bg-primary pt-(--es-section-pt)">
			<FeaturesBanner />
			<FeaturesListSections />
			<CtaSection />
		</main>
	)
}
