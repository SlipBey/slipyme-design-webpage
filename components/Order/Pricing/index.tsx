import type { FC } from "react";
import { Link } from "@components/Utils/Link";
import { BsCheckCircleFill } from "react-icons/bs";
import { useLocaleParser } from "@libs/localeParser";

export const Pricing: FC = () => {
	const parser = useLocaleParser();

	const Order = [
		{
			plan: parser.get("plan_standard"),
			desc: parser.get("desc_standard"),
			price: parser.get("price_standard"),
			info: [
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
				"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
			],
		},
		{
			plan: parser.get("plan_middle"),
			desc: parser.get("desc_middle"),
			price: parser.get("price_middle"),
			info: [
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
				"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
			],
		},
		{
			plan: parser.get("plan_professional"),
			desc: parser.get("desc_professional"),
			price: parser.get("price_professional"),
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
						{parser.get("pricing_title")}
					</h2>
					<p className="mb-5 font-semibold text-gray-800 text-lg md:text-xl">
						{parser.get("pricing_text")} {"	"}
						<Link
							href="/discord"
							className="text-orange-500 hover:text-orange-600"
						>
							{parser.get("pricing_text_1")}
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
							<p className="font-semibold text-gray-700 sm:text-lg">
								{order.desc}
							</p>
							<div className="flex justify-center items-baseline my-8">
								<span className="mr-2 text-5xl font-extrabold">
									{order.price}
									{parser.get("money_currency")}
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
								className="text-gray-900 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg shadow-orange-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
							>
								{parser.get("buy")}
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
