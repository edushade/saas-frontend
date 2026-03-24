import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DashboardPasswordField } from './dashboard-password-field';

describe('DashboardPasswordField', () => {
	it('toggles password visibility when the eye control is activated', () => {
		render(
			<DashboardPasswordField
				id="pw-test"
				label="Password"
				description="Your secret."
			/>,
		);
		const input = screen.getByLabelText('Password') as HTMLInputElement;
		expect(input.type).toBe('password');

		const toggle = screen.getByRole('button', { name: 'Show password' });
		fireEvent.click(toggle);
		expect(input.type).toBe('text');

		fireEvent.click(screen.getByRole('button', { name: 'Hide password' }));
		expect(input.type).toBe('password');
	});
});
