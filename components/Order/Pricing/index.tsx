import type { FC } from "react";
import { Link } from "@components/Utils/Link";
import { BsCheckCircleFill } from "react-icons/bs";

export const Pricing: FC = () => {
	const Order = [
		{
			plan: "Standart",
			desc: "Bu planda temel düzeyde tasarımlar yapılır.",
			price: "25",
			info: [
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
				"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
			],
		},
		{
			plan: "Orta",
			desc: "Bu planda orta düzeyde tasarımlar yapılır.",
			price: "50",
			info: [
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
				"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
			],
		},
		{
			plan: "Profesyonel",
			desc: "Bu planda profesyonel düzeyde tasarımlar yapılır.",
			price: "100",
			info: [
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
				"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
			],
		},
	];

	return (
		<section className="container mx-autp text-center mb-5">
			<div className="flex flex-wrap justify-center space-y-5 sm:space-x-8 sm:space-y-0">
				<div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
						Tasarım Planlarımız
					</h2>
					<p className="mb-5 font-light text-gray-500 sm:text-xl">
						Şuanlık satın alıp işlerimiz discord sunucumuzda
						gerçekleştirilmektedir. Discorda gelmek için:{" "}
						<Link
							href="/discord"
							className="text-amber-500 hover:text-amber-600"
						>
							tıklayın
						</Link>
						.
					</p>
				</div>
				<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
					{Order.map((order, index) => (
						<div
							className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-300 shadow xl:p-8 shadow-lg hover:shadow-gray-800/50"
							key={index}
						>
							<h3 className="mb-4 text-2xl font-semibold">
								{order.plan}
							</h3>
							<p className="font-light text-gray-700 sm:text-lg">
								{order.desc}
							</p>
							<div className="flex justify-center items-baseline my-8">
								<span className="mr-2 text-5xl font-extrabold">
									{order.price}₺
								</span>
							</div>

							<ul
								role="list"
								className="mb-8 space-y-3 text-left"
							>
								{order.info.map((inf, index) => (
									<li
										className="flex items-center space-x-3"
										key={index}
									>
										<BsCheckCircleFill className="flex-shrink-0 w-5 h-5 text-green-500" />
										<span>{inf}</span>
									</li>
								))}
							</ul>
							<Link
								href="/discord"
								className="text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg shadow-lime-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
							>
								Satın Al
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
