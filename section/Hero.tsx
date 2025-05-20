import Image from "next/image";
import Link from "next/link";

import HeroImg from "@/public/assets/Hero Image.png";

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative">
      <div className="h-screen">
        <Image
          src={HeroImg}
          alt="Hero"
          className="object-cover brightness-75"
          sizes="100vw"
          fill
        />

        <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 -translate-y-6 text-white z-10">
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
