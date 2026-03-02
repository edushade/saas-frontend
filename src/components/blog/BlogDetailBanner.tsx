import { Github, Globe, Youtube } from "lucide-react";
import {
	DiscordIcon,
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	XIcon,
} from "@/assets/icons";
import { CardShadeOverlay } from "@/components/ui-custom/card-shade-overlay";
import { Typography } from "@/components/ui-custom/typography";
import { cn } from "@/lib/utils";
import { BannerTag } from "../ui-custom/BannerTag";

const WORDS_PER_MINUTE = 200;

export interface BlogDetailBannerAuthorSocials {
	website?: string;
	twitter?: string;
	x?: string;
	linkedin?: string;
	facebook?: string;
	instagram?: string;
	youtube?: string;
	github?: string;
	discord?: string;
	threads?: string;
	tiktok?: string;
	medium?: string;
}

export interface BlogDetailBannerAuthor {
	name: string;
	role: string;
	avatarUrl?: string;
	bio?: string;
	socials?: BlogDetailBannerAuthorSocials;
}

export interface BlogDetailBannerProps {
	title: string;
	date: string;
	readTimeMinutes?: number;
	contentForEstimate?: string;
	author?: BlogDetailBannerAuthor;
	className?: string;
}

const SOCIAL_CONFIG: Array<{
	key: keyof BlogDetailBannerAuthorSocials;
	label: string;
	Icon: React.ComponentType<{ className?: string }>;
}> = [
	{ key: "website", label: "Website", Icon: Globe },
	{ key: "x", label: "X (Twitter)", Icon: XIcon },
	{ key: "linkedin", label: "LinkedIn", Icon: LinkedinIcon },
	{ key: "facebook", label: "Facebook", Icon: FacebookIcon },
	{ key: "instagram", label: "Instagram", Icon: InstagramIcon },
	{ key: "youtube", label: "YouTube", Icon: Youtube },
	{ key: "github", label: "GitHub", Icon: Github },
	{ key: "discord", label: "Discord", Icon: DiscordIcon },
	{ key: "threads", label: "Threads", Icon: InstagramIcon },
	{ key: "tiktok", label: "TikTok", Icon: Globe },
	{ key: "medium", label: "Medium", Icon: Globe },
];

function estimateReadTimeMinutes(text: string | undefined): number {
	if (!text || !text.trim()) return 1;
	const words = text.trim().split(/\s+/).length;
	return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function BlogDetailBanner({
	title,
	date,
	readTimeMinutes,
	contentForEstimate,
	author,
	className,
}: BlogDetailBannerProps) {
	const minutes =
		readTimeMinutes ??
		(contentForEstimate ? estimateReadTimeMinutes(contentForEstimate) : 1);
	const readTimeLabel = minutes === 1 ? "1 min read" : `${minutes} min read`;

	return (
		<section
			className={cn(
				"relative overflow-hidden px-4 py-(--es-section-py) md:px-(--es-section-px) bg-bg-primary",
				className,
			)}
		>
			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 z-0 h-full w-full rounded-full bg-grad-lightblue"
			/>
			<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />

			<div className="relative mx-auto max-w-(--es-max-w)">
				<div className="flex flex-col items-center text-center">
					<BannerTag tag={`${date} • ${readTimeLabel}`} />

					<Typography
						variant="h1"
						className="mt-6 text-3xl max-w-[1024px] mx-auto  w-full font-semibold leading-tight text-text-primary md:text-4xl lg:text-5xl"
					>
						{title}
					</Typography>

					{author && (
						<div className="mt-8 flex  flex-col items-center gap-3">
							<div className="flex items-center gap-2">
								{author.avatarUrl ? (
									<img
										src={author.avatarUrl}
										alt=""
										className="size-12 rounded-full object-cover"
									/>
								) : (
									<div
										aria-hidden
										className="flex size-12 items-center justify-center rounded-full bg-bg-tertiary text-lg font-semibold text-text-secondary"
									>
										{author.name.charAt(0).toUpperCase()}
									</div>
								)}
								<div>
									<Typography
										variant="base"
										className="font-medium text-text-primary"
									>
										{author.name}
									</Typography>
									<Typography
										variant="small"
										className="font-normal text-text-secondary"
									>
										{author.role}
									</Typography>
								</div>
							</div>

							{author.socials && (
								<div className="flex flex-wrap items-center justify-center gap-2">
									{SOCIAL_CONFIG.map(({ key, label, Icon }) => {
										const url =
											key === "x"
												? (author.socials?.x ?? author.socials?.twitter)
												: author.socials?.[key];
										if (!url) return null;
										return (
											<a
												key={key}
												href={url}
												target="_blank"
												rel="noopener noreferrer"
												className="flex size-9 items-center justify-center rounded-full bg-bg-tertiary text-text-secondary transition-colors hover:bg-bg-quaternary hover:text-text-primary"
												aria-label={`${author.name} on ${label}`}
											>
												<Icon className="size-4" />
											</a>
										);
									})}
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
