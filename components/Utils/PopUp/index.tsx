import type { FC } from "react";
import { FiX } from "react-icons/fi";
import classNames from "classnames";
import { CustomImage } from "../CustomImage";

export interface IModal {
	title: string;
	image: string;
	open: boolean;
	setOpen: (open: boolean) => void;
}

export const Modal: FC<IModal> = ({ title, image, open, setOpen }) => {
	return (
		<div
			className={classNames(
				"fixed backdrop-blur-sm bg-[rgba(0,0,0,.6)] w-full h-full top-0 left-0",
				{
					hidden: !open,
				},
			)}
			style={{ zIndex: "100" }}
		>
			<div className="m-auto rounded-lg bg-orange-300 p-8 text-center lg:w-[633px]">
				<div className="flex justify-end">
					<button
						onClick={() => setOpen(false)}
						className="rounded-full bg-orange-500 p-1 duration-200 hover:bg-orange-600 text-white"
					>
						<FiX />
					</button>
				</div>
				<h3 className="text-3xl font-bold uppercase text-gray-800">
					{title}
				</h3>
				<div className="mt-5 p-12">
					<CustomImage
						src={image}
						alt={`${title} Image`}
						className="mx-auto"
					/>
				</div>
			</div>
		</div>
	);
};
