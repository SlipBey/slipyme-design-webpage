import { type FC, useEffect, useState } from "react";
import { Link } from "@/components/Utils/Link";

import { FiArrowUp } from "react-icons/fi";
import { FaUsers, FaPencilAlt, FaUser } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { HiFolderAdd } from "react-icons/hi";

import classnames from "classnames";
import { useRouter } from "next/router";
import { useLocaleParser } from "@/libs/localeParser";
import classNames from "classnames";
import { CONFIG } from "@/libs/config";

export const Navbar: FC = () => {
  const router = useRouter();
  const [hash, setHash] = useState("");
  const [top, setTop] = useState(false);
  const [open, setOpen] = useState(true);

  const parser = useLocaleParser();

  const Menus = [
    {
      title: parser.get("home"),
      icon: <AiOutlineHome />,
      link: "/",
    },
    {
      title: parser.get("whoarewe"),
      icon: <FaUsers />,
      link: "/#whoarewe",
    },
    {
      title: parser.get("services"),
      icon: <FaPencilAlt />,
      link: "/#ourservices",
    },
    {
      title: parser.get("exams"),
      icon: <TbCertificate />,
      link: "/#ourexam",
    },
    {
      title: parser.get("teams"),
      spacing: true,
      icon: <FaUser />,
      link: "/#our-team",
    },
    {
      title: parser.get("order"),
      icon: <HiFolderAdd />,
      link: "/order",
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
        className={`relative bg-gray-100 min-h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300`}
      >
        <BsArrowLeftShort
          onClick={() => setOpen(!open)}
          className={classNames(
            "bg-transparent text-orange-600 text-3xl rounded-full absolute right-[-1rem] border-orange-600 border-2 cursor-pointer hover:scale-110, active:scale-90",
            {
              "rotate-180": !open,
            },
          )}
        />
        <div className="inline-flex">
          <MdDesignServices
            className={classNames(
              "text-4xl text-orange-500 mr-2 duration-500",
              {
                "rotate-[360deg]": open,
              },
            )}
          />
          <h1
            className={classNames("text-gray-800 font-medium text-xl", {
              hidden: !open,
            })}
          >
            {CONFIG.SEO.title}
          </h1>
        </div>

        <div className="pt-2">
          {Menus.map((menu, index) => (
            <Link href={menu.link} key={index}>
              <li
                className={classNames(
                  "text-gray-800 text-sm font-medium flex items-center gap-x-4 cursor-pointer p-2 rounded-md duration-200 hover:bg-gray-200",
                  {
                    "bg-gray-200": router.pathname == menu.link,
                    "mt-9": menu.spacing,
                    "mt-2": !menu.spacing,
                  },
                )}
              >
                <span className="text-2xl block float-left text-orange-500">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
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
          "z-50",
          "text-white",
          "w-10",
          "h-10",
          "bg-orange-400",
          "hover:bg-orange-500",
          "ease-in-out",
          "duration-200",
          "rounded-t-lg",
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
