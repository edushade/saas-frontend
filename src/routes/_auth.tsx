import { createFileRoute, Outlet } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

export const Route = createFileRoute('/_auth')({
	component: AuthLayout,
});

function AuthLayout() {
	return (
		<div
			className={cn(
				'min-h-screen w-full bg-onboarding bg-onboarding-stripes flex items-center justify-center p-4 md:p-6',
			)}
		>
			<div className="w-full max-w-[420px] rounded-2xl bg-white shadow-onboarding-card p-8 md:p-10">
				<Outlet />
			</div>
		</div>
	);
}
