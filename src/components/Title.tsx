import React from "react";
import { ITypeFont } from "../lib/generalTypes";

interface ITitleProps {
	title: string;
	type: ITypeFont["type"];
	description: string;
	style: any;
}

export default function Title(props: ITitleProps) {
	const { title, type, description, style } = props;

	return (
		<div style={style}>
			<h2 className={`${type} text-4xl mb-2`}>{title}</h2>
			<p className="text-[#504B49] text-base mb-13">{description}</p>
		</div>
	);
}
