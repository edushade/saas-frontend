import { useId } from 'react';
import {
	Area,
	AreaChart,
	CartesianGrid,
	ReferenceDot,
	ReferenceLine,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	USAGE_GROWTH_CHART_DATA,
	USAGE_GROWTH_CHART_HIGHLIGHT,
} from './usage-growth-chart-data';

export function UsageBreakdownGrowthChart() {
	const gradId = useId().replace(/:/g, '');

	return (
		<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
			<CardHeader className="flex flex-row flex-wrap items-start justify-between gap-3 space-y-0">
				<div className="space-y-1">
					<CardTitle className="text-sm font-semibold text-text-primary">
						Growth &amp; Engagement Trends
					</CardTitle>
				</div>
				<span className="shrink-0 rounded-full border-0  px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
					+103% Learners Growth
				</span>
			</CardHeader>
			<CardContent className="px-4 pb-4 pt-5 sm:px-6">
				<div className="text-text-primary h-[280px] w-full text-xs">
					<ResponsiveContainer width="100%" height="100%">
						<AreaChart
							data={Array.from(USAGE_GROWTH_CHART_DATA)}
							margin={{ top: 16, right: 12, left: 0, bottom: 0 }}
						>
							<defs>
								<linearGradient
									id={`growthFill-${gradId}`}
									x1="0"
									y1="0"
									x2="0"
									y2="1"
								>
									<stop
										offset="5%"
										stopColor="var(--brand-300)"
										stopOpacity={0.35}
									/>
									<stop
										offset="95%"
										stopColor="var(--brand-300)"
										stopOpacity={0}
									/>
								</linearGradient>
							</defs>
							<CartesianGrid
								strokeDasharray="4 4"
								vertical={false}
								className="stroke-border-secondary"
							/>
							<XAxis
								dataKey="date"
								tickLine={false}
								axisLine={false}
								tick={{ fill: 'var(--text-tertiary)', fontSize: 11 }}
								dy={6}
							/>
							<YAxis
								domain={[0, 400]}
								ticks={[0, 100, 200, 300, 400]}
								tickFormatter={(v) => `${v}%`}
								tickLine={false}
								axisLine={false}
								tick={{ fill: 'var(--text-tertiary)', fontSize: 11 }}
								width={44}
							/>
							<ReferenceLine
								x={USAGE_GROWTH_CHART_HIGHLIGHT.date}
								stroke="var(--text-quaternary)"
								strokeDasharray="4 4"
							/>
							<Tooltip
								cursor={{
									stroke: 'var(--border-secondary)',
									strokeDasharray: '4 4',
								}}
								contentStyle={{
									borderRadius: '8px',
									border: '1px solid var(--border-secondary)',
									fontSize: '12px',
								}}
								formatter={(v: number | string) => [`${v}%`, 'Index']}
								labelStyle={{ color: 'var(--text-secondary)' }}
							/>
							<Area
								type="monotone"
								dataKey="value"
								stroke="var(--brand-300)"
								strokeWidth={2}
								fill={`url(#growthFill-${gradId})`}
								dot={false}
								activeDot={{ r: 5, fill: 'var(--brand-300)' }}
							/>
							<ReferenceDot
								x={USAGE_GROWTH_CHART_HIGHLIGHT.date}
								y={USAGE_GROWTH_CHART_HIGHLIGHT.value}
								r={5}
								fill="var(--brand-300)"
								stroke="var(--bg-primary)"
								strokeWidth={2}
								label={{
									value: `${USAGE_GROWTH_CHART_HIGHLIGHT.value}%`,
									position: 'top',
									offset: 8,
									fill: 'var(--text-primary)',
									fontSize: 12,
									fontWeight: 600,
								}}
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
}
