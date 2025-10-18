import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className={`fixed top-0 left-0 right-0 z-50`}>
			<div
				className={`transition-all duration-100 text-white flex justify-between items-center px-32 py-4 bg-[#2F2A2A]`}
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
					<li
						className={`font-tstar nav-item text-lg text-[#FFFFFFCC] font-tstar-bold`}
					>
						<Link href="/" className={"text-white active-link"}>
							Home
						</Link>
					</li>
					<li
						className={` font-tstar nav-item text-lg text-[#FFFFFFCC] font-tstar-bold`}
					>
						<Link href="/about" className={`text-white`}>
							About
						</Link>
					</li>
					<li
						className={` font-tstar nav-item text-lg text-[#FFFFFFCC] font-tstar-bold`}
					>
						<Link href="/expertise" className={`text-white`}>
							Expertise
						</Link>
					</li>
					<li
						className={` font-tstar nav-item text-lg text-[#FFFFFFCC] font-tstar-bold`}
					>
						<Link href="/program" className={`text-white`}>
							Program
						</Link>
					</li>
					<li
						className={` font-tstar nav-item text-lg text-[#FFFFFFCC] font-tstar-bold`}
					>
						<Link href="/odyssey" className={`text-white`}>
							Odyssey
						</Link>
					</li>
					<li
						className={` font-tstar nav-item text-lg text-[#FFFFFFCC] font-tstar-bold`}
					>
						<Link href="/news" className={`text-white`}>
							News
						</Link>
					</li>
					<li
						className={` font-tstar nav-item text-lg text-[#FFFFFFCC] font-tstar-bold`}
					>
						<Link href="/contact" className={`text-white`}>
							Contact
						</Link>
					</li>
					<li
						className={` font-tstar nav-item text-lg text-[#FFFFFFCC] font-tstar-bold`}
					>
						<Link href="/career" className={`text-white`}>
							Career
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
