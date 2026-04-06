import { Clock, Globe, LogOut, MapPin, ShieldCheck } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	DEMO_SESSIONS,
	type DemoSession,
	getSessionSummaryStats,
} from '@/data/demo-sessions';
import { cn } from '@/lib/utils';
import SaasDashboardHeader from './saas-dashboard-header';
import { SessionDeviceIcon } from './sessions/session-device-icon';
import { SessionStatCard } from './sessions/session-stat-card';

function SessionStatusBadge({ status }: { status: DemoSession['status'] }) {
	const isActive = status === 'active';
	return (
		<span
			className={cn(
				'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium',
				isActive
					? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400'
					: 'bg-bg-tertiary text-text-secondary',
			)}
		>
			<span
				className={cn(
					'size-1.5 rounded-full',
					isActive ? 'bg-emerald-500' : 'bg-text-tertiary',
				)}
				aria-hidden
			/>
			{isActive ? 'Active' : 'Idle'}
		</span>
	);
}

type SessionMetaRowProps = {
	location: string;
	ip: string;
	activityLabel: string;
	className?: string;
};

function SessionMetaRow({
	location,
	ip,
	activityLabel,
	className,
}: SessionMetaRowProps) {
	return (
		<div
			className={cn(
				'flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-tertiary',
				className,
			)}
		>
			<span className="inline-flex items-center gap-1">
				<MapPin className="size-3.5 shrink-0" aria-hidden />
				{location}
			</span>
			<span className="inline-flex items-center gap-1">
				<Globe className="size-3.5 shrink-0" aria-hidden />
				{ip}
			</span>
			<span className="inline-flex items-center gap-1">
				<Clock className="size-3.5 shrink-0" aria-hidden />
				{activityLabel}
			</span>
		</div>
	);
}

type OtherSessionRowProps = {
	session: DemoSession;
	onRevoke: (id: string) => void;
};

function OtherSessionRow({ session, onRevoke }: OtherSessionRowProps) {
	return (
		<div className="flex flex-col gap-3 border-b border-border-secondary py-5 last:border-b-0 sm:flex-row sm:items-start sm:gap-4">
			<SessionDeviceIcon deviceType={session.deviceType} />
			<div className="min-w-0 flex-1 space-y-2">
				<div className="flex flex-wrap items-center gap-2">
					<p className="text-sm font-semibold text-text-primary">
						{session.deviceName}
					</p>
					<SessionStatusBadge status={session.status} />
				</div>
				<p className="text-text-secondary text-sm">{session.browserOs}</p>
				<SessionMetaRow
					location={session.location}
					ip={session.ip}
					activityLabel={session.activityLabel}
				/>
			</div>
			<div className="flex shrink-0 flex-col items-stretch gap-2 sm:items-end">
				<Button
					type="button"
					variant="outline"
					className="border-destructive/40 text-destructive hover:bg-destructive/10"
					onClick={() => onRevoke(session.id)}
				>
					<LogOut className="size-4" aria-hidden />
					Revoke
				</Button>
				<p className="text-text-tertiary text-right text-xs">
					Signed in {session.signedInLabel}
				</p>
			</div>
		</div>
	);
}

export function SaasSessionsPage() {
	const [sessions, setSessions] = useState<readonly DemoSession[]>(() => [
		...DEMO_SESSIONS,
	]);

	const stats = useMemo(() => getSessionSummaryStats(sessions), [sessions]);

	const current = useMemo(
		() => sessions.find((s) => s.isCurrent) ?? sessions[0],
		[sessions],
	);

	const others = useMemo(
		() => sessions.filter((s) => !s.isCurrent),
		[sessions],
	);

	const handleRevoke = (id: string) => {
		setSessions((prev) => prev.filter((s) => s.id !== id));
	};

	const handleRevokeAllOther = () => {
		setSessions((prev) => prev.filter((s) => s.isCurrent));
	};

	return (
		<div className="mx-auto flex w-full max-w-full flex-col gap-3 md:gap-4">
			<SaasDashboardHeader
				actions={
					<Button
						type="button"
						variant="outline"
						className="border-destructive/40 text-destructive hover:bg-destructive/10 w-full sm:w-auto"
						onClick={handleRevokeAllOther}
						disabled={others.length === 0}
					>
						<LogOut className="size-4" aria-hidden />
						Revoke all other
					</Button>
				}
			/>

			<div className="flex flex-col gap-6 max-w-[1151px] w-full mx-auto">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
					<SessionStatCard
						label="Total Sessions"
						value={String(stats.totalSessions)}
						subLabel="Across all devices"
					/>
					<SessionStatCard
						label="Active Now"
						value={String(stats.activeNow)}
						subLabel="Currently online"
					/>
					<SessionStatCard
						label="Locations"
						value={String(stats.uniqueLocations)}
						subLabel="Unique locations"
					/>
				</div>

				{current ? (
					<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
						<CardHeader className="border-b border-border-secondary">
							<CardTitle className="text-sm font-semibold text-text-primary">
								Current Session
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
								<div className="flex min-w-0 gap-4">
									<SessionDeviceIcon
										deviceType={current.deviceType}
										highlight
									/>
									<div className="min-w-0 space-y-2">
										<div className="flex flex-wrap items-center gap-2">
											<p className="text-sm font-semibold text-text-primary">
												{current.deviceName}
											</p>
											<SessionStatusBadge status={current.status} />
										</div>
										<p className="text-text-secondary text-sm">
											{current.browserOs}
										</p>
										<SessionMetaRow
											location={current.location}
											ip={current.ip}
											activityLabel={current.activityLabel}
										/>
									</div>
								</div>
								<p className="text-text-tertiary shrink-0 text-xs sm:text-right">
									Signed in {current.signedInLabel}
								</p>
							</div>
						</CardContent>
					</Card>
				) : null}

				<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
					<CardHeader className="border-b border-border-secondary">
						<CardTitle className="text-sm font-semibold text-text-primary">
							Other Sessions
						</CardTitle>
					</CardHeader>
					<div className="">
						{others.length === 0 ? (
							<p className="text-text-secondary py-6 text-sm">
								No other active sessions.
							</p>
						) : (
							others.map((session) => (
								<CardContent
									key={session.id}
									className="border-b border-border-secondary last:border-b-0"
								>
									<OtherSessionRow session={session} onRevoke={handleRevoke} />
								</CardContent>
							))
						)}
					</div>
				</Card>

				<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
					<CardContent className="flex gap-4">
						<div className="text-brand-300 shrink-0">
							<ShieldCheck className="size-8" aria-hidden />
						</div>
						<div className="space-y-1">
							<p className="text-sm font-semibold text-text-primary">
								Keep your account secure
							</p>
							<p className="text-text-secondary text-sm leading-relaxed">
								If you see a session you don&apos;t recognize, revoke it
								immediately and change your password. Enable two-factor
								authentication for added protection.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
