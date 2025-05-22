"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

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

gsap.registerPlugin(SplitText, ScrollTrigger);

const ImgCard = ({
  src,
  label,
  width,
  height,
  description,
  align,
  size,
  txtWidth,
  txtSize,
}: {
  src: StaticImageData;
  label?: string;
  width?: string;
  height?: string;
  description?: string;
  align?: TextAlign | undefined;
  size?: string;
  txtWidth?: string;
  txtSize?: string;
}) => {
  const text = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLDivElement>(null);
  const revealBox = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = text.current;
    if (!container) return;

    const reveal = revealBox.current;

    const targetTxt = container.querySelectorAll<HTMLSpanElement>("span, p");

    targetTxt.forEach(
      (target) => {
        const split = SplitText.create(target, {
          type: "chars",
        });

        gsap.from(split.chars, {
          scrollTrigger: {
            trigger: target,
            toggleActions: "restart none restart reset",
          },
          x: -100,
          autoAlpha: 0,
          stagger: {
            amount: 0.5,
          },
        });
      },
      { scope: text }
    );

    if (reveal) {
      gsap.fromTo(
        reveal,
        {
          width: "100%",
        },
        {
          width: "0%",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image.current,
            toggleActions: "restart none restart reset",
            start: "top center",
          },
        }
      );
    }
  });

  return (
    <div className="flex flex-col gap-6 bg-[#1a1a1a]" ref={text}>
      <div
        style={{ width: width, height: height }}
        className="relative"
        ref={image}
      >
        <Image
          src={src}
          alt="image"
          className="object-cover"
          fill
          sizes="100%"
        />
        <div ref={revealBox} className="absolute inset-0 bg-[#1a1a1a] z-10" />
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
        <p
          className="inline-block w-[360px] font-light text-sm"
          style={{ width: txtWidth, fontSize: txtSize }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default ImgCard;
