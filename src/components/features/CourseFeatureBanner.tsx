import { getFeatureBannerContentBySlug } from '@/constants/feature-details';
import { FeatureBanner } from './FeatureBanner';

const COURSES_SLUG = 'courses';

export function CourseFeatureBanner() {
	const content = getFeatureBannerContentBySlug(COURSES_SLUG);
	if (!content) return null;
	const { slug: _slug, ...banner } = content;
	return <FeatureBanner {...banner} />;
}
