import type { FC } from "react";

export const About: FC = () => {
	return (
		<section className="container mx-autp text-center">
			<div className="flex flex-wrap justify-center space-y-5 sm:space-x-8 sm:space-y-0">
				<div className="max-w-screen-2xl px-4 md:px-8 mx-auto p-8">
					<div className="mb-10 md:mb-16" id="whoarewe">
						<h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
							Tasarımlarda Başka Seviye
						</h2>

						<p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
							Olabildiğince kaliteli işler ortaya çıkartmak
							amacıyla hizmet veriyoruz.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
