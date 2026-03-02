import type { SVGProps } from "react";

export const CheckRightIcon = ({
	className,
	...props
}: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		className={className}
		{...props}
	>
		<path
			d="M5 14L8.5 17.5L19 6.5"
			stroke="#7B7B7B"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const CheckPlainIcon = ({
	className,
	...props
}: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		className={className}
		{...props}
	>
		<path
			d="M3.5 9V14C3.5 17.7712 3.5 19.6569 4.67157 20.8284C5.84315 22 7.72876 22 11.5 22H12.5C16.2712 22 18.1569 22 19.3284 20.8284C20.5 19.6569 20.5 17.7712 20.5 14V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H12"
			stroke="#0066FF"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			opacity={0.4}
			d="M13.5 17H17.5"
			stroke="#0066FF"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			opacity={0.4}
			d="M13.5 7H17.5"
			stroke="#0066FF"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			opacity={0.4}
			d="M13.5 12H17.5"
			stroke="#0066FF"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			opacity={0.4}
			d="M6.5 16.5C6.5 16.5 7.46758 16.7672 8 18C8 18 9 15 11 14"
			stroke="#0066FF"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M10 5H3.5M10 5C10 4.15973 7.67332 2.58984 7.08333 2M10 5C10 5.84027 7.67331 7.41016 7.08333 8"
			stroke="#0066FF"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const CheckBoldIcon = ({
	className,
	...props
}: SVGProps<SVGSVGElement>) => (
	<svg
		width={8}
		height={8}
		viewBox="0 0 8 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		className={className}
		{...props}
	>
		<path
			d="M1.33301 4L2.99967 5.66667L6.66634 2"
			stroke="#0066FF"
			strokeWidth={1.5}
		/>
	</svg>
);

export const CheckCircleIcon = ({
	className,
	...props
}: SVGProps<SVGSVGElement>) => (
	<svg
		width={20}
		height={20}
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		aria-hidden="true"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M18.3327 10C18.3327 14.6024 14.6017 18.3334 9.99935 18.3334C5.39698 18.3334 1.66602 14.6024 1.66602 10C1.66602 5.39765 5.39698 1.66669 9.99935 1.66669C14.6017 1.66669 18.3327 5.39765 18.3327 10ZM13.358 7.47475C13.602 7.71882 13.602 8.11455 13.358 8.35863L9.19129 12.5253C8.94721 12.7694 8.55148 12.7694 8.30741 12.5253L6.64074 10.8586C6.39666 10.6146 6.39666 10.2188 6.64074 9.97474C6.88482 9.73067 7.28055 9.73067 7.52462 9.97474L8.74935 11.1995L10.6117 9.33711L12.4741 7.47475C12.7182 7.23067 13.1139 7.23067 13.358 7.47475Z"
			fill="#00B262"
		/>
	</svg>
);
export default CheckCircleIcon;
