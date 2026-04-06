import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SessionDeviceIcon } from './session-device-icon';

describe('SessionDeviceIcon', () => {
	it('renders without throwing for each device type', () => {
		const { rerender, container } = render(
			<SessionDeviceIcon deviceType="laptop" />,
		);
		expect(container.querySelector('svg')).toBeTruthy();
		rerender(<SessionDeviceIcon deviceType="phone" highlight />);
		expect(container.querySelector('svg')).toBeTruthy();
	});
});
