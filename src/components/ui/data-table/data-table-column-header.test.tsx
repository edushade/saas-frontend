import type { Column } from '@tanstack/react-table';
import {
	fireEvent,
	render,
	screen,
	waitFor,
	within,
} from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { DataTableColumnHeader } from './data-table-column-header';

function mockColumn(partial: Partial<Column<unknown, unknown>>): Column<unknown, unknown> {
	return {
		getCanSort: () => false,
		getCanHide: () => false,
		getIsSorted: () => false,
		toggleSorting: () => {},
		toggleVisibility: () => {},
		...partial,
	} as Column<unknown, unknown>;
}

describe('DataTableColumnHeader', () => {
	it('renders a static title when the column cannot sort and cannot hide', () => {
		const column = mockColumn({
			getCanSort: () => false,
			getCanHide: () => false,
		});

		render(<DataTableColumnHeader column={column} title="Status" />);

		expect(screen.getByText('Status')).toBeInTheDocument();
	});

	it('renders hide-only menu when sort is disabled via enableSortingMenu', async () => {
		const toggleVisibility = vi.fn();
		const column = mockColumn({
			getCanSort: () => true,
			getCanHide: () => true,
			toggleVisibility,
		});

		render(
			<DataTableColumnHeader
				column={column}
				title="Email"
				enableSortingMenu={false}
			/>,
		);

		fireEvent.click(screen.getByRole('button', { name: /email/i }));
		const menu = await waitFor(() => screen.getByRole('menu'));
		expect(within(menu).queryByText('Asc')).not.toBeInTheDocument();
		expect(within(menu).getByText('Hide')).toBeInTheDocument();
	});

	it('renders sort-only menu when hide is disabled via enableHidingMenu', async () => {
		const column = mockColumn({
			getCanSort: () => true,
			getCanHide: () => true,
			toggleSorting: vi.fn(),
		});

		render(
			<DataTableColumnHeader
				column={column}
				title="Name"
				enableHidingMenu={false}
			/>,
		);

		fireEvent.click(screen.getByRole('button', { name: /name/i }));
		const menu = await waitFor(() => screen.getByRole('menu'));
		expect(within(menu).getByText('Asc')).toBeInTheDocument();
		expect(within(menu).queryByText('Hide')).not.toBeInTheDocument();
	});
});
