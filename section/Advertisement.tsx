import Image from "next/image";
import Link from "next/link";

import airXAd from "@/public/assets/Air X Img 2.png";

const Advertisement = () => {
  return (
    <div className="relative h-full text-white">
      <div className="h-screen">
        {/* <div className=""> */}
        <Image
          src={airXAd}
          alt="background"
          className="object-cover brightness-75"
          sizes="100vw"
          fill
        />
        {/* </div> */}
        <div className="absolute bottom-5 left-0 right-0 flex items-center">
          <div className="flex flex-row grow">
            <div className="flex items-center justify-center flex-[1]">
              <div className="flex flex-col gap-7 w-[450px] h-[280px]">
                <span className="text-5xl">Air X</span>
                <span className="text-2xl font-light">
                  Accelerate into a New Era
                </span>
                {/* <div className="flex items-center grow">
                  <p className="font-[400] w-[380px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div> */}
                <div className="flex flex-row gap-10 items-center">
                  <Link href="#" className="py-2 px-8 bg-white text-black">
                    Order Now
                  </Link>
                  <Link href="#" className="py-2 px-8">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-[1]"></div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex">
    //   <div
    //     className="h-[500px] w-full"
    //     style={{
    //       backgroundImage: "url('/assets/Air X Img 2.png')",
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //       backgroundRepeat: "no-repeat",
    //     }}
    //   ></div>
    // </div>
  );
};

export default Advertisement;
