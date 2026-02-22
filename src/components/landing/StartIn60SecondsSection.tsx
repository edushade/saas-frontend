import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const BENEFITS = [
	"No coding or integrations required",
	"Ready-to-use structure from day one",
	"Customize as you grow",
];

export default function StartIn60SecondsSection() {
	return (
		<section className="bg-white py-16">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left: copy + CTA */}
					<div className="flex flex-col gap-6">
						<h2 className="text-3xl lg:text-4xl font-bold leading-tight text-(--es-text-1)">
							Start Your EdTech Platform in 60 Seconds
						</h2>
						<p className="text-(--es-text-2) leading-relaxed max-w-lg">
							Set up your own learning platform without technical setup or long
							onboarding. Edushade gives you the structure so you can focus on
							building and teaching.
						</p>
						<ul className="flex flex-col gap-3">
							{BENEFITS.map((benefit) => (
								<li
									key={benefit}
									className="flex items-center gap-3 text-(--es-text-2)"
								>
									<span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-(--es-text-1) text-white">
										<Check className="size-3" strokeWidth={3} />
									</span>
									<span>{benefit}</span>
								</li>
							))}
						</ul>
						<div>
							<Button
								className="rounded-full bg-(--es-brand) hover:bg-(--es-brand-hover) text-white h-auto px-8 py-3.5 text-base font-medium"
							>
								Get Started Free
							</Button>
						</div>
					</div>

					{/* Right: placeholder for screenshot / video / carousel */}
					<div className="min-h-[320px] rounded-2xl border border-(--es-border-1) bg-linear-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 shadow-sm overflow-hidden">
						<div
							className="h-full min-h-[320px] w-full opacity-60 bg-[repeating-linear-gradient(-45deg,transparent_0,transparent_12px,rgba(148,163,184,.08)_12px,rgba(148,163,184,.08)_24px)]"
							aria-hidden
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
