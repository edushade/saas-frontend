import { allLegals } from "content-collections";

export type LegalDocument = (typeof allLegals)[number];

export function getLegalBySlug(slug: string): LegalDocument | undefined {
	return allLegals.find((doc) => doc.slug === slug);
}

export const LEGAL_SLUGS = [
	"terms-of-service",
	"privacy-policy",
	"cookie-policy",
] as const;
export type LegalSlug = (typeof LEGAL_SLUGS)[number];
