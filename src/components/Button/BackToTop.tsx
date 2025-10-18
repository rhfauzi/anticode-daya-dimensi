import React, { useEffect, useState } from "react";
import Image from "next/image";
import { scrollToTop } from "@/lib/utils";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<>
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="fixed w-[56px] h-[56px] bg-[#B92322] bottom-6 right-6 z-50 rounded-full flex justify-center items-center text-white shadow-lg transition-all"
					aria-label="Back to top"
				>
					<Image
						src="/icon/arrow-up-white-1.svg"
						alt="Arrow Up"
						width={10}
						height={10}
					/>
				</button>
			)}
		</>
	);
};

export default BackToTop;
