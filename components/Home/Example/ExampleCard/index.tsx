import type { FC } from "react";
import { CustomImage } from "@components/Utils/CustomImage";

export interface IExampleProps {
	title: string;
	image: string;
}

export const ExampleCard: FC<IExampleProps> = (example) => {
	return (
		<div className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
			<CustomImage
				src={example.image}
				alt={`${example.title} Image`}
				className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
			/>

			<div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

			<span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
				{example.title}
			</span>
		</div>
	);
};
