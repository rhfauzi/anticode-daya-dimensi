import React from "react";
import Image from "next/image";
import Link from "next/link";

const ReadMore = ({
	url = "#",
	text = "Read More",
	arrow = true,
}: {
	url?: string;
	text: string;
	arrow?: boolean;
}) => {
	return (
		<Link
			href={url}
			target="_blank"
			className="mt-5 flex items-center btn-action gap-x-2"
			role="button"
		>
			<span className={`font-tstar-bold text-base text-[#B92322]`}>{text}</span>
			{arrow && (
				<Image
					src="/icon/arrow-right-red-1.svg"
					alt="arrow right"
					width={15}
					height={5}
					className="mt-[5px]"
				/>
			)}
		</Link>
	);
};

export default ReadMore;
