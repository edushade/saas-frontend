import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
	OnboardingField,
	OnboardingHeader,
	OnboardingNav,
	OnboardingShell,
} from "@/components/onboarding/OnboardingShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ThumbnailUploader } from "@/components/ui-custom/thumbnail-uploader";
import { Typography } from "@/components/ui-custom/typography";
import { useAppForm } from "@/hooks/form";
import { stripHtml, truncate } from "@/lib/text-utils";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/onboarding/create-course")({
	component: OnboardingCreateCourse,
});

const DESCRIPTION_PREVIEW_LENGTH = 120;
const TITLE_PREVIEW_LENGTH = 56;
const MAX_THUMBNAILS = 2;

const defaultValues = {
	title: "",
	description: "",
	thumbnails: { urls: [] as string[], selectedIndex: 0 },
};

function OnboardingCreateCourse() {
	const navigate = useNavigate();

	const form = useAppForm({
		defaultValues,
		onSubmit: async () => {
			navigate({ to: "/onboarding/invite" });
		},
	});

	const handleBack = () => navigate({ to: "/onboarding/what" });

	return (
		<OnboardingShell wide>
			<div className="grid flex-1 w-full min-h-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-0">
				{/* Left section: form */}
				<div className="flex min-w-0 items-start md:items-center justify-center py-4 md:py-10">
					<div className="w-full max-w-[525px] flex flex-col gap-6 md:gap-8">
						<OnboardingHeader
							title="Create your First Course"
							description="Courses are the foundation of your academy. Add a title, structure your lessons, and define how learners will progress."
						/>

						<form
							onSubmit={(e) => {
								e.preventDefault();
								e.stopPropagation();
								form.handleSubmit();
							}}
							className="flex flex-col gap-6"
						>
							<OnboardingField label="Course Title">
								<form.AppField name="title">
									{(field) => (
										<field.TextField placeholder="Enter your course title here..." />
									)}
								</form.AppField>
							</OnboardingField>

							<OnboardingField label="Add Description to the Course">
								<form.AppField name="description">
									{(field) => (
										<field.TextArea placeholder="Write here..." rows={4} />
									)}
								</form.AppField>
							</OnboardingField>

							<OnboardingField label="Add Course Thumbnail">
								<form.AppField name="thumbnails">
									{(field) => (
										<ThumbnailUploader
											maxThumbnails={MAX_THUMBNAILS}
											value={field.state.value.urls}
											onChange={(urls) =>
												field.handleChange({ ...field.state.value, urls })
											}
											selectedIndex={field.state.value.selectedIndex}
											onSelectedIndexChange={(index) =>
												field.handleChange({
													...field.state.value,
													selectedIndex: index,
												})
											}
										/>
									)}
								</form.AppField>
							</OnboardingField>

							<OnboardingNav
								onBack={handleBack}
								nextLabel="Next"
								nextHref={undefined}
							/>
						</form>
					</div>
				</div>

				{/* Right section: preview from form state */}
				<div className="flex min-h-[320px] min-w-0 md:min-h-full items-center justify-center bg-bg-secondary px-4 py-6 md:px-10 md:py-10">
					<form.Subscribe
						selector={(state) => ({
							title: state.values.title ?? "",
							description: state.values.description ?? "",
							thumbnails: state.values.thumbnails ?? defaultValues.thumbnails,
						})}
					>
						{(values) => (
							<CreateCoursePreview
								title={values.title}
								description={values.description}
								thumbnails={values.thumbnails}
							/>
						)}
					</form.Subscribe>
				</div>
			</div>
		</OnboardingShell>
	);
}

function CreateCoursePreview({
	title,
	description,
	thumbnails,
}: {
	title: string;
	description: string;
	thumbnails: { urls: string[]; selectedIndex: number };
}) {
	const previewImage = thumbnails.urls[thumbnails.selectedIndex] ?? null;
	const previewTitle = truncate(
		title || "Course title will appear here",
		TITLE_PREVIEW_LENGTH,
	);
	const previewDescription = truncate(
		stripHtml(description) || "Course description will appear here.",
		DESCRIPTION_PREVIEW_LENGTH,
	);

	return (
		<Card className="w-full max-w-[451px] flex flex-col gap-2 rounded-[20px] p-2 border-border-primary bg-bg-tertiary shadow-sm">
			<CardContent className="aspect-video bg-bg-tertiary px-0 py-0 max-h-[255px] w-full rounded-2xl border border-border-secondary">
				{previewImage && (
					<img
						src={previewImage}
						alt=""
						className="h-full w-full object-cover rounded-2xl"
					/>
				)}
			</CardContent>
			<CardContent className="flex bg-bg-primary flex-col gap-3 py-6 rounded-2xl">
				<div>
					{previewTitle ? (
						<Typography
							variant="h6"
							className="font-semibold leading-tight text-text-primary line-clamp-2"
						>
							{previewTitle}
						</Typography>
					) : (
						<div className="flex flex-col gap-2 w-full">
							<Skeleton className="w-full bg-bg-tertiary h-[28px] rounded-md" />
							<Skeleton className="w-full max-w-[222px] h-[28px] bg-bg-tertiary rounded-md" />
						</div>
					)}
				</div>

				<div>
					{previewDescription ? (
						<Typography
							variant="small"
							className="line-clamp-2 text-text-secondary"
						>
							{previewDescription}
						</Typography>
					) : (
						<div className="flex flex-col gap-2 w-full">
							<Skeleton className="w-full h-[12px] bg-bg-tertiary rounded-md" />
							<Skeleton className="w-full max-w-[222px] h-[12px] bg-bg-tertiary rounded-md" />
						</div>
					)}
				</div>

				<Button
					className={cn(
						"mt-2 w-full gap-1.5 rounded-lg bg-bg-tertiary text-text-secondary text-sm font-medium",
						previewTitle && previewDescription
							? "btn-brand-1"
							: "text-text-secondary pointer-events-none",
					)}
					disabled={!previewTitle || !previewDescription}
					asChild
				>
					<Link to="/">
						Enroll Now
						<ArrowRight className="size-4" />
					</Link>
				</Button>
			</CardContent>
		</Card>
	);
}
