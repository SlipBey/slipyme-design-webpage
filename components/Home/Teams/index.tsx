import type { FC } from "react";
import { TeamsCard } from "@components/Home/Teams/TeamsCard";
import { CONFIG } from "@libs/config";

export const Teams: FC = () => {
	return (
		<section className="container mx-auto text-center">
			<div className="bg-white py-6 sm:py-8 lg:py-12">
				<div className="max-w-screen-xl px-4 md:px-8 mx-auto">
					<div className="mb-10 md:mb-16" id="our-team">
						<h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
							Slipyme Tasarım Ekibi
						</h2>

						<p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
							Olabildiğince kaliteli içerikler sunan kişileri
							ekibimizde barındırmandan gurur duyarız.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8">
						{CONFIG.Teams.map((team, index) => (
							<TeamsCard key={index} {...team} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
