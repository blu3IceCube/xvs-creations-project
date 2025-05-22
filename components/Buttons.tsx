"use client";

import Link from "next/link";
import React, { useState } from "react";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Buttons = ({
  texts,
  startColor = "white",
}: {
  texts: string[];
  startColor?: string;
}) => {
  const button = useRef(null);

  useGSAP(() => {
    const container = button.current;
    if (!container) return;

    gsap.from(container, {
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart restart restart reset",
      },
      y: 150,
      duration: 0.4,
      ease: "power1.inOut",
    });
  });

  return (
    <div className="flex flex-row gap-10 items-center" ref={button}>
      {texts.map((text, index) => {
        const [hover, setHover] = useState(false);

        // Dynamic text and background color logic
        const baseBackground = index === 0 ? startColor : "transparent";
        const baseTextColor =
          index === 0
            ? startColor === "white"
              ? "black"
              : "white"
            : startColor === "white"
            ? "white"
            : "black";

        const hoverBackground = "#facc15";
        const hoverTextColor = "white";

        const style = {
          backgroundColor: hover ? hoverBackground : baseBackground,
          color: hover ? hoverTextColor : baseTextColor,
          padding: "0.5rem 2rem",
          textDecoration: "none",
        };

        return (
          <Link
            key={index}
            href="#"
            style={style}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {text}
          </Link>
        );
      })}
    </div>
  );
};

export default Buttons;
