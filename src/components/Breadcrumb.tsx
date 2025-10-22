import { usePathname } from "next/navigation";
import {
	Breadcrumb as BreadcrumbUI,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
} from "@/components/ui/breadcrumb";

const Breadcrumb = () => {
	const pathname = usePathname();
	const segments = pathname.split("/").filter(Boolean);

	return (
		<BreadcrumbUI className="text-white font-tstar-bold">
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/" className="text-[#ffffff] opacity-50">
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>
				/
				<BreadcrumbItem>
					<BreadcrumbLink href="/about">About</BreadcrumbLink>
				</BreadcrumbItem>
			</BreadcrumbList>
		</BreadcrumbUI>
	);
};

export default Breadcrumb;
