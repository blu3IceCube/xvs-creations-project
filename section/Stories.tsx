"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import stories from "@/data/stories";
import Image from "next/image";
import ImgCard from "@/components/ImgCard";

const Stories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 320; // adjust based on card width + spacing

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="bg-[#1a1a1a] text-white pt-20">
      <div className="h-screen">
        <div className="h-4/5 w-4/5 mx-auto">
          {/* Header Row */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-light">Our Stories</h2>
            <div className="flex space-x-4">
              <button
                onClick={scrollLeft}
                className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Scrollable Stories Row */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-8 scroll-smooth scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {stories.map((story) => (
              <ImgCard
                key={story.id}
                src={story.image}
                label={story.title}
                description={story.description}
                width="350px"
                height="400px"
                align="start"
                txtWidth="320px"
                size="20px"
                txtSize="14px"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
