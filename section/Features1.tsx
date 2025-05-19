import Image from "next/image";
import bgImg from "@/public/assets/Hero Image.png";

const Features1 = () => {
  return (
    <div className="bg-[#1a1a1a] flex flex-col justify-center text-white h-full">
      <div className="flex items-center justify-center border-b h-screen">
        <div className="flex flex-col gap-5">
          <span className="text-5xl">Air X</span>
          <div>
            <Image
              src={bgImg}
              alt="Air x"
              unoptimized={false}
              width={700}
              height={700}
            />
          </div>
          <span className="text-lg">Accelerate into a New Era</span>
        </div>
      </div>
    </div>
  );
};

export default Features1;
