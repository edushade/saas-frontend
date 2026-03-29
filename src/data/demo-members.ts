export type MemberAuthProvider = 'google' | 'github' | 'email';

export type DemoMemberRow = {
	id: string;
	name: string | null;
	email: string;
	auth: MemberAuthProvider | null;
	role: string | null;
	joinedLabel: string;
	pending: boolean;
};

/** Static demo rows for the members table until APIs exist. */
export const DEMO_MEMBERS: readonly DemoMemberRow[] = [
	{
		id: '1',
		name: 'Alexandra Smith',
		email: 'alexandra.smith@example.com',
		auth: 'google',
		role: 'Owner',
		joinedLabel: 'April 22, 2025',
		pending: false,
	},
	{
		id: '2',
		name: 'Jordan Lee',
		email: 'jordan.lee@example.com',
		auth: 'github',
		role: 'Member',
		joinedLabel: 'March 3, 2025',
		pending: false,
	},
	{
		id: '3',
		name: null,
		email: 'invite.pending@example.com',
		auth: null,
		role: null,
		joinedLabel: 'Invitation Pending...',
		pending: true,
	},
	{
		id: '4',
		name: 'Sam Rivera',
		email: 'sam.rivera@example.com',
		auth: 'email',
		role: 'Member',
		joinedLabel: 'February 14, 2025',
		pending: false,
	},
];
