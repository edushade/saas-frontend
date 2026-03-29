import { describe, expect, it } from 'vitest';
import { filterMembersBySearch } from './filter-members-by-search';

const rows = [
	{ id: '1', name: 'Alexandra Smith', email: 'alex@example.com' },
	{ id: '2', name: null, email: 'pending@example.com' },
	{ id: '3', name: 'Bob Jones', email: 'bob@company.org' },
];

describe('filterMembersBySearch', () => {
	it('returns all rows for empty or whitespace query', () => {
		expect(filterMembersBySearch(rows, '')).toEqual(rows);
		expect(filterMembersBySearch(rows, '   ')).toEqual(rows);
	});

	it('matches email when name is null', () => {
		expect(filterMembersBySearch(rows, 'pending')).toEqual([rows[1]]);
	});

	it('matches name substring case-insensitively', () => {
		expect(filterMembersBySearch(rows, 'alex')).toEqual([rows[0]]);
		expect(filterMembersBySearch(rows, 'JONES')).toEqual([rows[2]]);
	});
});
