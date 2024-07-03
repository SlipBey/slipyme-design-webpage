import { CustomImage } from "@/components/Utils/CustomImage";
import { CONFIG } from "@/libs/config";
import { useLocaleParser } from "@/libs/localeParser";
import type { FC } from "react";
import heroImage from "@/assets/icon.svg";

export const Hero: FC = () => {
  const parser = useLocaleParser();

  return (
    <section className="text-center pb-12 md:pb-24 lg:pt-20">
      <div>
        <div className="my-5">
          <CustomImage
            src={heroImage}
            alt="Hero_Image"
            className="mx-auto w-56"
          />
        </div>
        <h1 className="text-3xl font-bold text-black md:text-4xl">
          {CONFIG.SEO.title}
        </h1>
        <p className="mt-3 text-xl font-semibold text-gray-700">
          {parser.get("hero_text")}
        </p>
      </div>
    </section>
  );
};
