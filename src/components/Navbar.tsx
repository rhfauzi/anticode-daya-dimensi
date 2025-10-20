import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavListItems } from "@/const/dummyData";

const Navbar = () => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const [navBg, setNavBg] = useState("bg-transparent");
	const [navColor, setNavColor] = useState(
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
	}, [pathname]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				setOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 max-md:bg-[#2F2A2A]`}>
			<div
				className={`flex justify-between items-center px-32 py-4 transition-all duration-50 ease-in-out  ${navBg} ${navColor} max-md:px-5`}
			>
				<Link href="/">
					<Image
						src="/logo/logo_daya_dimensi.png"
						alt="logo"
						width={160}
						height={50}
					/>
				</Link>

				{/* Tombol Mobile */}
				<button
					className={`md:hidden pr-5`}
					onClick={() => setOpen(!open)}
					aria-label="Toggle menu"
				>
					{open ? <X size={24} /> : <Menu size={24} />}
				</button>

				<ul className="flex gap-x-10 max-md:hidden">
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

			{/* Menu Mobile */}
			{open && (
				<ul className={`flex gap-x-10 flex-col bg-[#2F2A2A] max-md:block`}>
					{NavListItems.map((item) => (
						<li
							key={item.href}
							className={`font-tstar-bold nav-item text-lg px-8 hover:text-[#ffffff]`}
						>
							<Link
								href={item.href}
								className={`${pathname === item.href ? "text-[#ffffff]" : ""}`}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
