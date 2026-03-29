export type GrowthChartPoint = { date: string; value: number };

/** Demo series: learner growth index (0–400% scale) for the trends chart. */
export const USAGE_GROWTH_CHART_DATA: readonly GrowthChartPoint[] = [
	{ date: 'Jul 12', value: 48 },
	{ date: 'Jul 13', value: 72 },
	{ date: 'Jul 14', value: 95 },
	{ date: 'Jul 15', value: 128 },
	{ date: 'Jul 16', value: 165 },
	{ date: 'Jul 17', value: 200 },
	{ date: 'Jul 18', value: 248 },
	{ date: 'Jul 19', value: 302 },
	{ date: 'Jul 20', value: 360 },
];

export const USAGE_GROWTH_CHART_HIGHLIGHT = {
	date: 'Jul 17',
	value: 200,
} as const;
