import { Minus, Plus } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQ_ITEMS } from "@/constants/faq";
import { Typography } from "../ui-custom/typography";

export default function FAQSection() {
	return (
		<section className="bg-bg-primary py-(--es-section-py) px-4 md:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w) ">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
					<div className="flex flex-col gap-6 lg:sticky lg:top-24">
						<Typography
							variant="h1"
							className="text-2xl md:text-[2rem] lg:text-[2.75rem] leading-tight font-medium text-text-primary"
						>
							Frequently <br /> Asked Questions
						</Typography>
						<Typography
							variant="h6"
							className="font-normal  leading-relaxed text-text-secondary max-w-lg"
						>
							Answers to common questions about how Edushade works, pricing, and
							getting started.
						</Typography>
						<div className="flex flex-col gap-3 pt-1">
							<Typography
								variant="h6"
								className="font-normal leading-relaxed text-text-secondary"
							>
								Can&apos;t find what you&apos;re looking for?
							</Typography>
							<Button className="w-fit btn-brand-1 text-white h-auto px-5 py-2.5">
								Contact Support
							</Button>
						</div>
					</div>

					<Accordion
						type="single"
						collapsible
						defaultValue="faq-1"
						className="w-full space-y-4"
					>
						{FAQ_ITEMS.map((item, index) => (
							<AccordionItem
								key={item.question}
								value={`faq-${index}`}
								className="rounded-2xl border border-border-secondary data-[state=open]:border-none bg-bg-primary px-4 shadow-xs data-[state=open]:shadow-none data-[state=open]:bg-bg-secondary"
							>
								<AccordionTrigger className="group/faq [&>svg]:hidden items-center py-4 text-left hover:no-underline">
									<span className="flex-1 text-left text-sm font-medium text-text-primary">
										{item.question}
									</span>
									<span className="flex shrink-0 items-center gap-2">
										<span className="flex size-7 items-center justify-center rounded-md bg-bg-tertiary text-text-secondary group-data-[state=open]/faq:hidden">
											<Plus className="size-4" />
										</span>
										<span className="hidden size-7 items-center justify-center rounded-md bg-brand-300 text-white group-data-[state=open]/faq:flex">
											<Minus className="size-4" />
										</span>
									</span>
								</AccordionTrigger>
								<AccordionContent className="text-left text-text-secondary ">
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
