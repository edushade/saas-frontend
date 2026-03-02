import { MDXContent } from "@content-collections/mdx/react";
import { Typography } from "@/components/ui-custom/typography";
import type { LegalDocument } from "@/constants/legal";

export interface LegalPageViewProps {
	doc: LegalDocument;
}

export function LegalPageView({ doc }: LegalPageViewProps) {
	return (
		<main className="min-h-screen bg-bg-primary pt-(--es-section-pt)  px-4 md:px-(--es-section-px)">
			<article className="mx-auto max-w-[680px] px-4 	 py-(--es-section-py)">
				<header className="mb-8">
					<Typography
						variant="h1"
						className="text-3xl font-medium tracking-tight text-text-primary md:text-4xl"
					>
						{doc.title}
					</Typography>
					{doc.description && (
						<p className="mt-2 text-text-secondary">{doc.description}</p>
					)}
				</header>

				<div className="max-w-[680px] mx-auto">
					{doc.mdx ? (
						<div
							className="prose prose-neutral dark:prose-invert max-w-none
						[&_a]:text-brand-200 [&_a]:underline
						[&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold
						[&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold
						[&_h4]:mt-6 [&_h4]:text-base [&_h4]:font-semibold
						[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4
						[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4
						[&_li]:my-1
						[&_blockquote]:border-l-4 [&_blockquote]:border-border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-text-secondary [&_blockquote]:my-4
						[&_pre]:bg-bg-tertiary [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:my-4
						[&_code]:bg-bg-tertiary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
						[&_pre_code]:bg-transparent [&_pre_code]:p-0
						[&_img]:rounded-lg [&_img]:shadow-sm [&_img]:my-4
						[&_table]:w-full [&_table]:border-collapse [&_table]:my-4
						[&_th]:border [&_th]:border-border-primary [&_th]:bg-bg-tertiary [&_th]:px-3 [&_th]:py-2 [&_th]:text-left
						[&_td]:border [&_td]:border-border-primary [&_td]:px-3 [&_td]:py-2
						[&_p]:my-3
						[&_hr]:my-8 [&_hr]:border-border-primary"
						>
							<MDXContent code={doc.mdx} />
						</div>
					) : (
						<div className="whitespace-pre-wrap text-text-secondary">
							{doc.content}
						</div>
					)}
				</div>
			</article>
		</main>
	);
}
