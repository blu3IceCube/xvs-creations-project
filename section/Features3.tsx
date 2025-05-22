"use client";

import Image from "next/image";
import bgImg from "@/public/assets/Features 2.3 Img.png";
import Buttons from "@/components/Buttons";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Features3 = () => {
  const text = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = text.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLSpanElement>("span, p");

    targets.forEach(
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
          stagger: 0.05,
        });
      },
      { scope: text }
    );
    gsap.from(image.current, {
      scrollTrigger: {
        trigger: image.current,
        toggleActions: "restart none restart reset",
      },
      opacity: 0,
      scale: 0.5,
      duration: 1,
    });
  });

  return (
    <div className="relative h-full bg-white">
      <div className="h-screen">
        <div className="absolute bottom-0 left-0 right-0 h-[380px]" ref={image}>
          <Image
            src={bgImg}
            alt="background"
            className="object-cover"
            fill
            sizes="100ve"
          />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center">
          <div className="flex flex-row grow">
            <div className="flex items-center justify-center flex-[1]">
              <div
                className="flex flex-col gap-5 w-[450px] h-[280px]"
                ref={text}
              >
                <span className="text-5xl">Air X</span>
                <span className="text-3xl">Accelerate into a New Era</span>
                <div className="flex items-center grow">
                  <p className="font-[400] w-[380px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
                <Buttons
                  texts={["Order Now", "Learn More"]}
                  startColor="black"
                />
              </div>
            </div>
            <div className="flex-[1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features3;
