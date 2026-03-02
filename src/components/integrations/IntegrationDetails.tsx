import { Link } from "@tanstack/react-router";
import { ArrowLeftIcon } from "@/assets/icons";
import { Typography } from "@/components/ui-custom/typography";
import type { IntegrationDetail } from "@/constants/integrations";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export interface IntegrationDetailsProps {
	integration: IntegrationDetail;
}

export function IntegrationDetails({ integration }: IntegrationDetailsProps) {
	return (
		<div className=" px-4  md:px-(--es-section-px) py-(--es-section-py) bg-bg-primary">
			<div className="mx-auto max-w-[760px]  flex flex-col gap-2  md:gap-6">
				<Link
					to="/integrations"
					className="inline-flex items-center gap-2 text-text-primary transition-colors hover:text-brand-200"
				>
					<ArrowLeftIcon className="size-5 text-text-primary transition-colors hover:text-brand-200" />
					<Typography
						variant="base"
						className="font-medium text-text-secondary hover:text-brand-200"
					>
						Integrations
					</Typography>
				</Link>

				<div className="flex flex-col gap-6 mt-2 md:mt-8">
					<div className="flex flex-col gap-6 ">
						<div
							className={cn(
								"flex size-[80px] shrink-0 rounded-xl items-center shadow-md p-0.5 justify-center  text-lg font-semibold text-white",
							)}
						>
							<img
								src={integration.imageSrc}
								alt={integration.name}
								className="size-full object-contain rounded-xl"
							/>
						</div>
						<div className="min-w-0 flex-1">
							<div className="flex flex-wrap items-center gap-3">
								<Typography
									variant="h2"
									className="font-medium text-text-primary"
								>
									{integration.name}
								</Typography>
								<Badge
									variant="default"
									className="rounded-full bg-bg-tertiary px-3  text-text-primary"
								>
									<Typography
										variant="base"
										className="font-medium text-text-primary"
									>
										{integration.tag}
									</Typography>
								</Badge>
							</div>
							<Typography
								variant="h6"
								className="mt-4 font-semibold leading-relaxed text-text-primary"
							>
								{integration.tagline}
							</Typography>
						</div>
					</div>

					<div className="space-y-6">
						{integration.descriptionParagraphs.map((paragraph, index) => (
							<Typography
								key={`${integration.slug}-p-${index}`}
								variant="h6"
								className="font-normal leading-relaxed text-text-secondary"
							>
								{paragraph}
							</Typography>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
