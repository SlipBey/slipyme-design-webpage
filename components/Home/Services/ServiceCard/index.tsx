/* eslint-disable  @typescript-eslint/no-explicit-any */

import type { FC } from "react";
import type { IconType } from "react-icons";

export interface IServiceProps {
	title: string;
	icon: IconType;
	color: string;
	desc: string;
}

export const ServiceCard: FC<IServiceProps> = ({
	title,
	icon,
	color,
	desc,
}) => {
	const Icon = icon;

	return (
		<div className="flex flex-col items-center bg-gray-100 pt-5 pb-5 rounded-lg group shadow-lg">
			<div
				className={`w-12 md:w-14 h-12 md:h-14 flex justify-center items-center rounded-lg md:rounded-xl shadow-lg mb-6 ${color} text-white group-hover:rotate-[360deg] duration-500`}
			>
				<Icon className="w-6 h-6" />
			</div>

			<h3 className="text-lg md:text-xl font-semibold text-center mb-2">
				{title}
			</h3>
			<p className="text-gray-900 font-semibold text-medium text-center mb-2 p-2">
				{desc}
			</p>
		</div>
	);
};
