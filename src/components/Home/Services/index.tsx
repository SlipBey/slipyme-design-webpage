import { useLocaleParser } from "@/libs/localeParser";
import type { FC } from "react";

import {
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobephotoshop,
} from "react-icons/si";
import { ServiceCard } from "./ServiceCard";

export const Services: FC = () => {
  const parser = useLocaleParser();

  const Services = [
    {
      title: "Photoshop",
      icon: SiAdobephotoshop,
      color: "bg-blue-500",
    },
    {
      title: "Adobe Illustrator",
      icon: SiAdobeillustrator,
      color: "bg-orange-500",
    },
    {
      title: "After Effects",
      icon: SiAdobeaftereffects,
      color: "bg-fuchsia-500",
    },
  ];

  return (
    <section
      className="mx-auto text-center pb-12 md:pb-24 lg:pt-20"
      id="ourservices"
    >
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold">
            {parser.get("services")}
          </h2>

          <p className="text-gray-800 text-lg md:text-xl font-semibold">
            {parser.get("services_text")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {Services.map((service, idx) => (
            <ServiceCard
              title={service.title}
              color={service.color}
              icon={service.icon}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
