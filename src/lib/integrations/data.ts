import { allIntegrations } from "content-collections";
import type { IntegrationCard, IntegrationDetail } from "./types";

export const INTEGRATIONS_LIST: IntegrationCard[] = [...allIntegrations]
	.map((doc) => ({
		name: doc.name,
		slug: doc.slug ?? "",
		description: doc.description,
		primaryButtonLabel: doc.primaryButtonLabel,
		iconBgColor: doc.iconBgColor,
		imageSrc: doc.imageSrc,
	}))
	.sort((a, b) => a.name.localeCompare(b.name));

export type IntegrationDocument = (typeof allIntegrations)[number];

export function getIntegrationDetail(slug: string): IntegrationDetail | null {
	const doc = allIntegrations.find(
		(i) => (i.slug ?? "").toLowerCase() === slug.toLowerCase(),
	);
	if (!doc) return null;
	return {
		name: doc.name,
		slug: doc.slug ?? "",
		tag: doc.tag,
		tagline: doc.tagline,
		descriptionParagraphs: doc.descriptionParagraphs ?? [],
		iconBgColor: doc.iconBgColor,
		imageSrc: doc.imageSrc,
	};
}
