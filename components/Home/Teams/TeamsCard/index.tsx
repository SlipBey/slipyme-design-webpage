/* eslint-disable  @typescript-eslint/no-explicit-any */

import type { FC } from "react";
import { CustomImage } from "@components/Utils/CustomImage";
import { FaBehance, FaInstagram, FaDiscord, FaLinkedin } from "react-icons/fa";
import { Link } from "@components/Utils/Link";
import { useCopyToClipboard } from "react-use";
import { toast } from "react-toastify";
import { useLocaleParser } from "@libs/localeParser";

export interface ITeamProps {
	name: string;
	job: string;
	slipyme?: string;
	social: any;
	image: string;
}

export const TeamsCard: FC<ITeamProps> = (team) => {
	const [, copyToClipboard] = useCopyToClipboard();

	const onCopy = () => {
		copyToClipboard(team.social.discord);
		toast.success("Discord adresi başarıyla kopyalandı.");
	};

	const parser = useLocaleParser();

	let instagram, discord, linkedin, behance;
	if (team.social.instagram) {
		instagram = (
			<Link
				href={`https://instagram.com/${team.social.instagram}`}
				className="text-pink-500 hover:text-pink-600 duration-200"
			>
				<FaInstagram className="w-6 h-6" />
			</Link>
		);
	}
	if (team.social.discord) {
		discord = (
			<button
				className="text-indigo-500 hover:text-indigo-600 duration-200"
				onClick={onCopy}
			>
				<FaDiscord className="w-6 h-6" />
			</button>
		);
	}
	if (team.social.linkedin) {
		linkedin = (
			<Link
				href={`https://www.linkedin.com/in/${team.social.linkedin}`}
				className="text-blue-800 hover:text-blue-900 duration-200"
			>
				<FaLinkedin className="w-6 h-6" />
			</Link>
		);
	}
	if (team.social.behance) {
		behance = (
			<Link
				href={`https://www.behance.net/${team.social.behance}`}
				className="text-red-600 hover:text-red-700 duration-200"
			>
				<FaBehance className="w-6 h-6" />
			</Link>
		);
	}

	return (
		<div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8 group">
			<div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
				<CustomImage
					src={team.image}
					alt={`${team.name} Images`}
					className="w-full h-full object-cover object-center group-hover:scale-110 duration-200"
				/>
			</div>

			<div>
				<div className="text-amber-500 md:text-lg font-bold text-center">
					{team.name}
				</div>
				<p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
					{team.job} {parser.get("designer")}
				</p>
				<Link href={`https://slipyme.com/teams/${team.slipyme}`}>
					<button className="text-gray-900 bg-gradient-to-r from-yellow-200 to-orange-200 hover:bg-gradient-to-l hover:from-yellow-200 hover:to-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3">
						Slipyme {parser.get("profiles")}
					</button>
				</Link>

				<div className="flex justify-center">
					<div className="flex gap-4">
						{discord}
						{behance}
						{linkedin}
						{instagram}
					</div>
				</div>
			</div>
		</div>
	);
};
