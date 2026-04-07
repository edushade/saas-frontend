export type TestimonialVariant = "white" | "gradient";

export interface Testimonial {
	id: string;
	variant: TestimonialVariant;
	rowSpan?: 1 | 2;
	company?: string;
	logoSrc?: string;
	quote: string;
	name: string;
	role: string;
	initial: string;
	avatarSrc?: string;
	profileSrc?: string;
}
