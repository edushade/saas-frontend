import { useId } from "react";

export const XIcon = ({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) => (
	<svg
		width={19}
		height={20}
		viewBox="0 0 19 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		{...props}
	>
		<g clipPath="url(#clip0_29746_263)">
			<path
				d="M11.1559 8.4621L18.1342 0H16.4806L10.4213 7.34752L5.5818 0H0L7.31829 11.1107L0 19.9846H1.65373L8.05246 12.2253L13.1633 19.9846H18.7451L11.1555 8.4621H11.1559ZM8.8909 11.2086L8.1494 10.1023L2.24959 1.29867H4.78962L9.55084 8.40345L10.2923 9.50983L16.4814 18.7449H13.9413L8.8909 11.2091V11.2086Z"
				fill="#9B9B9B"
			/>
		</g>
		<defs>
			<clipPath id={useId()}>
				<rect width={18.7451} height={19.9948} fill="white" />
			</clipPath>
		</defs>
	</svg>
);
