import { Minus, Plus } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ_ITEMS = [
	{
		question: "How is Edushade different from other LMS platforms?",
		answer:
			"Edushade is built around how educators actually teach, not predefined workflows. You design learning by intent and outcomes first, with one platform for courses, classrooms, communities, and coaching.",
	},
	{
		question: "Does Edushade support live classes and recorded content?",
		answer:
			"Yes. You can run live sessions, upload recorded lessons, and combine both into structured learning programs.",
	},
	{
		question: "Can I manage multiple instructors or teachers?",
		answer:
			"Yes. You can invite co-instructors, assign roles, and manage permissions so your team can create and deliver content together.",
	},
	{
		question: "How does learner progress tracking work?",
		answer:
			"Progress is tracked per course and per activity. You get dashboards for completion, scores, and engagement, with options to export or use built-in reports.",
	},
	{
		question: "Is Edushade suitable for schools and universities?",
		answer:
			"Yes. Edushade scales from solo creators to academies and institutions, with features for cohorts, grading, and compliance-friendly settings.",
	},
	{
		question: "Can I start small and upgrade later?",
		answer:
			"Yes. You can launch with a single course or cohort and add more courses, instructors, and features as you grow. Plans are flexible and upgradeable.",
	},
];

export default function FAQSection() {
	return (
		<section className="bg-white py-16">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
					{/* Left: title, description, CTA */}
					<div className="flex flex-col gap-6 lg:sticky lg:top-24">
						<h2 className="text-3xl lg:text-4xl font-bold leading-tight text-(--es-text-1)">
							Frequently Asked Questions
						</h2>
						<p className="text-(--es-text-2) leading-relaxed max-w-lg">
							Answers to common questions about how Edushade works, pricing, and
							getting started.
						</p>
						<div className="flex flex-col gap-3 pt-2">
							<p className="text-(--es-text-2)">
								Can&apos;t find what you&apos;re looking for?
							</p>
							<Button className="w-fit rounded-md bg-(--es-brand) hover:bg-(--es-brand-hover) text-white h-auto px-5 py-2.5">
								Contact Support
							</Button>
						</div>
					</div>

					{/* Right: accordion */}
					<Accordion
						type="single"
						collapsible
						defaultValue="faq-1"
						className="w-full space-y-3"
					>
						{FAQ_ITEMS.map((item, index) => (
							<AccordionItem
								key={item.question}
								value={`faq-${index}`}
								className="rounded-xl border border-(--es-border-1) bg-(--es-surface-2) px-4 shadow-none "
							>
								<AccordionTrigger className="group/faq [&>svg]:hidden py-4 hover:no-underline">
									<span className="text-left text-sm font-medium text-(--es-text-1)">
										{item.question}
									</span>
									<span className="flex shrink-0 items-center gap-2">
										<span className="flex size-7 items-center justify-center rounded-md text-(--es-text-2) group-data-[state=open]/faq:hidden">
											<Plus className="size-4" />
										</span>
										<span className="hidden size-7 items-center justify-center rounded-md bg-(--es-brand) text-white group-data-[state=open]/faq:flex">
											<Minus className="size-4" />
										</span>
									</span>
								</AccordionTrigger>
								<AccordionContent className="text-(--es-text-2) pb-4 pt-0">
									{item.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
