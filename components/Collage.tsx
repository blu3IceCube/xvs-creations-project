"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealGroupProps {
  images: { src: string | StaticImageData; alt: string }[];
}

const Collage: React.FC<ImageRevealGroupProps> = ({ images }) => {
  const collageBox = useRef<HTMLDivElement[]>([]);
  const revealBox = useRef<HTMLDivElement[]>([]);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    gsap.fromTo(
      revealBox.current,
      { width: "100%" },
      {
        width: "0%",
        ease: "power2.out",
        stagger: {
          amount: 0.5,
        },
        scrollTrigger: {
          trigger: container.current,
          start: "30% 70%",
          toggleActions: "restart none restart reset",
        },
      }
    );
  });

  return (
    <div className="grid grid-cols-2 gap-8" ref={container}>
      {images &&
        images.map((img, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) collageBox.current[index] = el;
            }}
            className="relative"
          >
            <Image src={img.src} alt={img.alt} />
            <div
              className="absolute inset-0 bg-[#1a1a1a] z-10"
              ref={(el) => {
                if (el) revealBox.current[index] = el;
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default Collage;
