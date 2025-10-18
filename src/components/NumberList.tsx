import React from "react";

const HeaderDescription = ({
	dataSource = [],
	titleSize = "text-[36px]",
	descSize = "text-[16px]",
}: {
	dataSource?: Array<{ title: string; desc: string }>;
	titleSize?: string;
	descSize?: string;
}) => {
	return (
		<React.Fragment>
			{dataSource.map((item, index) => (
				<div key={index}>
					<p className={`text-[#B92322] ${titleSize} mb-2 font-tstar-light`}>
						{item.title}
					</p>
					<p className={`text-[#00000066] ${descSize}`}>{item.desc}</p>
				</div>
			))}
		</React.Fragment>
	);
};

export default HeaderDescription;
