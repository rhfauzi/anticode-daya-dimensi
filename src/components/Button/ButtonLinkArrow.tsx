import React from "react";
import Link from "next/link";
import Image from "next/image";

const ButtonLinkArrow = ({
	url = "#",
	text = "Read More",
	arrow = true,
	style = {},
	arrowImg = "/icon/arrow-right-red-1.svg",
}: {
	url?: string;
	text: string;
	arrow?: boolean;
	style?: React.CSSProperties;
	arrowImg?: string;
}) => {
	return (
		<Link
			href={url}
			target="_blank"
			className="mt-5 flex items-center btn-action gap-x-2"
			role="button"
			style={{ color: "#B92322", ...style }}
		>
			<span className={`font-tstar-bold text-base`}>{text}</span>
			{arrow && (
				<Image
					src={arrowImg}
					alt="arrow right"
					width={15}
					height={5}
					className="mt-[5px]"
				/>
			)}
		</Link>
	);
};

export default ButtonLinkArrow;
