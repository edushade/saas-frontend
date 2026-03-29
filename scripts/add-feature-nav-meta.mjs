import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const featuresDir = path.join(__dirname, '..', 'content', 'features');

/** slug -> block (no trailing newline on last line; script adds newline before `banner:`) */
const META = {
	courses: {
		title: 'Courses',
		description: 'Create structured lessons',
		navGroup: 'Build Learning',
		navIcon: 'notebookBookmark',
		navOrder: 0,
	},
	'live-classes': {
		title: 'Live Classes',
		description: 'Teach in real time',
		navGroup: 'Build Learning',
		navIcon: 'userSpeakRounded',
		navOrder: 10,
	},
	cohorts: {
		title: 'Cohorts',
		description: 'Run guided programs',
		navGroup: 'Build Learning',
		navIcon: 'notebookSquare',
		navOrder: 20,
	},
	workshops: {
		title: 'Workshops',
		description: 'Host focused sessions',
		navGroup: 'Build Learning',
		navIcon: 'testTube',
		navOrder: 30,
	},
	'assessments-exams': {
		title: 'Assessments & Exams',
		description: 'Evaluate learner understanding',
		navGroup: 'Build Learning',
		navIcon: 'calculatorMinimalistic',
		navOrder: 40,
	},
	'assignments-quizzes': {
		title: 'Assignments & Quizzes',
		description: 'Reinforce learning outcomes',
		navGroup: 'Build Learning',
		navIcon: 'clipboardList',
		navOrder: 50,
	},
	certificates: {
		title: 'Certificates',
		description: 'Recognize course completion',
		navGroup: 'Build Learning',
		navIcon: 'diploma',
		navOrder: 60,
	},
	'recorded-lessons': {
		title: 'Recorded Lessons',
		description: 'Offer self paced learning',
		navGroup: 'Deliver & Engage',
		navIcon: 'clapperboardPlay',
		navOrder: 0,
	},
	'learning-paths': {
		title: 'Learning Paths',
		description: 'Guide learner progression',
		navGroup: 'Deliver & Engage',
		navIcon: 'routing',
		navOrder: 10,
	},
	community: {
		title: 'Community',
		description: 'Build learner interaction',
		navGroup: 'Deliver & Engage',
		navIcon: 'usersGroupTwoRounded',
		navOrder: 20,
	},
	discussions: {
		title: 'Discussions',
		description: 'Encourage peer conversation',
		navGroup: 'Deliver & Engage',
		navIcon: 'dialog',
		navOrder: 30,
	},
	announcements: {
		title: 'Announcements',
		description: 'Share important updates',
		navGroup: 'Deliver & Engage',
		navIcon: 'chatUnread',
		navOrder: 40,
	},
	'feedback-reviews': {
		title: 'Feedback & Reviews',
		description: 'Collect learner input',
		navGroup: 'Deliver & Engage',
		navIcon: 'star',
		navOrder: 50,
	},
	'attendance-tracking': {
		title: 'Attendance Tracking',
		description: 'Monitor session participation',
		navGroup: 'Deliver & Engage',
		navIcon: 'calendar',
		navOrder: 60,
	},
	'student-panel': {
		title: 'Student Panel',
		description: 'Focused learning space',
		navGroup: 'Manage Roles',
		navIcon: 'userHeartRounded',
		navOrder: 0,
	},
	'educator-panel': {
		title: 'Educator Panel',
		description: 'Teaching and content control',
		navGroup: 'Manage Roles',
		navIcon: 'sidebar',
		navOrder: 10,
	},
	'admin-panel': {
		title: 'Admin Panel',
		description: 'Platform level management',
		navGroup: 'Manage Roles',
		navIcon: 'windowFrame',
		navOrder: 20,
	},
	'user-management': {
		title: 'User Management',
		description: 'Manage learners and teams',
		navGroup: 'Manage Roles',
		navIcon: 'userGroupRounded',
		navOrder: 30,
	},
	'role-permissions': {
		title: 'Role Permissions',
		description: 'Control access levels',
		navGroup: 'Manage Roles',
		navIcon: 'stars',
		navOrder: 40,
	},
	'access-control': {
		title: 'Access Control',
		description: 'Secure platform usage',
		navGroup: 'Manage Roles',
		navIcon: 'userBlock',
		navOrder: 50,
	},
	'progress-tracking': {
		title: 'Progress Tracking',
		description: 'Follow learner completion',
		navGroup: 'Track and Measure',
		navIcon: 'pieChart3',
		navOrder: 0,
	},
	'learner-analytics': {
		title: 'Learner Analytics',
		description: 'Understand engagement patterns',
		navGroup: 'Track and Measure',
		navIcon: 'chart2',
		navOrder: 10,
	},
	'assessment-results': {
		title: 'Assessment Results',
		description: 'Review learner performance',
		navGroup: 'Track and Measure',
		navIcon: 'cupStar',
		navOrder: 20,
	},
	'completion-reports': {
		title: 'Completion Reports',
		description: 'Track learning outcomes',
		navGroup: 'Track and Measure',
		navIcon: 'widget6',
		navOrder: 30,
	},
	'engagement-insights': {
		title: 'Engagement Insights',
		description: 'Measure activity levels',
		navGroup: 'Track and Measure',
		navIcon: 'graphNewUp',
		navOrder: 40,
	},
};

function buildBlock(slug, m) {
	const href = `/features/${slug}`;
	return `featureId: ${JSON.stringify(slug)}
title: ${JSON.stringify(m.title)}
description: ${JSON.stringify(m.description)}
href: ${JSON.stringify(href)}
navGroup: ${JSON.stringify(m.navGroup)}
navIcon: ${m.navIcon}
navOrder: ${m.navOrder}
`;
}

for (const slug of Object.keys(META)) {
	const filePath = path.join(featuresDir, `${slug}.mdx`);
	let s = fs.readFileSync(filePath, 'utf8');
	if (s.startsWith('\uFEFF')) s = s.slice(1);

	if (/\nfeatureId:\s/m.test(s) || /^featureId:\s/m.test(s)) {
		console.log('skip (already has featureId:):', slug);
		continue;
	}

	const m = /^---\r?\n/.exec(s);
	if (!m) throw new Error(`No frontmatter: ${filePath}`);
	const sep = m[0];
	const rest = s.slice(sep.length);
	const block = buildBlock(slug, META[slug]);
	const next = `${sep}${block}${rest}`;
	fs.writeFileSync(filePath, next);
	console.log('updated:', slug);
}
