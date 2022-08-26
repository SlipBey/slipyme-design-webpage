import type { FC } from "react";
import { ExampleCard } from "@components/Home/Example/ExampleCard";
import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import { Link } from "@components/Utils/Link";

export const Example: FC = () => {
	const parser = useLocaleParser();

	return (
		<section className="container mx-auto text-center">
			<div className="bg-white py-6 sm:py-8 lg:py-12">
				<div className="max-w-screen-2xl px-4 md:px-8 mx-auto my-5">
					<div className="mb-10 md:mb-16" id="ourexam">
						<h2 className="text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
							{parser.get("exams")}
						</h2>

						<p className="text-gray-800 text-lg md:text-xl font-semibold text-center mx-auto">
							{parser.get("exams_text")}
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
						{CONFIG.Exam.map(
							(example, index) =>
								index < 8 && (
									<>
										<ExampleCard key={index} {...example} />
									</>
								),
						)}
					</div>

					<div className="mt-5 float-left">
						<Link href="#">
							<button className="bg-green-400 text-white w-48 h-10 font-semibold rounded-lg hover:bg-green-500 duration-200">
								{parser.get("more_exams")}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
