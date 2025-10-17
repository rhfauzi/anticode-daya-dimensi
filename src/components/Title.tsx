import React from "react";
import { ITypeFont } from "../lib/generalTypes";

interface ITitleProps {
	title: string;
	type: ITypeFont["type"];
	description: string;
}

export default function Title(props: ITitleProps) {
	const { title, type, description } = props;

	return (
		<div>
			<h2 className={`${type} text-4xl mb-2`}>{title}</h2>
			<p className="text-[#504B49] text-base mb-13">{description}</p>
		</div>
	);
}
