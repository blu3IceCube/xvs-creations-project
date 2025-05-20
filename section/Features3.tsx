import Image from "next/image";
import bgImg from "@/public/assets/Features 2.3 Img.png";
import Buttons from "@/components/Buttons";

const Features3 = () => {
  return (
    <div className="relative h-full">
      <div className="h-screen">
        <div className="absolute bottom-0 left-0 right-0 h-[380px]">
          <Image src={bgImg} alt="background" className="object-cover" fill />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center">
          <div className="flex flex-row grow">
            <div className="flex items-center justify-center flex-[1]">
              <div className="flex flex-col gap-5 w-[450px] h-[280px]">
                <span className="text-5xl">Air X</span>
                <span className="text-3xl">Accelerate into a New Era</span>
                <div className="flex items-center grow">
                  <p className="font-[400] w-[380px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
                <Buttons
                  texts={["Order Now", "Learn More"]}
                  startColor="black"
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

export default Features3;
