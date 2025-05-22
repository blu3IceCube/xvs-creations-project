"use client";

import Image from "next/image";
import lexoZ from "@/public/assets/Features 2.2 Image.png";
import Buttons from "@/components/Buttons";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Features2 = () => {
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
          duration: 0.5,
          stagger: 0.01,
        });
      },
      { scope: text }
    );
    gsap.from(image.current, {
      scrollTrigger: {
        trigger: image.current,
        toggleActions: "restart none restart reset",
        start: "top 50%",
      },
      duration: 1,
      x: 1000,
    });
  });

  return (
    <div className="bg-[#1a1a1a] text-white">
      <div className="flex flex-row">
        <div className="flex items-center justify-center flex-[1]">
          <div className="flex flex-col gap-5 w-[380px] h-[500px]" ref={text}>
            <span className="text-4xl">Lexo Z</span>
            <span className="text-2xl">Accelerate into a New Era</span>
            <div className="flex items-center grow">
              <p className="text-sm font-[300]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip <br /> <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat
              </p>
            </div>
            <Buttons texts={["Order Now", "Learn More"]} startColor="white" />
          </div>
        </div>
        <div ref={image}>
          <Image
            src={lexoZ}
            alt="Lexo Z"
            width={700}
            height={700}
            className="object-cover flex-[1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Features2;
