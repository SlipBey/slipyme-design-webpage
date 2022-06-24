import type { FC } from "react";
import { ExampleCard } from "@components/Home/Example/ExampleCard";
import { CONFIG } from "@libs/config";

export const Example: FC = () => {
	return (
		<section className="container mx-auto text-center">
			<div className="bg-white py-6 sm:py-8 lg:py-12">
				<div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
					<div className="mb-10 md:mb-16" id="ourexam">
						<h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
							Örnek Çalışmalarımız
						</h2>

						<p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
							Buradaki çalışmalarımız tamamen örnek amaçlı
							hazırlanmıştır.
						</p>
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">
						{CONFIG.Exam.map((example, index) => (
							<ExampleCard key={index} {...example} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
