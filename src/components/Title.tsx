import React, { ReactNode } from "react";

interface ITitleProps {
	styleCss?: React.CSSProperties;
	children?: String | ReactNode;
	className?: String;
	title: String;
}

export default function Title(props: ITitleProps) {
	const { title, styleCss, children, className } = props;

	return (
		<div
			style={{ color: "#ffffff", fontSize: "42px", ...styleCss }}
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
