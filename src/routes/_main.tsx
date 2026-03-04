import { createFileRoute, Outlet } from '@tanstack/react-router';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export const Route = createFileRoute('/_main')({
	component: MainLayout,
});

function MainLayout() {
	return (
		<>
			<Header />
			<div className="flex flex-1 flex-col">
				<Outlet />
			</div>
			<Footer />
		</>
	);
}
