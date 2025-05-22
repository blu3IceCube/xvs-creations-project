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
  const scroll = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollSmoother.create({
        wrapper: "#main-scroll",
        content: "#smooth-content",
        smooth: 2,
      });

      // gsap.set(".scroll-container", {
      //   opacity: 0,
      //   scale: 0.5,
      //   y: -100,
      // });

      // gsap.set(".scroll-container:first-child", {
      //   opacity: 1,
      //   scale: 1,
      //   y: 0,
      // });

      // const t1 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".scroll-container",
      //     start: "top top",
      //     end: "bottom bottom",
      //     scrub: 1,
      //     markers: true,
      //   },
      // });

      // const items = document.querySelectorAll(".scroll-container");

      // items.forEach((item, index) => {
      //   console.log("item", item, "index", index);

      //   if (index > 0) {
      //     console.log("inside index < 0", items[index - 1]);

      //     t1.to(items[index - 1], {
      //       opacity: 0,
      //       scale: 0.5,
      //       y: -100,
      //       ease: "none",
      //     });
      //   }

      //   t1.to(
      //     item,
      //     {
      //       opacity: 1,
      //       scale: 1,
      //       y: 0,
      //       ease: "none",
      //     },
      //     "-=0.9"
      //   );

      //   if (index < items.length - 1) {
      //     t1.to(
      //       item,
      //       {
      //         opacity: 0,
      //         scale: 0.5,
      //         y: -100,
      //         ease: "none",
      //       },
      //       "-=0.4"
      //     );
      //   }
      // });

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
    { scope: scroll }
  );

  return (
    <>
      <Navbar />
      <main
        className="flex flex-col h-screen snap-mandatory snap-y"
        ref={scroll}
      >
        <div id="main-scroll">
          <div ref={container} id="smooth-content" className="snap-start">
            <section className="section section1 snap-start scroll-container">
              <Hero />
            </section>
            <section className="section section2 snap-start scroll-container">
              <Features1 />
            </section>
            <section className="section section3 snap-start scroll-container">
              <Features2 />
            </section>
            <section className="section section4 snap-start scroll-container">
              <Features3 />
            </section>
            <section className="section section5 snap-start scroll-container">
              <Specifications />
            </section>
            <section className="section section6 snap-start scroll-container">
              <SpecNumber />
            </section>
            <section className="section section7 snap-start scroll-container">
              <PictureBoard />
            </section>
            <section className="section section8 snap-start scroll-container">
              <Advertisement />
            </section>
            <section className="section section9 snap-start scroll-container">
              <Stories />
            </section>
            <section className="section section10 snap-start scroll-container">
              <Footer />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
