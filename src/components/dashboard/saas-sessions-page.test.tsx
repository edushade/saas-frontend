import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SaasSessionsPage } from './saas-sessions-page';

vi.mock('./saas-dashboard-header', () => ({
	default: () => <div data-testid="dashboard-header-placeholder" />,
}));

describe('SaasSessionsPage', () => {
	it('renders summary, current session, and security notice', () => {
		render(<SaasSessionsPage />);
		expect(screen.getByText('Total Sessions')).toBeTruthy();
		expect(screen.getByText('Active Now')).toBeTruthy();
		expect(screen.getByText('Locations')).toBeTruthy();
		expect(screen.getByRole('heading', { name: 'Current Session' })).toBeTruthy();
		expect(screen.getByRole('heading', { name: 'Other Sessions' })).toBeTruthy();
		expect(screen.getByText('Keep your account secure')).toBeTruthy();
	});

	it('disables Revoke all other when no other sessions remain', () => {
		render(<SaasSessionsPage />);
		const revokeAll = screen.getByRole('button', { name: /Revoke all other/i });
		for (let i = 0; i < 4; i++) {
			const rowButtons = screen.queryAllByRole('button', { name: /^Revoke$/ });
			if (rowButtons.length === 0) break;
			fireEvent.click(rowButtons[0] as HTMLElement);
		}
		expect((revokeAll as HTMLButtonElement).disabled).toBe(true);
	});
});
