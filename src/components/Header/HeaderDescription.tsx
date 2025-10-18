import React from "react";
import Image from "next/image";
import { scrollToId } from "@/lib/utils";

const HeaderDescription = () => {
	return (
		<React.Fragment>
			<div className="bg-white px-10 py-11 flex gap-x-16 w-fit max-md:flex-col max-md:w-full max-md:justify-center max-md:items-center max-md:text-center max-md:gap-y-8">
				<div
					className="flex flex-col items-center gap-y-2 btn-action"
					role="button"
				>
					<a onClick={() => scrollToId("expertise")}>
						<span className="text-[#00000066] text-xs font-bold text-discover">
							DISCOVER
						</span>
						<Image
							src="/icon/arrow-down-black-xs.svg"
							width={9}
							height={3}
							alt="arrow down black xs"
						/>
					</a>
				</div>
				<div>
					<p className={`text-[#B92322] text-4xl mb-2 font-tstar-light`}>
						24+ Years
					</p>
					<p className="text-[#00000066] text-base">Experience</p>
				</div>
				<div>
					<p className={`text-[#B92322] text-4xl mb-2 font-tstar-light`}>
						50.000+
					</p>
					<p className="text-[#00000066] text-base">Executive Clients</p>
				</div>
				<div>
					<p className={`text-[#B92322] text-4xl mb-2 font-tstar-light`}>
						400+
					</p>
					<p className="text-[#00000066] text-base">Organization Clients</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default HeaderDescription;
