"use client";

import ImgCard from "@/components/ImgCard";
import img1 from "@/public/assets/img1.png";
import img2 from "@/public/assets/Performance Img.png";
import img3 from "@/public/assets/Interiors Img.png";
import img4 from "@/public/assets/Story 2 Img.png";
import img5 from "@/public/assets/Air X img.png";

import collage1 from "@/public/assets/img1.png";
import collage2 from "@/public/assets/img2.png";
import collage3 from "@/public/assets/img3.png";
import collage4 from "@/public/assets/img4.png";
import Collage from "@/components/Collage";

import collageSideImg from "@/public/assets/imgRightLarge.png";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PictureBoard = () => {
  const imageBox = useRef(null);
  const revealBox = useRef(null);

  useGSAP(() => {
    const reveal = revealBox.current;
    if (reveal) {
      gsap.fromTo(
        reveal,
        {
          width: "100%",
        },
        {
          width: "0%",
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageBox.current,
            toggleActions: "restart none restart reset",
            start: "30% center",
          },
        }
      );
    }
  });

  return (
    <div className="bg-[#1a1a1a] text-white flex">
      <div className="w-4/5 mx-auto py-20 flex flex-col gap-24">
        <div className="flex justify-between items-start">
          <ImgCard
            src={img1}
            label="Impeccable Design"
            width="250px"
            height="280px"
          />

          <ImgCard
            src={img2}
            label="Elevated Performance"
            width="250px"
            height="280px"
          />

          <ImgCard
            src={img3}
            label="Great interiors"
            width="250px"
            height="280px"
          />
        </div>
        <div className="flex justify-between items-start flex-[1]">
          <ImgCard src={img4} width="450px" height="450px" />
          <ImgCard
            src={img5}
            width="500px"
            height="250px"
            label="Drive to a sustainable future"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            align="start"
            size="24px"
          />
        </div>
        <div className="flex justify-between items-start flex-[1]">
          <Collage
            images={[
              { src: collage1, alt: "image 1" },
              { src: collage2, alt: "image 2" },
              { src: collage3, alt: "image 3" },
              { src: collage4, alt: "image 4" },
            ]}
          />
          <div className="h-full flex flex-[1] justify-end">
            <div className="h-full relative w-2/3" ref={imageBox}>
              <Image
                src={collageSideImg}
                alt="image"
                className="object-contain"
                fill
                sizes="100vw"
              />
              <div
                ref={revealBox}
                className="absolute inset-0 bg-[#1a1a1a] z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureBoard;
