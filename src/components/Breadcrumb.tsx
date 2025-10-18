import Link from "next/link";
import { usePathname } from "next/navigation";
import { capitalizeWords } from "@/lib/utils";

const Breadcrumb = ({ className }: { className?: string }) => {
	const pathname = usePathname();
	const segments = pathname.split("/").filter(Boolean);

	return (
		<nav
			className={`flex items-center text-[18px] text-gray-500 space-x-1 ${className}`}
		>
			<Link
				href="/"
				className="text-[#ffffff] opacity-80 hover:text-[#8B0B04] transition"
			>
				Home
			</Link>

			{segments.map((segment, index) => {
				const href = "/" + segments.slice(0, index + 1).join("/");
				const isLast = index === segments.length - 1;

				return (
					<div key={href} className="flex items-center space-x-1">
						<span>/</span>
						{isLast ? (
							<span className="text-[#ffffff] font-medium">
								{capitalizeWords(segment)}
							</span>
						) : (
							<Link href={href} className="hover:text-[#8B0B04] transition">
								{capitalizeWords(segment)}
							</Link>
						)}
					</div>
				);
			})}
		</nav>
	);
};

export default Breadcrumb;
