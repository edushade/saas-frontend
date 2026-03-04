import { createFileRoute, Link } from '@tanstack/react-router';
import {
	FeatureBanner,
	StartCourseIn60SecondsSection,
	WhatCoursesLetsYouDoSection,
} from '@/components/features';
import FeatureSplitSection from '@/components/features/FeatureSplitSection';
import { CtaSection, FAQSection } from '@/components/shared';
import { getFeatureBySlug } from '@/constants/features';

export const Route = createFileRoute('/_main/features/$slug')({
	component: FeaturePage,
	head: ({ params }) => {
		const feature = getFeatureBySlug(params?.slug ?? '');
		const title = feature ? `${feature.tag} | Edushade` : 'Feature | Edushade';
		const description = feature?.description ?? 'Explore Edushade features.';
		return {
			meta: [{ title }, { name: 'description', content: description }],
		};
	},
});

const COURSES_SLUG = 'courses';

function FeaturePage() {
	const { slug } = Route.useParams();
	const feature = getFeatureBySlug(slug);

	if (!feature) {
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

	return (
		<main className="min-h-screen bg-bg-primary pt-(--es-section-pt)">
			<FeatureBanner {...feature} />
			{slug === COURSES_SLUG && <WhatCoursesLetsYouDoSection />}
			{slug === COURSES_SLUG && (
				<FeatureSplitSection
					title="Choose the course type that fits your goals"
					description="Design organized courses that guide learners step by step. Edushade gives educators full control over lessons, progression, and completion without turning course setup into a technical task."
					lists={[
						'Build structured courses with lessons, modules, and sections',
						'Support self-paced and cohort-based course formats',
						'Control learner progression with prerequisites and completion rules',
						'Deliver consistent learning experiences at any scale',
					]}
					imgSrc="/svgs/courses/course-types.svg"
					reverse={true}
				/>
			)}
			{slug === COURSES_SLUG && (
				<FeatureSplitSection
					title="Multiple Assessment Types for Better Learning"
					description="Edushade lets educators evaluate understanding through quizzes, assignments, reflections, and more, without adding friction to the course flow."
					lists={[
						'Quizzes for quick knowledge checks',
						'Assignments for deeper learning and practice',
						'Reflections and written responses',
						'Media-based submissions for flexible expression',
					]}
					imgSrc="/svgs/courses/assesments.svg"
					reverse={false}
				/>
			)}
			{slug === COURSES_SLUG && (
				<FeatureSplitSection
					title="Manage Course Instructors with Ease"
					description="Select, assign, and manage instructors across your courses. Edushade keeps roles clear so teams can focus on delivering quality learning."
					lists={[
						'Support single or multi-instructor courses',
						'Role-based access for instructors and assistants',
						'Clear ownership over course content',
						'Smooth collaboration at scale',
					]}
					imgSrc="/svgs/courses/instructor.svg"
					reverse={true}
				/>
			)}

			{slug === COURSES_SLUG && <StartCourseIn60SecondsSection />}
			<FAQSection />
			<CtaSection />
		</main>
	);
}
