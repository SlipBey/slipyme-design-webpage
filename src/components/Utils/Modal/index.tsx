/* eslint-disable @typescript-eslint/no-explicit-any */

import type { FC } from "react";
import { CustomImage } from "../CustomImage";

export interface IModalProps {
  modal: boolean;
  setModal: any;
  images: string;
}

export const Modal: FC<IModalProps> = ({ modal, setModal, images }) =>
  modal && (
    <div
      className="fixed z-50 left-0 top-0 w-full h-full overflow-auto pt-[60px]"
      style={{ background: "rgba(0, 0, 0, 0.9)" }}
    >
      <span
        className="absolute top-[25px] right-[25px] text-white text-[50px] font-bold"
        onClick={() => setModal(!modal)}
      >
        &times;
      </span>
      <CustomImage
        className="m-auto block max-w-[80%] max-h-[80%]"
        src={images}
        alt="Modal Image"
      />
    </div>
  );
