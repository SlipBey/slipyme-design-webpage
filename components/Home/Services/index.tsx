import type { FC } from "react";

import {
	SiAdobepremierepro,
	SiAdobeillustrator,
	SiAdobeaftereffects,
	SiAdobexd,
	SiAdobephotoshop,
} from "react-icons/si";

export const Services: FC = () => {
	const Jobs = [
		{
			title: "Adobe Premiere",
			icon: SiAdobepremierepro,
			desc: "Video düzenleme, Montaj, Kurgu",
			color: "bg-purple-500",
		},
		{
			title: "Photoshop",
			icon: SiAdobephotoshop,
			desc: "Fotoğraf düzenleme",
			color: "bg-blue-500",
		},
		{
			title: "Adobe Illustrator",
			icon: SiAdobeillustrator,
			desc: "Logo tasarım, Poster",
			color: "bg-orange-500",
		},
		{
			title: "After Effects",
			icon: SiAdobeaftereffects,
			desc: "Görsel efekt, Hareketli Grafik",
			color: "bg-fuchsia-500",
		},
		{
			title: "Xd",
			icon: SiAdobexd,
			desc: "Arayüz Tasarımı/Deneyimi",
			color: "bg-pink-500",
		},
	];

	return (
		<section className="container mx-autp text-center">
			<div className="flex flex-wrap justify-center space-y-5 sm:space-x-8 sm:space-y-0">
				<div className="bg-white py-6 sm:py-8 lg:py-12">
					<div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
						<div className="mb-10 md:mb-16" id="ourservices">
							<h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
								Hizmet Verdiğimiz Alanlar
							</h2>

							<p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
								Sizinde aşağıdaki dallardan biriyle ilgili
								yardıma ihtiyacınız olduğunda bizi tercih
								edebilirsiniz.
							</p>
						</div>

						<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
							{Jobs.map((job, index) => (
								<div
									className="flex flex-col items-center bg-gray-100 pt-5 pb-5 rounded-lg group"
									key={index}
								>
									<div
										className={`w-12 md:w-14 h-12 md:h-14 flex justify-center items-center rounded-lg md:rounded-xl shadow-lg mb-6 ${job.color} text-white group-hover:rotate-[360deg] duration-500`}
									>
										<job.icon className="w-6 h-6" />
									</div>

									<h3 className="text-lg md:text-xl font-semibold text-center mb-2">
										{job.title}
									</h3>
									<p className="text-gray-500 text-center mb-2 p-2">
										{job.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
