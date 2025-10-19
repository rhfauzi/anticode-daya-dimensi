import React, { ReactNode } from "react";

interface ITitleProps {
	title: string;
	style?: React.CSSProperties;
	children?: String | ReactNode;
	className?: String;
}

export default function Title(props: ITitleProps) {
	const { title, style, children, className } = props;

	return (
		<div
			style={{ color: "#ffffff", fontSize: "42px", ...style }}
			className={`${className}`}
		>
			<h1
				className={`mb-2 color-[#ffffff] font-tstar-light leading-[64px] font-[400]`}
				dangerouslySetInnerHTML={{ __html: title }}
			/>

			{children}
		</div>
	);
}
