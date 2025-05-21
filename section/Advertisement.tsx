import Image from "next/image";
import Link from "next/link";

import airXAd from "@/public/assets/Air X Img 2.png";
import Buttons from "@/components/Buttons";

const Advertisement = () => {
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
              <div className="flex flex-col gap-7 w-[450px] h-[280px]">
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
