"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText);

const SpecNumCard = ({
  label,
  value,
  units,
}: {
  label: string;
  value: string;
  units: string;
}) => {
  const numValue = useRef<HTMLDivElement>(null);
  const specNum = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = numValue.current;
    const stagger = specNum.current;
    if (!container || !stagger) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: stagger,
        start: "top 80%",
        toggleActions: "restart none restart reset",
      },
    });

    const spans = stagger.querySelectorAll<HTMLSpanElement>(".stagger-txt");
    const splitInstances: SplitText[] = [];

    spans.forEach((span) => {
      const split = new SplitText(span, { type: "words" });
      splitInstances.push(split);

      // Add stagger to timeline for each span
      timeline.from(
        split.words,
        {
          y: -100,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.05,
        },
        0 // Align all on same start point
      );
    });

    // Add scrambleText to timeline after all stagger animations
    timeline.to(
      container,
      {
        duration: 1.5,
        scrambleText: {
          text: value,
          chars: "0123456789+<=-%",
        },
      },
      "+=0.1" // slight pause after stagger animation
    );

    return () => {
      splitInstances.forEach((split) => split.revert());
    };

    //     gsap.from(split.words, {
    //       scrollTrigger: {
    //         trigger: span,
    //         toggleActions: "restart none restart reset",
    //       },
    //       opacity: 0,
    //       scale: 0,
    //       duration: 0.5,
    //     });
    //   },
    //   { scope: spans }
    // );

    // gsap.to(container, {
    //   duration: 1.5,
    //   scrambleText: {
    //     text: value,
    //     chars: "0123456789+<=-%",
    //   },
    //   scrollTrigger: {
    //     trigger: container,
    //     start: "top 80%",
    //     toggleActions: "restart none restart pause",
    //   },
    // });
  });

  return (
    <div className="flex flex-col gap-4 items-center" ref={specNum}>
      <span className="font-light text-xs mb-8 stagger-txt">{label}</span>

      <span className="text-5xl font-light" ref={numValue}>
        0
      </span>
      <span className="text-3xl font-extralight stagger-txt">{units}</span>
    </div>
  );
};

export default SpecNumCard;
