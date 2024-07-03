import type { FC } from "react";
import { TeamsCard } from "@/components/Home/Teams/TeamsCard";
import { CONFIG } from "@/libs/config";
import { useLocaleParser } from "@/libs/localeParser";
import { Link } from "@/components/Utils/Link";

export const Teams: FC = () => {
  const parser = useLocaleParser();

  return (
    <section
      className="mx-auto text-center pb-12 md:pb-24 lg:pt-20"
      id="our-team"
    >
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-center">
            {parser.get("teams")}
          </h2>

          <p className="text-gray-800 text-lg md:text-xl font-semibold">
            {parser.get("teams_text")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8">
          {CONFIG.Teams.map((team, index) => (
            <TeamsCard key={index} {...team} />
          ))}
        </div>

        <div className="my-5">
          <p className="text-gray-800 text-lg md:text-xl font-semibold mb-3">
            Tasarım konusunda yetenekli ve ekiple uyumlu çalışabileceğini
            düşünüyor musun?
          </p>
          <Link href="https://www.slipyme.com/carrier#designer">
            <button className="bg-orange-500 text-white px-5 h-10 font-semibold rounded-lg hover:bg-orange-600 duration-200">
              Başvuru yapmak için tıkla.
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
