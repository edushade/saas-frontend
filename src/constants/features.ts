export interface FeatureBannerContent {
	slug: string;
	tag: string;
	headline: string;
	description: string;
	ctaText: string;
	ctaTo: string;
}

const FEATURES_BY_SLUG: Record<string, FeatureBannerContent> = {
	courses: {
		slug: "courses",
		tag: "Courses",
		headline: "Build, Manage, and Sell Courses Seamlessly",
		description:
			"Design and organize learning experiences with flexible lesson types, structured paths, and clear progression logic.",
		ctaText: "Try Courses Now",
		ctaTo: "/request-demo",
	},
	"live-classes": {
		slug: "live-classes",
		tag: "Live Classes",
		headline: "Teach in Real Time",
		description:
			"Run live sessions with video, screen share, and interactive tools for engaging learner experiences.",
		ctaText: "Get Started",
		ctaTo: "/request-demo",
	},
	cohorts: {
		slug: "cohorts",
		tag: "Cohorts",
		headline: "Run Guided Programs",
		description:
			"Structure cohort-based learning with schedules, milestones, and community.",
		ctaText: "Learn More",
		ctaTo: "/request-demo",
	},
	workshops: {
		slug: "workshops",
		tag: "Workshops",
		headline: "Host Focused Sessions",
		description:
			"Deliver hands-on workshops with materials, assignments, and follow-up.",
		ctaText: "Get Started",
		ctaTo: "/request-demo",
	},
	"assessments-exams": {
		slug: "assessments-exams",
		tag: "Assessments & Exams",
		headline: "Evaluate Learner Understanding",
		description:
			"Create quizzes, exams, and assessments with flexible grading and feedback.",
		ctaText: "Learn More",
		ctaTo: "/request-demo",
	},
	"assignments-quizzes": {
		slug: "assignments-quizzes",
		tag: "Assignments & Quizzes",
		headline: "Reinforce Learning Outcomes",
		description:
			"Assign work and quizzes to reinforce concepts and track completion.",
		ctaText: "Get Started",
		ctaTo: "/request-demo",
	},
	certificates: {
		slug: "certificates",
		tag: "Certificates",
		headline: "Recognize Course Completion",
		description:
			"Issue certificates and credentials when learners complete courses.",
		ctaText: "Learn More",
		ctaTo: "/request-demo",
	},
	"recorded-lessons": {
		slug: "recorded-lessons",
		tag: "Recorded Lessons",
		headline: "Offer Self Paced Learning",
		description:
			"Host video lessons and let learners progress at their own pace.",
		ctaText: "Get Started",
		ctaTo: "/request-demo",
	},
	"learning-paths": {
		slug: "learning-paths",
		tag: "Learning Paths",
		headline: "Guide Learner Progression",
		description:
			"Define paths and sequences to guide learners through your content.",
		ctaText: "Learn More",
		ctaTo: "/request-demo",
	},
	community: {
		slug: "community",
		tag: "Community",
		headline: "Build Learner Interaction",
		description:
			"Foster discussion and connection among learners and instructors.",
		ctaText: "Get Started",
		ctaTo: "/request-demo",
	},
	discussions: {
		slug: "discussions",
		tag: "Discussions",
		headline: "Encourage Peer Conversation",
		description: "Enable threaded discussions and Q&A around your content.",
		ctaText: "Learn More",
		ctaTo: "/request-demo",
	},
	announcements: {
		slug: "announcements",
		tag: "Announcements",
		headline: "Share Important Updates",
		description: "Send announcements to learners and cohorts.",
		ctaText: "Get Started",
		ctaTo: "/request-demo",
	},
	"feedback-reviews": {
		slug: "feedback-reviews",
		tag: "Feedback & Reviews",
		headline: "Collect Learner Input",
		description:
			"Gather reviews, ratings, and feedback to improve your courses.",
		ctaText: "Learn More",
		ctaTo: "/request-demo",
	},
	"attendance-tracking": {
		slug: "attendance-tracking",
		tag: "Attendance Tracking",
		headline: "Monitor Session Participation",
		description: "Track attendance for live sessions and cohorts.",
		ctaText: "Get Started",
		ctaTo: "/request-demo",
	},
	"student-panel": {
		slug: "student-panel",
		tag: "Student Panel",
		headline: "Focused Learning Space",
		description:
			"Dedicated experience for learners to access courses and progress.",
		ctaText: "Learn More",
		ctaTo: "/request-demo",
	},
	"educator-panel": {
		slug: "educator-panel",
		tag: "Educator Panel",
		headline: "Teaching and Content Control",
		description: "Tools for educators to manage content and teach effectively.",
		ctaText: "Get Started",
		ctaTo: "/request-demo",
	},
	"admin-panel": {
		slug: "admin-panel",
		tag: "Admin Panel",
		headline: "Platform Level Management",
		description: "Administer users, settings, and platform-wide configuration.",
		ctaText: "Learn More",
		ctaTo: "/request-demo",
	},
	"user-management": {
		slug: "user-management",
		tag: "User Management",
		headline: "Manage Learners and Teams",
		description: "Invite, organize, and manage learners and team members.",
		ctaText: "Get Started",
		ctaTo: "/request-demo",
	},
	"role-permissions": {
		slug: "role-permissions",
		tag: "Role Permissions",
		headline: "Control Access Levels",
		description: "Define roles and permissions for your platform.",
		ctaText: "Learn More",
		ctaTo: "/request-demo",
	},
	"access-control": {
		slug: "access-control",
		tag: "Access Control",
		headline: "Secure Platform Usage",
		description:
			"Control who can access what with security and compliance in mind.",
		ctaText: "Get Started",
		ctaTo: "/request-demo",
	},
	"progress-tracking": {
		slug: "progress-tracking",
		tag: "Progress Tracking",
		headline: "Follow Learner Completion",
		description: "Track progress through courses and learning paths.",
		ctaText: "Learn More",
		ctaTo: "/request-demo",
	},
	"learner-analytics": {
		slug: "learner-analytics",
		tag: "Learner Analytics",
		headline: "Understand Engagement Patterns",
		description: "Analytics and reports on learner engagement and behavior.",
		ctaText: "Get Started",
		ctaTo: "/request-demo",
	},
	"assessment-results": {
		slug: "assessment-results",
		tag: "Assessment Results",
		headline: "Review Learner Performance",
		description: "View and analyze assessment and exam results.",
		ctaText: "Learn More",
		ctaTo: "/request-demo",
	},
	"completion-reports": {
		slug: "completion-reports",
		tag: "Completion Reports",
		headline: "Track Learning Outcomes",
		description: "Reports on course and path completion and outcomes.",
		ctaText: "Get Started",
		ctaTo: "/request-demo",
	},
	"engagement-insights": {
		slug: "engagement-insights",
		tag: "Engagement Insights",
		headline: "Measure Activity Levels",
		description: "Insights into how learners interact with your content.",
		ctaText: "Learn More",
		ctaTo: "/request-demo",
	},
};

export function getFeatureBySlug(
	slug: string,
): FeatureBannerContent | undefined {
	return FEATURES_BY_SLUG[slug];
}

export const FEATURE_SLUGS = Object.keys(FEATURES_BY_SLUG);
