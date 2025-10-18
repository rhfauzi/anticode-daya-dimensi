export default function FooterBottom() {
	return (
		<div className="px-32 py-6 flex justify-between max-md:p-5 max-md:flex-col max-md:gap-y-5 max-md:justify-center max-md:items-center">
			<p className="text-white text-sm max-md:text-center">
				Copyright &#64; 2022 Daya Dimensi Indonesia. Website crafted by
				Antikode.
			</p>
			<div className="flex gap-x-3">
				<a
					href="/privacy-policy"
					target="_blank"
					className={`font-tstar-bold text-white text-sm`}
				>
					Privacy Policy
				</a>
				<span className={`font-tstar-bold text-white text-sm`}>|</span>
				<a
					href="/terms-and-conditions"
					target="_blank"
					className={`font-tstar-bold text-white text-sm`}
				>
					Terms & Conditions
				</a>
			</div>
		</div>
	);
}
