export type AuditLogType =
	| 'Auth'
	| 'Billing'
	| 'Team'
	| 'Security'
	| 'Settings';

export interface AuditLogRow {
	id: string;
	event: string;
	type: AuditLogType;
	actedBy: string;
	email: string;
	role: 'Admin' | 'Member';
	ipAddress: string;
	/** ISO 8601 */
	dateIso: string;
}

const PEOPLE = [
	{
		name: 'Alexandra Smith',
		email: 'alex.smith@company.com',
		role: 'Admin' as const,
	},
	{
		name: 'Jordan Lee',
		email: 'jordan.lee@company.com',
		role: 'Admin' as const,
	},
	{
		name: 'Sam Rivera',
		email: 'sam.rivera@company.com',
		role: 'Member' as const,
	},
	{
		name: 'Taylor Chen',
		email: 'taylor.chen@company.com',
		role: 'Member' as const,
	},
] as const;

const EVENT_BLUEPRINTS: { event: string; type: AuditLogType }[] = [
	{ event: 'Signed in', type: 'Auth' },
	{ event: 'Invited team member', type: 'Team' },
	{ event: 'Failed login attempt (3x)', type: 'Security' },
	{ event: 'Changed billing email', type: 'Billing' },
	{ event: 'Enabled two-factor auth', type: 'Security' },
	{ event: 'Removed team member', type: 'Team' },
	{ event: 'Regenerated API key', type: 'Settings' },
	{ event: 'Exported usage report', type: 'Settings' },
	{ event: 'Signed out', type: 'Auth' },
	{ event: 'Payment method updated', type: 'Billing' },
	{ event: 'Updated organization profile', type: 'Settings' },
	{ event: 'Role changed for member', type: 'Team' },
	{ event: 'Password reset requested', type: 'Auth' },
	{ event: 'Invoice viewed', type: 'Billing' },
];

const IPS = [
	'192.168.1.12',
	'10.0.0.44',
	'172.16.0.8',
	'203.0.113.9',
	'198.51.100.21',
];

function buildRows(count: number): AuditLogRow[] {
	const base = new Date('2025-05-15T15:30:00.000Z');
	const rows: AuditLogRow[] = [];
	for (let i = 0; i < count; i++) {
		const bp = EVENT_BLUEPRINTS[i % EVENT_BLUEPRINTS.length];
		const person = PEOPLE[i % PEOPLE.length];
		const d = new Date(base);
		d.setMinutes(d.getMinutes() - i * 47 - (i % 13) * 60);
		rows.push({
			id: `audit-${String(i + 1).padStart(5, '0')}`,
			event: bp.event,
			type: bp.type,
			actedBy: person.name,
			email: person.email,
			role: person.role,
			ipAddress: IPS[i % IPS.length],
			dateIso: d.toISOString(),
		});
	}
	return rows;
}

/** Demo audit log rows (~7 pages at 10/page). */
export const MOCK_AUDIT_LOG_ROWS: AuditLogRow[] = buildRows(68);
