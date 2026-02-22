import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const STATS = [
	{ value: "10k+", label: "Learners supported" },
	{ value: "60%",  label: "Reduction in operational effort" },
	{ value: "0%",   label: "Setup complexity" },
	{ value: "250+", label: "Platforms built with Edushade" },
] as const;

export default function GetStartedSection() {
	return (
		<section className="bg-white py-16">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				{/* Card — divide-x creates the vertical line between the two columns */}
				<div className="rounded-3xl border border-(--es-border-1) overflow-hidden bg-white">
					<div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-(--es-border-1)">
						{/* ── Left: CTA ── */}
						<div className="relative p-10 lg:p-14">
							{/* Soft blue glow — bottom-left radial */}
							<div
								className="absolute inset-0 pointer-events-none"
								style={{
									background:
										"radial-gradient(ellipse 80% 70% at 0% 100%, rgba(219,234,254,0.75) 0%, transparent 65%)",
								}}
								aria-hidden="true"
							/>

							<div className="relative z-10 flex flex-col items-start gap-6">
								<div className="flex flex-col gap-3">
									<h2 className="text-3xl lg:text-4xl font-bold leading-tight text-(--es-text-1)">
										Get Started Today
									</h2>
									<p className="text-(--es-text-2) text-sm leading-relaxed max-w-sm">
										Create your Edushade account and start building learning
										programs with clarity, structure, and control from day one.
									</p>
								</div>
								<Button className="bg-(--es-brand) hover:bg-(--es-brand-hover) text-white rounded-lg px-6 h-10 text-sm font-medium shadow-none">
									Get started
								</Button>
							</div>
						</div>

						{/* ── Right: stats 2×2 grid ── */}
						<div className="p-10 lg:p-14">
							{/* Horizontal divider on mobile only */}
							<Separator className="mb-10 lg:hidden" />

							<div className="grid grid-cols-2 gap-x-8 gap-y-10">
								{STATS.map(({ value, label }) => (
									<div key={label}>
										<p className="text-4xl font-bold text-(--es-text-1) leading-none mb-2">
											{value}
										</p>
										<p className="text-sm text-(--es-text-2) leading-snug">
											{label}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
