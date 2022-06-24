import type { FC } from "react";

import { AiFillCheckCircle } from "react-icons/ai";

export const WhoAreWe: FC = () => {
	const Info = [
		{
			text: "Biz Slipyme tasarım ekibiyiz. Bu proje Slipyme bünyesinde yer almaktadır.",
			red: true,
		},
		{
			text: "Biz Slipyme Designer olarak tasarımcılara özel bir sohbet ortamı ve yardım ortamı sunuyoruz.",
			green: true,
		},
		{
			text: "İsteğinize uygun tasarımlar yapıyoruz ve sizlere güzel bir ortam sunuyoruz.",
			orange: true,
		},
	];

	return (
		<section className="container mx-auto text-center">
			<div className="flex flex-wrap justify-center space-y-5 sm:space-x-8 sm:space-y-0">
				<div className="max-w-screen-2xl px-4 md:px-8 mx-auto p-8">
					<div className="mb-10 md:mb-16" id="whoarewe">
						<h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
							Biz Kimiz?
						</h2>

						<p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
							Biz kimiz? Neyiz? Neler Yapıyoruz?
						</p>
					</div>

					<div className="flex flex-col -mt-5">
						{Info.map((info, index) => (
							<div className="flex mt-3" key={index}>
								<AiFillCheckCircle
									className={`w-8 h-8 ${
										info.red
											? "text-red-600"
											: "text-gray-800"
									} ${
										info.green
											? "text-green-600"
											: "text-gray-800"
									} ${
										info.orange
											? "text-orange-600"
											: "text-gray-800"
									}`}
								/>
								<h3 className="text-lg md:text-xl font-medium text-center ml-2">
									{info.text}
								</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
