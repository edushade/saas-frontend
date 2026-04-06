/**
 * Demo session rows for the dashboard Sessions page until backend APIs exist.
 */

export type SessionDeviceType = 'laptop' | 'phone' | 'tablet' | 'desktop';

export type SessionStatus = 'active' | 'idle';

export type DemoSession = {
	id: string;
	deviceType: SessionDeviceType;
	deviceName: string;
	browserOs: string;
	location: string;
	ip: string;
	/** Short label for last activity, e.g. "Active now" or "Active 2 hr ago". */
	activityLabel: string;
	status: SessionStatus;
	/** Pre-formatted sign-in timestamp for display. */
	signedInLabel: string;
	/** Exactly one session should be the current device. */
	isCurrent: boolean;
};

export const DEMO_SESSIONS: readonly DemoSession[] = [
	{
		id: 's1',
		deviceType: 'laptop',
		deviceName: 'MacBook Pro 16"',
		browserOs: 'Chrome 124 · macOS Sonoma',
		location: 'San Francisco, CA',
		ip: '192.168.1.42',
		activityLabel: 'Active now',
		status: 'active',
		signedInLabel: 'Mar 27, 2026 • 8:30 AM',
		isCurrent: true,
	},
	{
		id: 's2',
		deviceType: 'phone',
		deviceName: 'iPhone 15 Pro',
		browserOs: 'Safari 17.4 · iOS 19.3',
		location: 'San Francisco, CA',
		ip: '10.0.0.12',
		activityLabel: 'Active 2 hr ago',
		status: 'active',
		signedInLabel: 'Mar 26, 2026 • 4:15 PM',
		isCurrent: false,
	},
	{
		id: 's3',
		deviceType: 'tablet',
		deviceName: 'iPad Pro',
		browserOs: 'Safari 17.2 · iPadOS 19.1',
		location: 'Oakland, CA',
		ip: '172.16.0.5',
		activityLabel: 'Active 1 day ago',
		status: 'idle',
		signedInLabel: 'Mar 20, 2026 • 9:00 AM',
		isCurrent: false,
	},
	{
		id: 's4',
		deviceType: 'desktop',
		deviceName: 'Windows Desktop',
		browserOs: 'Edge 124 · Windows 11',
		location: 'Austin, TX',
		ip: '203.0.113.44',
		activityLabel: 'Active 3 hr ago',
		status: 'idle',
		signedInLabel: 'Mar 15, 2026 • 11:20 AM',
		isCurrent: false,
	},
	{
		id: 's5',
		deviceType: 'phone',
		deviceName: 'Google Pixel 8',
		browserOs: 'Chrome 123 · Android 15',
		location: 'San Francisco, CA',
		ip: '198.51.100.8',
		activityLabel: 'Active 5 hr ago',
		status: 'idle',
		signedInLabel: 'Mar 10, 2026 • 7:45 PM',
		isCurrent: false,
	},
];

/**
 * Aggregates displayed in the Sessions summary row.
 */
export type SessionSummaryStats = {
	totalSessions: number;
	activeNow: number;
	uniqueLocations: number;
};

/**
 * Computes summary metrics from a session list (used for demo data and tests).
 */
export function getSessionSummaryStats(
	sessions: readonly DemoSession[],
): SessionSummaryStats {
	const activeNow = sessions.filter((s) => s.status === 'active').length;
	const uniqueLocations = new Set(sessions.map((s) => s.location.trim())).size;
	return {
		totalSessions: sessions.length,
		activeNow,
		uniqueLocations,
	};
}
