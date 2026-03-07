import {
	createFileRoute,
	Link,
	Outlet,
	useLocation,
} from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { CardShadeOverlay } from '@/components/ui-custom/card-shade-overlay';
import { cn } from '@/lib/utils';

export const Route = createFileRoute('/_auth')({
	component: AuthLayout,
});

function AuthLayout() {
	const location = useLocation();

	const showAuthDesign =
		location.pathname === '/login' || location.pathname === '/register';
	return (
		<div className="min-h-screen bg-white space-y-10 overflow-hidden flex flex-col px-6 md:px-8 xl:px-(--es-section-px) py-4">
			<header className="relative  z-10 flex justify-center">
				<Link
					to="/"
					aria-label="Go to Edushade home"
					className="h-full max-h-11 w-full max-w-40"
				>
					<img
						src="/svgs/logo.svg"
						alt="Edushade"
						className="h-full object-contain w-full"
					/>
				</Link>
			</header>

			<main className="relative z-10 flex-1 flex items-center overflow-hidden justify-center rounded-4xl">
				{/* ── Background vectors ── */}
				{showAuthDesign && (
					<>
						<img
							src="/auth-bg-ectors.svg"
							alt=""
							aria-hidden="true"
							className="pointer-events-none select-none absolute left-0 bottom-0   rounded-4xl"
						/>
						<img
							src="/auth-bg-ectors.svg"
							alt=""
							aria-hidden="true"
							className="pointer-events-none select-none absolute right-0 bottom-0  scale-x-[-1] rounded-4xl"
						/>

						<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />
					</>
				)}

				<Card
					className={cn(
						'w-full relative z-10 max-w-[480px]  bg-white ',
						showAuthDesign
							? '  shadow-card-fancy rounded-2xl border'
							: 'border-none shadow-none',
					)}
				>
					<CardContent>
						<Outlet />
					</CardContent>
				</Card>
			</main>

			<footer className="relative z-10 text-center">
				<p className="text-xs font-normal text-text-secondary">
					By signing in, you agree to our{' '}
					<a
						href="/privacy-policy"
						className="underline text-primary hover:text-brand-200 transition-colors"
					>
						Privacy Policy
					</a>{' '}
					and{' '}
					<a
						href="/terms-of-service"
						className="underline text-primary hover:text-brand-200 transition-colors"
					>
						Terms of Use
					</a>
				</p>
			</footer>
		</div>
	);
}
