import { FiMail, FiGithub, FiYoutube, FiInstagram } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

export const CONTACT = [
	{
		href: "/discord",
		icon: FaDiscord,
		color: "text-indigo-500 hover:text-indigo-600 duration-200",
	},
	{
		href: "mailto:contact@enderbot.net",
		icon: FiMail,
		color: "text-red-600 hover:text-red-700 duration-200",
	},
	{
		href: "/github",
		icon: FiGithub,
		color: "text-gray-800 hover:text-gray-900 duration-200",
	},
	{
		href: "/youtube",
		icon: FiYoutube,
		color: "text-red-600 hover:text-red-700 duration-200",
	},
	{
		href: "/instagram",
		icon: FiInstagram,
		color: "text-pink-500 hover:text-pink-600 duration-200",
	},
];
