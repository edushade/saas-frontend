import { Button } from "@/components/ui/button";

const STRIPES: { widthPx: number; bg: string }[] = [
	{
		widthPx: 58,
		bg: "bg-[linear-gradient(180deg,#fff_0%,#f5f7ff_35%,#d4dcf7_70%,#b8c5ed_100%)]",
	},
	{
		widthPx: 42,
		bg: "bg-[linear-gradient(180deg,#fff_0%,#f8f9fd_30%,#e2e8f8_65%,#c0ccf6_100%)]",
	},
	{
		widthPx: 88,
		bg: "bg-[linear-gradient(180deg,#fff_0%,#f2f4fc_40%,#dce2f5_75%,#a9beea_100%)]",
	},
	{
		widthPx: 32,
		bg: "bg-[linear-gradient(180deg,#fff_0%,#fafbfe_38%,#e8ecfc_72%,#c0ccf6_100%)]",
	},
	{
		widthPx: 68,
		bg: "bg-[linear-gradient(180deg,#fff_0%,#f5f7ff_33%,#d8dff2_68%,#b1c0e8_100%)]",
	},
	{
		widthPx: 48,
		bg: "bg-[linear-gradient(180deg,#fff_0%,#f0f3fb_42%,#dce2f5_78%,#a9beea_100%)]",
	},
	{
		widthPx: 76,
		bg: "bg-[linear-gradient(180deg,#fff_0%,#f8f9fd_36%,#e2e8f8_70%,#c0ccf6_100%)]",
	},
	{
		widthPx: 54,
		bg: "bg-[linear-gradient(180deg,#fff_0%,#f2f4fc_40%,#d4dcf7_75%,#b8c5ed_100%)]",
	},
];

function ColumnBg() {
	return (
		<div
			className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl"
			aria-hidden
		>
			{/* Full width, bottom-aligned, no gap between stripes (no rounded on stripes) */}
			<div className="absolute bottom-0 left-0 flex min-w-full flex-nowrap overflow-hidden">
				{[...STRIPES, ...STRIPES, ...STRIPES, ...STRIPES].map((s, i) => (
					<div
						key={`${i}-${s.widthPx}`}
						className={`h-1/2 min-h-[240px] shrink-0 ${s.bg}`}
						style={{ width: s.widthPx }}
					/>
				))}
			</div>
		</div>
	);
}

export default function CtaSection() {
	return (
		<section className="bg-white py-16">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				<div className="relative overflow-hidden rounded-3xl bg-white shadow-md">
					<ColumnBg />

					<div className="relative z-10 px-8 py-14 text-center lg:py-20">
						<h2 className="mx-auto mb-4 max-w-2xl text-4xl font-bold leading-tight text-[#212121] lg:text-5xl">
							Start Building Learning Your Way
						</h2>
						<p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-[#555555] lg:text-lg">
							Set up courses, programs, and learning experiences without forcing
							your process into rigid software. A connected system for students,
							educators, and administrators.
						</p>
						<Button
							size="lg"
							className="h-12 rounded-full px-8 text-base font-bold text-white bg-[#2F80ED] hover:bg-[#256fcf] shadow-[0_8px_24px_rgba(47,128,237,.35)]"
						>
							Build Your Academy
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
