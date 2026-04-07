export interface IntegrationCard {
	name: string;
	slug: string;
	description: string;
	primaryButtonLabel: string;
	iconBgColor: string;
	imageSrc: string;
}

export interface IntegrationDetail {
	name: string;
	slug: string;
	tag: string;
	tagline: string;
	descriptionParagraphs: string[];
	iconBgColor: string;
	imageSrc: string;
}
