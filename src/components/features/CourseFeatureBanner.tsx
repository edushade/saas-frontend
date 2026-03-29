import { getFeatureBySlug } from '@/constants/features';
import { FeatureBanner } from './FeatureBanner';

const COURSES_SLUG = 'courses';

export function CourseFeatureBanner() {
	const content = getFeatureBySlug(COURSES_SLUG);
	if (!content) return null;
	const { slug: _slug, ...banner } = content;
	return <FeatureBanner {...banner} />;
}
