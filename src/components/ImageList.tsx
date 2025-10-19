import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IImageProps {
	src: string;
	title?: string;
	alt?: string;
	width?: number;
	height?: number;
	link?: string;
	className?: string;
	style?: React.CSSProperties;
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
						sizes="100vw"
						className="object-contain"
						alt={item.alt ?? ""}
						width={item.width ?? 10}
						height={item.height ?? 10}
						style={{ width: "100%", ...item.style }}
					/>
				</Link>
			))}
		</React.Fragment>
	);
};

export default ImageList;
