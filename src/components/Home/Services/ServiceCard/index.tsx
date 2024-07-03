import type { FC } from "react";
import type { IconType } from "react-icons";

export interface IServiceProps {
  title: string;
  icon: IconType;
  color: string;
}

export const ServiceCard: FC<IServiceProps> = ({
  title,
  icon,
  color,
}) => {
  const Icon = icon;

  return (
    <div className="flex flex-col items-center bg-gray-100 pt-5 pb-5 rounded-lg group shadow-lg hover:shadow-2xl duration-200">
      <div
        className={`w-24 h-24 flex justify-center items-center rounded-lg md:rounded-xl shadow-lg mb-6 ${color} text-white group-hover:scale-105 duration-300`}
      >
        <Icon className="w-14 h-14" />
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
        {title}
      </h3>
    </div>
  );
};
