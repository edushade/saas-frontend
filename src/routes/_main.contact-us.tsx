import { createFileRoute } from '@tanstack/react-router';
import { BannerContactUs, GetInTouch } from '@/components/contact-us';

export const Route = createFileRoute('/_main/contact-us')({
	component: ContactUsPage,
});

function ContactUsPage() {
	return (
		<main className="pt-(--es-section-pt)">
			<BannerContactUs />
			<GetInTouch />
		</main>
	);
}
