import type { Row } from '@tanstack/react-table';
import { describe, expect, it } from 'vitest';

import { auditLogGlobalFilterFn } from './audit-log-global-filter';
import type { AuditLogRow } from './audit-log-mock';

function rowOf(r: AuditLogRow): Row<AuditLogRow> {
	return { original: r } as Row<AuditLogRow>;
}

const sample: AuditLogRow = {
	id: 'audit-00001',
	event: 'Signed in',
	type: 'Auth',
	actedBy: 'Alexandra Smith',
	email: 'alex.smith@company.com',
	role: 'Admin',
	ipAddress: '192.168.1.12',
	dateIso: '2025-05-11T11:15:00.000Z',
};

describe('auditLogGlobalFilterFn', () => {
	it('returns true when filter is empty', () => {
		expect(auditLogGlobalFilterFn(rowOf(sample), 'g', '')).toBe(true);
	});

	it('matches event text', () => {
		expect(auditLogGlobalFilterFn(rowOf(sample), 'g', 'signed')).toBe(true);
	});

	it('matches email and IP', () => {
		expect(auditLogGlobalFilterFn(rowOf(sample), 'g', 'alex.smith')).toBe(true);
		expect(auditLogGlobalFilterFn(rowOf(sample), 'g', '192.168')).toBe(true);
	});

	it('returns false when nothing matches', () => {
		expect(auditLogGlobalFilterFn(rowOf(sample), 'g', 'zzznope')).toBe(false);
	});
});
