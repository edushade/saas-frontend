import { FEATURE_SLUGS } from "@/constants/features";

export function PrerenderFeatureLinks() {
	return (
		<nav
			aria-hidden="true"
			className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden"
		>
			{FEATURE_SLUGS.map((slug) => (
				<a key={slug} href={`/features/${slug}`}>
					{slug}
				</a>
			))}
		</nav>
	);
}
