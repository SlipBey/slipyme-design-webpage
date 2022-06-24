import { type FC, useEffect, useState } from "react";
import { Link } from "@components/Utils/Link";

import { FiArrowUp } from "react-icons/fi";
import { FaUsers, FaPencilAlt, FaUser } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { HiFolderAdd } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";

import classnames from "classnames";
import { useRouter } from "next/router";

export const Navbar: FC = () => {
	const router = useRouter();
	const [hash, setHash] = useState("");
	const [top, setTop] = useState(false);
	const [open, setOpen] = useState(true);

	const Menus = [
		{
			title: "Anasayfa",
			icon: <AiOutlineHome />,
			link: "/",
		},
		{
			title: "Biz Kimiz?",
			icon: <FaUsers />,
			link: "/#whoarewe",
		},
		{
			title: "Hizmetlerimiz",
			icon: <FaPencilAlt />,
			link: "/#ourservices",
		},
		{
			title: "Örneklerimiz",
			icon: <TbCertificate />,
			link: "/#ourexam",
		},
		{
			title: "Ekibimiz",
			spacing: true,
			icon: <FaUser />,
			link: "/#our-team",
		},
		{
			title: "Sipariş",
			icon: <HiFolderAdd />,
			link: "/order",
		},
		{
			title: "Slipyme",
			spacing: true,
			icon: <BiCodeAlt />,
			link: "https://www.slipyme.xyz",
		},
	];

	useEffect(() => {
		window.onscroll = function () {
			if (
				document.body.scrollTop > 20 ||
				document.documentElement.scrollTop > 20
			)
				setTop(true);
			else setTop(false);
		};
	}, []);

	useEffect(() => {
		setHash(window.location.hash ? window.location.hash : "#");
	}, [hash]);

	const onUp = () => {
		window.location.href = "#";
	};

	return (
		<>
			<div
				className={`bg-gray-100 min-h-screen p-5 pt-8 ${
					open ? "w-72" : "w-20"
				} relative duration-300`}
			>
				<BsArrowLeftShort
					onClick={() => setOpen(!open)}
					className={`bg-transparent text-yellow-600 text-3xl rounded-full absolute right-[-1rem] border-yellow-600 border-2 cursor-pointer duration-200 hover:scale-110 active:scale-90 ${
						!open && "rotate-180"
					}`}
				/>
				<div className="inline-flex">
					<MdDesignServices
						className={`text-4xl text-yellow-300 rounded cursor-pointer block float-left mr-2 duration-500 ${
							open && "rotate-[360deg]"
						}`}
					/>
					<h1
						className={`text-gray-800 origin-left font-medium mt-1 text-xl ${
							!open && "hidden	"
						}`}
					>
						Slipyme - Design
					</h1>
				</div>

				<div className="pt-2">
					{Menus.map((menu, index) => (
						<Link href={menu.link} key={index}>
							<li
								className={`duration-200 ${
									router.pathname == menu.link
										? "text-gray-800 text-sm font-medium flex items-center gap-x-4 cursor-pointer p-2 rounded-md bg-gray-300"
										: "text-gray-800 text-sm font-medium flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-gray-300 duration-20"
								} ${menu.spacing ? "mt-9" : "mt-2"}`}
							>
								<span className="text-2xl block float-left text-amber-500">
									{menu.icon ? (
										menu.icon
									) : (
										<RiDashboardFill />
									)}
								</span>
								<span
									className={`text-base font-mendium flex-1 ${
										!open && "hidden"
									}`}
								>
									{menu.title}
								</span>
							</li>
						</Link>
					))}
				</div>
			</div>

			<button
				aria-label="Go Up"
				onClick={onUp}
				className={classnames(
					"fixed",
					"bottom-0",
					"right-0",
					"mx-10",
					"lg:mx-20",
					"my-10",
					"z-50",
					"text-white",
					"w-10",
					"h-10",
					"bg-yellow-500",
					"hover:scale-110",
					"ease-in-out",
					"duration-200",
					"active:scale-90",
					"rounded-r-lg",
					"rounded-tl-lg",
					{
						block: top,
						hidden: !top,
					},
				)}
			>
				<FiArrowUp className="h-full w-full p-2" />
			</button>
		</>
	);
};
