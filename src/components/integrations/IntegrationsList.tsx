import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { Typography } from "@/components/ui-custom/typography";
import {
	INTEGRATIONS_LIST,
	type IntegrationCard,
} from "@/lib/integrations/data";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";

function IntegrationCardItem({ card }: { card: IntegrationCard }) {
	return (
		<article>
			<Card className="flex flex-col rounded-3xl border border-border-secondary	bg-bg-primary shadow-sm transition-shadow hover:shadow-md">
				<CardContent>
					<div className="flex items-start justify-between gap-2">
						<Link
							to="/integrations/$slug"
							params={{ slug: card.slug }}
							className="flex min-w-0 flex-1 flex-col"
						>
							<div
								className={cn(
									"flex size-[80px] shrink-0 rounded-xl items-center shadow-md p-0.5 justify-center  text-lg font-semibold text-white",
								)}
							>
								<img
									src={card.imageSrc}
									alt={card.name}
									className="size-full object-contain rounded-xl"
								/>
							</div>
							<Typography
								variant="h5"
								className="mt-4 font-medium text-text-primary"
							>
								{card.name}
							</Typography>
							<Typography
								variant="base"
								className="mt-2 flex-1 font-normal leading-relaxed text-text-secondary whitespace-pre-line"
							>
								{card.description}
							</Typography>
						</Link>
					</div>
					<div className="mt-6 flex items-center justify-between gap-2">
						<Link
							to="/integrations/$slug"
							params={{ slug: card.slug }}
							className="btn-brand-1 rounded-lg px-4 py-1 text-base font-medium text-text-on-brand hover:bg-brand-1/90 whitespace-nowrap"
						>
							{card.primaryButtonLabel}
						</Link>
						<button
							type="button"
							aria-label={`Add ${card.name}`}
							className="flex size-10 shrink-0 items-center justify-center rounded-lg  bg-bg-tertiary text-text-primary transition-colors hover:bg-bg-quaternary"
						>
							<Plus className="size-4 text-text-secondary" />
						</button>
					</div>
				</CardContent>
			</Card>
		</article>
	);
}

export default function IntegrationsList() {
	return (
		<section className="bg-bg-primary px-4 md:px-8 xl:px-(--es-section-px) py-12 md:py-(--es-section-py)">
			<div className="mx-auto max-w-(--es-max-w)">
				<Typography variant="h4" className="font-medium text-text-primary">
					All Integrations
				</Typography>
				<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{INTEGRATIONS_LIST.map((card) => (
						<IntegrationCardItem key={card.name} card={card} />
					))}
				</div>
			</div>
		</section>
	);
}
