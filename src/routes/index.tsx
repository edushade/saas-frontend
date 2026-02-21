import { createFileRoute } from '@tanstack/react-router';
import HeroSection from '../components/landing/HeroSection';

export const Route = createFileRoute('/')({ component: LandingPage });

function LandingPage() {
	return (
		<main>
			<HeroSection />
		</main>
	);
}
