import type { FC } from "react";
import { Link } from "@components/Utils/Link";
import { FiHeart } from "react-icons/fi";
import { CONFIG } from "@libs/config";
import { CustomImage } from "@components/Utils/CustomImage";
import icon from "@assets/icon.svg";

export const Footer: FC = () => {
	const Pages = [
		{
			name: "Kaynak Kodları",
			href: "/source-code",
		},
		{
			name: "Slipyme",
			href: "https://slipyme.com",
		},
		{
			name: "Slipyme - Code",
			href: "https://code.slipyme.com",
		},
	];

	return (
		<div>
			<footer className="p-4 bg-white sm:p-6">
				<div className="mx-auto max-w-screen-xl">
					<div className="md:flex md:justify-between">
						<div className="mb-6 md:mb-0">
							<span className="flex items-center">
								<CustomImage
									src={icon}
									className="mr-3 h-8"
									alt="Slipyme - Logo"
								/>
								<span className="self-center text-2xl font-semibold whitespace-nowrap">
									Slipyme Tasarım
								</span>
							</span>
							<p className="mt-3 mb-3 text-gray-500 w-96">
								Slipyme Tasarım, Slipyme&apos;e ait bir
								projedir. Slipyme bünyesinde bulunan bu projenin
								amacı sizlere grafik tasarım sektöründe de
								hizmet sunabilmektir.
							</p>
							<div className="flex space-x-6">
								{CONFIG.CONTACT.map((social, index) => (
									<Link
										href={social.href}
										className={`${social.color}`}
										key={index}
									>
										<social.icon className="w-6 h-6" />
									</Link>
								))}
							</div>
						</div>
						<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
							<div>
								<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
									Diğer
								</h2>
								<ul className="text-gray-600">
									{Pages.map((page, index) => (
										<li key={index} className="mb-4">
											<Link
												href={page.href}
												className="hover:underline"
											>
												{page.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<hr className="border-gray-200 lg:my-8" />
					<div className="text-center">
						<span className="text-md text-gray-500">
							&copy; {new Date().getFullYear()} All rights
							reserved. Made with{" "}
							<FiHeart className="text-red-500 inline" /> by{" "}
							<Link
								underline
								href="https://slip.slipyme.com"
								className="text-blue-600"
							>
								SlipBey
							</Link>{" "}
							using{" "}
							<Link
								underline
								href="https://nextjs.org/"
								className="text-gray-600"
							>
								NextJS
							</Link>{" "}
							and{" "}
							<Link
								underline
								href="https://tailwindcss.com/"
								className="text-green-400"
							>
								TailwindCSS
							</Link>
							.
							<br />
							<p className="font-semibold">
								Bu proje{" "}
								<Link
									href="https://www.slipyme.xyz"
									className="text-blue-600"
								>
									Slipyme
								</Link>{" "}
								bünyesindedir.
							</p>
						</span>
					</div>
				</div>
			</footer>
		</div>
	);
};
