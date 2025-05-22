import Image from "next/image";
import Link from "next/link";

import airXAd from "@/public/assets/Air X Img 2.png";
import Buttons from "@/components/Buttons";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Advertisement = () => {
  const text = useRef<HTMLDivElement>(null);

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
  });

  return (
    <div className="relative h-full text-white">
      <div className="h-screen">
        <Image
          src={airXAd}
          alt="background"
          className="object-cover brightness-50"
          sizes="100vw"
          fill
        />
        <div className="absolute bottom-5 left-0 right-0 flex items-center">
          <div className="flex flex-row grow">
            <div className="flex items-center justify-center flex-[1]">
              <div
                className="flex flex-col gap-7 w-[450px] h-[280px]"
                ref={text}
              >
                <span className="text-5xl">Air X</span>
                <span className="text-2xl font-light">
                  Accelerate into a New Era
                </span>
                <Buttons
                  texts={["Order Now", "Learn More"]}
                  startColor="white"
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

export default Advertisement;
