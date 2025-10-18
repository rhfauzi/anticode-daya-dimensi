import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IImageProps {
	src: string;
	title?: string;
	alt?: string;
	width?: any;
	height?: number;
	link?: string;
	className?: string;
}

const ImageList = ({ items }: { items: IImageProps[] }) => {
	return (
		<React.Fragment>
			{items.map((item) => (
				<Link
					key={item.alt}
					href={item.link ? item.link : "#"}
					title={item.title ?? item.alt}
					target="_blank"
					rel="noopener noreferrer"
					className={item.className}
				>
					<Image
						key={item.alt}
						src={item.src}
						className="object-contain"
						alt={item.alt ?? ""}
						width={item.width ?? 10}
						height={item.height ?? 10}
						style={{ width: "100%" }}
					/>
				</Link>
			))}
		</React.Fragment>
	);
};

export default ImageList;
