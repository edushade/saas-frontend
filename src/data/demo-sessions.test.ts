import { describe, expect, it } from 'vitest';
import {
	DEMO_SESSIONS,
	getSessionSummaryStats,
	type DemoSession,
} from './demo-sessions';

describe('getSessionSummaryStats', () => {
	it('returns counts matching DEMO_SESSIONS', () => {
		const stats = getSessionSummaryStats(DEMO_SESSIONS);
		expect(stats.totalSessions).toBe(5);
		expect(stats.activeNow).toBe(2);
		expect(stats.uniqueLocations).toBe(3);
	});

	it('handles empty list', () => {
		const stats = getSessionSummaryStats([]);
		expect(stats).toEqual({
			totalSessions: 0,
			activeNow: 0,
			uniqueLocations: 0,
		});
	});

	it('counts unique locations with trim', () => {
		const sessions: DemoSession[] = [
			{
				id: 'a',
				deviceType: 'laptop',
				deviceName: 'A',
				browserOs: 'x',
				location: ' NYC ',
				ip: '1.1.1.1',
				activityLabel: 'x',
				status: 'active',
				signedInLabel: 'x',
				isCurrent: true,
			},
			{
				id: 'b',
				deviceType: 'phone',
				deviceName: 'B',
				browserOs: 'x',
				location: 'NYC',
				ip: '2.2.2.2',
				activityLabel: 'x',
				status: 'idle',
				signedInLabel: 'x',
				isCurrent: false,
			},
		];
		expect(getSessionSummaryStats(sessions).uniqueLocations).toBe(1);
	});
});
