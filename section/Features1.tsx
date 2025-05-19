import Image from "next/image";
import airXGif from "@/public/assets/Features 2.1 video.gif";
import bgImg from "@/public/assets/Hero Image.png";
import lexoZ from "@/public/assets/Features 2.2 Image.png";

const Features1 = () => {
  return (
    // <div className="bg-[#1a1a1a] flex flex-col justify-center text-white h-full">
    //   <div className="flex items-center justify-center border-b">
    //     <div className="flex flex-col gap-7">
    //       <span className="text-4xl">Air X</span>
    //       <Image
    //         src={bgImg}
    //         alt="Air x"
    //         unoptimized={false}
    //         width={700}
    //         height={700}
    //       />
    //       <span className="text-xl">Accelerate into a New Era</span>
    //     </div>
    //   </div>
    //   <div className="flex flex-row">
    //     <div></div>
    //     <div>
    //       <Image src={lexoZ} alt="Lexo Z" />
    //     </div>
    //   </div>
    // </div>

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
