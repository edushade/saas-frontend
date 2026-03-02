import { ArrowRight } from "lucide-react";
import type { ElementType } from "react";
import {
	ClapperboardPlayIcon,
	ClipboardListIcon,
	DiplomaIcon,
	NotebookBookmarkIcon,
} from "@/assets/icons";
import { RoutingIcon } from "@/assets/icons/routing-icons";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui-custom/typography";

const SECTION_TITLE = "What Courses Lets You Do";
const SECTION_DESCRIPTION =
	"Edushade is designed by starting with how educators plan, teach, and support learners. Every part of the platform follows real instructional needs, not predefined software workflows.";

interface CourseCapabilityItem {
	title: string;
	description: string;
	icon: ElementType;
}

const COURSE_CAPABILITIES: CourseCapabilityItem[] = [
	{
		title: "Course Builder",
		description:
			"Organize lessons, modules, and sections into a clear structure, easy to manage.",
		icon: NotebookBookmarkIcon,
	},
	{
		title: "Flexible Lesson Types",
		description:
			"Combine video, text, slides, and documents to match different styles.",
		icon: ClapperboardPlayIcon,
	},
	{
		title: "Prerequisite Logic",
		description: "Unlock lessons only after required content is completed.",
		icon: ArrowRight,
	},
	{
		title: "Certificates",
		description: "Automatically recognize course completion with certificates.",
		icon: DiplomaIcon,
	},
	{
		title: "Learning Paths",
		description:
			"Arrange lessons in a logical sequence that guides learners through the material.",
		icon: RoutingIcon,
	},
	{
		title: "Assignments & Quizzes",
		description:
			"Reinforce learning with tasks and assessments that track progress.",
		icon: ClipboardListIcon,
	},
];

export function WhatCoursesLetsYouDoSection() {
	return (
		<section className="bg-bg-primary py-(--es-section-py) px-4 md:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w) space-y-12">
				<div className="text-center space-y-6">
					<Typography
						variant="h1"
						className="text-2xl md:text-[2rem] lg:text-[2.75rem] font-semibold leading-tight text-text-primary"
					>
						{SECTION_TITLE}
					</Typography>
					<Typography
						variant="base"
						className="mt-4 max-w-3xl mx-auto font-normal leading-relaxed text-text-secondary"
					>
						{SECTION_DESCRIPTION}
					</Typography>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{COURSE_CAPABILITIES.map((item) => (
						<Card
							key={item.title}
							className="rounded-[20px] border border-border-secondary bg-bg-primary shadow-md hover:shadow-md duration-300 hover:transition-shadow hover:scale-[1.01]"
						>
							<CardContent>
								<div className="flex size-11 items-center justify-center rounded-lg bg-brand-200/15 text-brand-300 mb-4">
									<item.icon className="size-6" aria-hidden />
								</div>
								<Typography
									variant="h5"
									className="font-medium leading-snug text-text-primary"
								>
									{item.title}
								</Typography>
								<Typography
									variant="h6"
									className="mt-2 font-normal leading-snug text-text-secondary"
								>
									{item.description}
								</Typography>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
