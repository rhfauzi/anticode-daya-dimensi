import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavListItems } from "@/const/dummyData";

const Navbar = () => {
	const pathname = usePathname();
	const [navBg, setNavBg] = React.useState("bg-transparent");
	const [navColor, setNavColor] = React.useState(
		pathname === "/about" ? "text-[#000000]" : "text-[#ffffff]"
	);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setNavBg("bg-[#2F2A2A]");
				setNavColor("text-[#ffffff]");
			} else {
				setNavBg("bg-transparent");
				setNavColor(
					pathname === "/about" ? "text-[#000000]" : "text-[#ffffff]"
				);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50`}>
			<div
				className={`flex justify-between items-center px-32 py-4 transition-all duration-50 ease-in-out  ${navBg} ${navColor}`}
			>
				<Link href="/">
					<Image
						src="/logo/logo_daya_dimensi.png"
						alt="logo"
						width={160}
						height={50}
					/>
				</Link>
				<ul className="flex gap-x-10">
					{NavListItems.map((item) => (
						<li key={item.href} className={` font-tstar-bold nav-item text-lg`}>
							<Link
								href={item.href}
								className={`${pathname === item.href ? "active-link" : ""}`}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
