import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DashboardSettingsRow } from './dashboard-settings-row';

describe('DashboardSettingsRow', () => {
	it('renders title, description, and children', () => {
		render(
			<DashboardSettingsRow title="Name" description="Enter your full name.">
				<span data-testid="field">fields</span>
			</DashboardSettingsRow>,
		);
		expect(screen.getByText('Name')).toBeTruthy();
		expect(screen.getByText('Enter your full name.')).toBeTruthy();
		expect(screen.getByTestId('field')).toBeTruthy();
	});
});
