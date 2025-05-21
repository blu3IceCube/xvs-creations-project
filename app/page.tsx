"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/components/Navbar";
import Advertisement from "@/section/Advertisement";
import Features1 from "@/section/Features1";
import Features2 from "@/section/Features2";
import Features3 from "@/section/Features3";
import Footer from "@/section/Footer";
import Hero from "@/section/Hero";
import PictureBoard from "@/section/PictureBoard";
import Specifications from "@/section/Specifications";
import SpecNumber from "@/section/SpecNumber";
import Stories from "@/section/Stories";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollSmoother.create({
        content: container.current,
        smooth: 2,
      });

      // const sections = gsap.utils.toArray(".section") as HTMLElement[];
      // sections.forEach((section, i) => {
      //   ScrollTrigger.create({
      //     trigger: section,
      //     start: "top top",
      //     snap: 1,
      //     end: "+=100%",
      //     pin: false,
      //     scrub: 1,
      //   });

      //   ScrollTrigger.create({
      //     snap: {
      //       snapTo: 1 / (sections.length - 1),
      //       duration: 0.5,
      //       ease: "none",
      //     },
      //   });
      // });
    },
    { scope: container }
  );

  return (
    <>
      <Navbar />
      <main className="flex flex-col h-screen snap-mandatory snap-y">
        <div ref={container} id="smooth-content" className="snap-start">
          <section className="section section1 snap-start">
            <Hero />
          </section>
          <section className="section section2 snap-start">
            <Features1 />
          </section>
          <section className="section section3 snap-start">
            <Features2 />
          </section>
          <section className="section section4 snap-start">
            <Features3 />
          </section>
          <section className="section section5 snap-start">
            <Specifications />
          </section>
          <section className="section section6 snap-start">
            <SpecNumber />
          </section>
          <section className="section section7 snap-start">
            <PictureBoard />
          </section>
          <section className="section section8 snap-start">
            <Advertisement />
          </section>
          <section className="section section9 snap-start">
            <Stories />
          </section>
          <section className="section section10 snap-start">
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
}
