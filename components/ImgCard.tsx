import Image, { StaticImageData } from "next/image";
import React from "react";

type TextAlign =
  | "left"
  | "right"
  | "center"
  | "justify"
  | "start"
  | "end"
  | "inherit"
  | "initial"
  | "unset";

const ImgCard = ({
  src,
  label,
  width,
  height,
  description,
  align,
  size,
}: {
  src: StaticImageData;
  label?: string;
  width?: string;
  height?: string;
  description?: string;
  align?: TextAlign | undefined;
  size?: string;
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div style={{ width: width, height: height }} className="relative">
        <Image src={src} alt="image" className="object-cover" fill />
      </div>
      {label && (
        <span
          className="text-center font-light"
          style={{ textAlign: align, fontSize: size }}
        >
          {label}
        </span>
      )}
      {description && (
        <p className="inline-block w-[360px] font-light text-sm">
          {description}
        </p>
      )}
    </div>
  );
};

export default ImgCard;
