"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import Link from "next/link";

import HeroImg from "@/public/assets/Hero Image.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const button = useRef<HTMLDivElement>(null);
  const heroImage = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const homeAnimation = gsap.timeline();

      homeAnimation
        .from(heroImage.current, {
          opacity: 0,
          scale: 0.5,
          duration: 0.3,
          delay: 0.5,
        })
        .from(button.current, {
          opacity: 0,
          y: "-=250",
          duration: 0.5,
          delay: 0.3,
        });

      ScrollTrigger.create({
        animation: homeAnimation,
        trigger: heroImage.current,
        toggleActions: "restart none restart pause",
      });
    },
    { scope: button }
  );

  return (
    <div className="min-h-screen w-full relative">
      <div className="h-screen" ref={heroImage}>
        <Image
          src={HeroImg}
          alt="Hero"
          className="object-cover brightness-75"
          sizes="100vw"
          fill
        />

        <div
          ref={button}
          className="absolute left-1/2 bottom-6 transform -translate-x-1/2 -translate-y-6 text-white z-10"
        >
          <Link
            href="#"
            className="border px-4 py-2 font-light hover:bg-white hover:text-black"
          >
            Test Drive
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
