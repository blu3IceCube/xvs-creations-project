import Link from "next/link";
import React from "react";

const Buttons = ({
  texts,
  startColor,
}: {
  texts: string[];
  startColor?: string;
}) => {
  const firstLinkTxtColor = startColor === "white" ? "black" : "white";
  const secondLinkTxtColor = startColor === "white" ? "white" : "black";

  return (
    <div className="flex flex-row gap-10 items-center">
      {texts.map((text, index) => (
        <Link
          key={index}
          href="#"
          className={`py-2 px-8 hover:bg-yellow-500 hover:text-white ${
            index == 0
              ? `bg-${startColor} text-${firstLinkTxtColor}`
              : `text-${secondLinkTxtColor}`
          }`}
        >
          {text}
        </Link>
      ))}
    </div>
  );
};

export default Buttons;
