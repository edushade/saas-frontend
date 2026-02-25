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

export const TESTIMONIALS: Testimonial[] = [
	{
		id: "1",
		variant: "white",
		quote:
			"I highly recommend Edushade! It's streamlined operations and created clear growth paths.",
		name: "Anya Petrova",
		role: "Director of Innovation, GlobalEd Initiative",
		initial: "AP",
		profileSrc: "/svgs/educator-say/anya.svg",
	},

	{
		id: "2",
		variant: "white",
		quote:
			"Edushade has transformed our curriculum planning. The customization is amazing! Now, we're more connected with our students!",
		name: "Clara Johnson",
		role: "Curriculum Developer, BrightFuture Academy",
		initial: "CJ",
		profileSrc: "/svgs/educator-say/clara.svg",
	},

	{
		id: "3",
		variant: "gradient",
		rowSpan: 2,
		company: "Velocity",
		logoSrc: "/svgs/educator-say/3.svg",
		quote:
			"Edushade's custom reports gave us key insights into our performance and helped us improve our business.",
		name: "Jane Cooper",
		role: "Founder of Velocity",
		initial: "JC",
		profileSrc: "/svgs/educator-say/jane.svg",
	},

	{
		id: "4",
		variant: "gradient",
		rowSpan: 2,
		company: "Velocity",
		logoSrc: "/svgs/educator-say/3.svg",
		quote:
			"Edushade's custom reports gave us key insights into our performance and helped us improve our business.",
		name: "Jane Cooper",
		role: "Founder of Velocity",
		initial: "JC",
		profileSrc: "/svgs/educator-say/jane.svg",
	},
	{
		id: "5",
		variant: "white",
		quote:
			"Edushade has boosted our student engagement. We're more connected with our students than ever!",
		name: "Markus Lee",
		role: "Director of Student Success, LearnWave",
		initial: "ML",
		profileSrc: "/svgs/educator-say/markus.svg",
	},
	{
		id: "6",
		variant: "white",
		quote:
			"I highly recommend Edushade! It's streamlined operations and created clear growth paths.",
		name: "Sofia Patel",
		role: "Founder, NextGen Education",
		initial: "SP",
		profileSrc: "/svgs/educator-say/sofia.svg",
	},

	{
		id: "7",
		variant: "white",
		quote:
			"Edushade's data insights have revolutionized our teaching methods. We've moved from guesswork to strategies.",
		name: "Anya Petrova",
		role: "Director of Innovation, GlobalEd Initiative",
		initial: "AP",
		profileSrc: "/svgs/educator-say/anya.svg",
	},
	{
		id: "8",
		variant: "white",
		quote:
			"The analytics dashboard saves us hours every week. Finally, insights we can act on.",
		name: "Dr. Rachel Kim",
		role: "Head of Curriculum, EduFlow",
		initial: "RK",
	},
	{
		id: "9",
		variant: "white",
		quote:
			"From setup to first cohort in days, not months. Edushade gets out of the way and lets us teach.",
		name: "James Okonkwo",
		role: "Instructor, SkillBridge",
		initial: "JO",
	},
	{
		id: "10",
		variant: "white",
		quote:
			"Our students love the clear structure. Completion rates have never been higher.",
		name: "Maria Santos",
		role: "Program Director, NextEd",
		initial: "MS",
	},
];

export const TESTIMONIALS_INITIAL_COUNT = 7;
export const TESTIMONIALS_LOAD_MORE_COUNT = 3;
