/* eslint-disable @typescript-eslint/no-explicit-any */

import type { FC } from "react";
import { CustomImage } from "@/components/Utils/CustomImage";
import { Link } from "@/components/Utils/Link";
import { FaDiscord, FaInstagram, FaPinterest } from "react-icons/fa";
import classNames from "classnames";

export interface ITeamProps {
  name: string;
  job: string;
  davsik: boolean;
  social: any;
  image: string;
}

export const TeamsCard: FC<ITeamProps> = (team) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8 group relative">
      <div className="absolute top-0 right-0 -mt-3 -mr-6 rotate-[15deg]">
        <button
          className={classNames("text-white p-2 rounded-lg font-semibold", {
            "bg-orange-500": team.davsik,
            "bg-blue-500": !team.davsik,
          })}
        >
          {team.davsik ? "Ekip Üyesi" : "Ekip Yöneticisi"}
        </button>
      </div>
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
          {team.job} Designer
        </p>

        <div className="flex justify-center">
          <div className="flex gap-4">
            <Link
              href={team.social.discord}
              className="text-indigo-500 hover:text-indigo-600 duration-200"
            >
              <FaDiscord className="w-6 h-6" />
            </Link>
            <Link
              href={team.social.instagram}
              className="text-pink-500 hover:text-pink-600 duration-200"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
            {team.social.pinterest && (
              <Link
                href={team.social.pinterest}
                className="text-red-500 hover:text-red-600 duration-200"
              >
                <FaPinterest className="w-6 h-6" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
