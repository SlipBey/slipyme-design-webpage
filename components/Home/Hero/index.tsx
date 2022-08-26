import { CustomImage } from "@components/Utils/CustomImage";
import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import type { FC } from "react";
import heroImage from "@assets/icon.svg";

export const Hero: FC = () => {
	const parser = useLocaleParser();

	return (
		<section className="container text-center">
			<div className="mx-auto">
				<div className="my-5">
					<CustomImage
						src={heroImage}
						alt="Hero_Image"
						className="mx-auto"
					/>
				</div>
				<h1 className="text-3xl font-bold text-black md:text-4xl">
					{CONFIG.SEO.title}
				</h1>
				<p className="mt-6 text-xl text-gray-700">
					{parser.get("hero_text")}
				</p>
			</div>
		</section>
	);
};
