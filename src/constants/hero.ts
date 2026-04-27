export const TAGS = [
	"Courses",
	"Analytics",
	"Cohorts",
	"Quizzes",
	"Live Exam",
	"Live Class",
	"Recorded",
	"Learning Paths",
	"Problem Solving",
];

export const HERO_TAG_IMAGES: Record<string, { src: string; alt: string }> = {
	Courses: {
		src: "/svgs/hero/hero_image.png",
		alt: "Dashboard preview for courses and content",
	},
	Analytics: {
		src: "/svgs/hero/hero_image.png",
		alt: "Dashboard preview showing course analytics",
	},
	Cohorts: {
		src: "/svgs/hero/hero_image.png",
		alt: "Dashboard preview for cohorts",
	},
	Quizzes: {
		src: "/svgs/hero/hero_image.png",
		alt: "Dashboard preview for quizzes",
	},
	"Live Exam": {
		src: "/svgs/hero/hero_image.png",
		alt: "Dashboard preview for live exams",
	},
	"Live Class": {
		src: "/svgs/hero/hero_image.png",
		alt: "Dashboard preview for live classes",
	},
	Recorded: {
		src: "/svgs/hero/hero_image.png",
		alt: "Dashboard preview for recorded content",
	},
	"Learning Paths": {
		src: "/svgs/hero/hero_image.png",
		alt: "Dashboard preview for learning paths",
	},
	"Problem Solving": {
		src: "/svgs/hero/hero_image.png",
		alt: "Dashboard preview for problem solving",
	},
};

const DEFAULT_HERO_IMAGE = {
	src: "/svgs/hero/hero_image.png",
	alt: "Dashboard preview showing course analytics and content",
};

export function getHeroImageForTag(tag: string): { src: string; alt: string } {
	return HERO_TAG_IMAGES[tag] ?? DEFAULT_HERO_IMAGE;
}

export const SCORE_BARS = [
	{ month: "Jan", h: 40 },
	{ month: "Feb", h: 55 },
	{ month: "Mar", h: 35 },
	{ month: "Apr", h: 60 },
	{ month: "May", h: 45 },
	{ month: "Jun", h: 70 },
	{ month: "Jul", h: 50 },
	{ month: "Aug", h: 65 },
	{ month: "Sep", h: 55 },
	{ month: "Oct", h: 75 },
	{ month: "Nov", h: 60 },
	{ month: "Dec", h: 80 },
];

export const EXAM_BARS = [
	{ month: "Jan", h: 30 },
	{ month: "Feb", h: 50 },
	{ month: "Mar", h: 40 },
	{ month: "Apr", h: 65 },
	{ month: "May", h: 55 },
	{ month: "Jun", h: 80 },
];

export const TRUST_AVATARS = [
	{
		fallback: "A",
		className: "bg-orange-400 text-white",
		src: "/svgs/user/1.svg",
	},
	{
		fallback: "B",
		className: "bg-blue-400 text-white",
		src: "/svgs/user/2.svg",
	},
	{
		fallback: "C",
		className: "bg-green-500 text-white",
		src: "/svgs/user/3.svg",
	},
];

export const DEMO_VIDEO_SRC = "/videos/intro.mp4";
