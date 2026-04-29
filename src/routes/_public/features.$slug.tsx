import { MDXContent } from '@content-collections/mdx/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
	FeatureBanner,
	FeatureCapabilityHighlightsSection,
	FeatureQuickStartSection,
} from '@/components/features';
import FeatureSplitSection from '@/components/features/FeatureSplitSection';
import { CtaSection, FAQSection } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { BannerTag } from '@/components/ui-custom/BannerTag';
import { Typography } from '@/components/ui-custom/typography';
import { getFeatureDetailBySlug } from '@/constants/feature-details';

export const Route = createFileRoute('/_public/features/$slug')({
	component: FeaturePage,
	head: ({ params }) => {
		const detail = getFeatureDetailBySlug(params?.slug ?? '');
		const title = detail
			? `${detail.banner.tag} | Edushade`
			: 'Feature | Edushade';
		const description =
			detail?.banner.description ?? 'Explore Edushade features.';
		return {
			meta: [{ title }, { name: 'description', content: description }],
		};
	},
});

function FeaturePage() {
	const { slug } = Route.useParams();
	const detail = getFeatureDetailBySlug(slug);

	if (!detail) {
		return (
			<main className="bg-bg-primary pt-(--es-nav-h)">
				<div className="mx-auto max-w-(--es-max-w) px-4 py-16 text-center">
					<h1 className="text-xl font-semibold text-text-primary">
						Feature not found
					</h1>
					<p className="mt-2 text-text-secondary">
						No feature found for &quot;{slug}&quot;.
					</p>
					<Link
						to="/features/$slug"
						params={{ slug: 'courses' }}
						className="mt-4 inline-block font-medium text-brand-300 hover:underline"
					>
						View Courses
					</Link>
				</div>
			</main>
		);
	}

	if (detail.comingSoon) {
		return (
			<main className="min-h-screen bg-bg-primary pt-(--es-section-pt)">
				<section className="relative bg-bg-primary overflow-hidden px-4 md:px-8 xl:px-(--es-section-px) py-(--es-section-py)">
					<div
						aria-hidden
						className="pointer-events-none absolute bottom-0 z-0 h-full w-full rounded-full bg-grad-lightblue"
					/>
					<div className="relative mx-auto flex max-w-(--es-max-w) flex-col items-center gap-6 text-center py-16">
						<BannerTag tag="Coming Soon" />
						<Typography
							variant="h1"
							className="text-3xl max-w-[742px] mx-auto font-medium leading-tight text-text-primary md:text-4xl lg:text-6xl"
						>
							{detail.title}
						</Typography>
						<Typography
							variant="base"
							className="max-w-2xl font-normal leading-relaxed text-text-secondary"
						>
							This documentation is not yet available. Get in touch
							and we will let you know the moment it ships.
						</Typography>
						<Button
							asChild
							className="btn-brand-1 rounded-full py-5 text-lg font-medium shadow-sm"
						>
							<Link to="/contact-sales">Get Notified</Link>
						</Button>
					</div>
				</section>
				<CtaSection />
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-bg-primary pt-(--es-section-pt)">
			<FeatureBanner {...detail.banner} />
			{detail?.capabilityHighlights != null && (
				<FeatureCapabilityHighlightsSection {...detail.capabilityHighlights} />
			)}
			{detail?.splitSections?.map((section) => (
				<FeatureSplitSection key={section.title} {...section} />
			))}
			{detail?.quickStart != null && (
				<FeatureQuickStartSection {...detail.quickStart} />
			)}
			{detail?.mdx && detail?.content?.trim() ? (
				<section className="bg-bg-primary px-4 py-(--es-section-py) md:px-8 xl:px-(--es-section-px)">
					<div className="mx-auto max-w-(--es-max-w)">
						<div
							className="prose prose-neutral dark:prose-invert max-w-none
							[&_a]:text-brand-200 [&_a]:underline
							[&_p]:my-3 [&_p]:text-text-secondary"
						>
							<MDXContent code={detail.mdx} />
						</div>
					</div>
				</section>
			) : null}
			<FAQSection
				title={detail?.faq?.title}
				description={detail?.faq?.description}
				items={detail?.faq?.items}
			/>
			<CtaSection />
		</main>
	);
}
