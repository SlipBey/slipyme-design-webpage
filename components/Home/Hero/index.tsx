import type { FC } from "react";

export const Hero: FC = () => {
	return (
		<section className="container mx-autp text-center">
			<div className="mx-auto">
				<h1 className="text-3xl font-bold text-black md:text-4xl">
					Slipyme - Tasarım
				</h1>
				<p className="mt-6 text-xl text-gray-700">
					İşini yapmayı seven bütün tasarımcılarımız ile kaliteli bir
					hizmet..
				</p>
			</div>
		</section>
	);
};
