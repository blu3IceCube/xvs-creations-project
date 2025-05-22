"use client";

import SpecCard from "@/components/SpecCard";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Specifications = () => {
  const background = useRef(null);

  useGSAP(
    () => {
      const container = background.current;
      if (!container) return;

      gsap.set(container, { filter: "brightness(0)" });

      gsap.to(container, {
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none restart reset",
          start: "top 40%",
        },
        filter: "brightness(1)",
        duration: 1.5,
        ease: "power1.inOut",
      });
    },
    { scope: background }
  );

  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: "url('/assets/Model-X-Specs-Hero-Desktop-LHD.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      ref={background}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center text-white">
        <div className="flex flex-row grow h-full">
          <div className="flex items-center justify-center flex-[1]"></div>
          <div className="flex items-center justify-center flex-[1]">
            <div className="flex flex-col gap-16">
              <span className="text-2xl font-light">
                Model Air X Specifications
              </span>
              <div className="grid grid-cols-2 gap-y-10 gap-x-32 font-extralight">
                <SpecCard label="Range (EPA est.)" value="Up to 300 miles" />
                <SpecCard label="Acceleration" value="4.5s 0-60 mph" />
                <SpecCard label="Peak Power" value="400 hp" />
                <SpecCard label="wheels" value='19" or 20"' />
                <SpecCard label="Towing" value="2000 pounds" />
                <SpecCard label="Seating" value="Up to 5" />
                <SpecCard label="Drag Coefficient" value="0.28 cd" />
                <SpecCard label="Top Speed" value="130 mph" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
