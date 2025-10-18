import React from "react";
import Image from "next/image";

const ImageList = ({
	items,
}: {
	items: {
		src: string;
		title: string;
		alt: string;
		width: any;
		height: number;
		link: string;
	}[];
}) => {
	return (
		<React.Fragment>
			{items.map((item) => (
				<a
					key={item.alt}
					href={item.link ? item.link : "#"}
					title={item.title ?? item.alt}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						key={item.alt}
						src={item.src}
						className="object-contain"
						alt={item.alt}
						width={item.width}
						height={item.height}
						style={{ width: "100%" }}
					/>
				</a>
			))}
		</React.Fragment>
	);
};

export default ImageList;
