import { useLocaleParser } from "@/libs/localeParser";
import classNames from "classnames";
import type { FC } from "react";

import { AiFillCheckCircle } from "react-icons/ai";

export const WhoAreWe: FC = () => {
  const parser = useLocaleParser();

  const Info = [
    {
      text: parser.get("info_text_1"),
      red: true,
    },
    {
      text: parser.get("info_text_2"),
      green: true,
    },
    {
      text: parser.get("info_text_3"),
      orange: true,
    },
  ];

  return (
    <section
      className="mx-auto text-center pb-12 md:pb-24 lg:pt-20"
      id="whoarewe"
    >
      <div className="flex flex-wrap justify-center space-y-5 sm:space-x-8 sm:space-y-0">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto p-8">
          <div className="mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-center">
              {parser.get("whoarewe")}
            </h2>
            <p className="mt-3 text-xl font-semibold text-gray-700">
              {parser.get("whoarewe_text")}
            </p>
          </div>

          <div className="flex flex-col">
            {Info.map((info, index) => (
              <div className="flex mt-3" key={index}>
                <AiFillCheckCircle
                  className={classNames("w-8 h-8", {
                    "text-red-600": info.red,
                    "text-green-600": info.green,
                    "text-orange-600": info.orange,
                  })}
                />
                <h3 className="text-lg md:text-xl font-medium text-gray-900 text-center ml-2">
                  {info.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
