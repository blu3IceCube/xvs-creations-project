"use client";

import Image from "next/image";
import bgImg from "@/public/assets/Hero Image.png";

import featureGif from "@/public/assets/Features 2.1 video.gif";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Features1 = () => {
  const text = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = text.current;
    if (!container) return;

    const spans = container.querySelectorAll<HTMLSpanElement>("span");

    spans.forEach(
      (span) => {
        const split = SplitText.create(span, {
          type: "words",
        });

        gsap.from(split.words, {
          scrollTrigger: {
            trigger: span,
            toggleActions: "restart none restart reset",
          },
          x: -100,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.05,
        });
      },
      { scope: text }
    );

    gsap.set(image.current, { opacity: 0, scale: 0 });

    gsap.to(image.current, {
      scrollTrigger: {
        trigger: image.current,
        toggleActions: "restart none restart reset",
        start: "top 70%",
      },
      opacity: 1,
      scale: 1,
      duration: 1,
    });
  });

  return (
    <div className="bg-[#1a1a1a] flex flex-col justify-center text-white h-full">
      <div className="flex items-center justify-center border-b h-screen">
        <div className="flex flex-col gap-5" ref={text}>
          <span className="text-5xl">Air X</span>
          <div ref={image}>
            <Image
              src={featureGif}
              alt="Air x"
              unoptimized={false}
              width={700}
              height={700}
            />
          </div>
          <span className="text-lg">Accelerate into a New Era</span>
        </div>
      </div>
    </div>
  );
};

export default Features1;
