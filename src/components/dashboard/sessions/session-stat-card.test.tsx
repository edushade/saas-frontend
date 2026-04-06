import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SessionStatCard } from './session-stat-card';

describe('SessionStatCard', () => {
	it('renders label, value, and sub-label', () => {
		render(
			<SessionStatCard
				label="Total Sessions"
				value="5"
				subLabel="Across all devices"
			/>,
		);
		expect(screen.getByText('Total Sessions')).toBeTruthy();
		expect(screen.getByText('5')).toBeTruthy();
		expect(screen.getByText('Across all devices')).toBeTruthy();
	});
});
