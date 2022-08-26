import { useLocaleParser } from "@libs/localeParser";
import type { FC } from "react";

import {
	SiAdobepremierepro,
	SiAdobeillustrator,
	SiAdobeaftereffects,
	SiAdobexd,
	SiAdobephotoshop,
} from "react-icons/si";
import { ServiceCard } from "./ServiceCard";

export const Services: FC = () => {
	const parser = useLocaleParser();

	const Services = [
		{
			title: "Adobe Premiere",
			icon: SiAdobepremierepro,
			desc: parser.get("services_desc_1"),
			color: "bg-purple-500",
		},
		{
			title: "Photoshop",
			icon: SiAdobephotoshop,
			desc: parser.get("services_desc_2"),
			color: "bg-blue-500",
		},
		{
			title: "Adobe Illustrator",
			icon: SiAdobeillustrator,
			desc: parser.get("services_desc_3"),
			color: "bg-orange-500",
		},
		{
			title: "After Effects",
			icon: SiAdobeaftereffects,
			desc: parser.get("services_desc_4"),
			color: "bg-fuchsia-500",
		},
		{
			title: "Xd",
			icon: SiAdobexd,
			desc: parser.get("services_desc_5"),
			color: "bg-pink-500",
		},
	];

	return (
		<section className="container mx-autp text-center">
			<div className="flex flex-wrap justify-center space-y-5 sm:space-x-8 sm:space-y-0">
				<div className="bg-white py-6 sm:py-8 lg:py-12">
					<div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
						<div className="mb-10 md:mb-16" id="ourservices">
							<h2 className="text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
								{parser.get("services")}
							</h2>

							<p className="text-gray-800 text-lg md:text-xl font-semibold text-center mx-auto">
								{parser.get("services_text")}
							</p>
						</div>

						<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
							{Services.map((service, idx) => (
								<ServiceCard
									title={service.title}
									desc={service.desc}
									color={service.color}
									icon={service.icon}
									key={idx}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
