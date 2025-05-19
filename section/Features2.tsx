import Image from "next/image";
import lexoZ from "@/public/assets/Features 2.2 Image.png";
import Link from "next/link";

const Features2 = () => {
  return (
    <div className="bg-[#1a1a1a] text-white">
      <div className="flex flex-row">
        <div className="flex items-center justify-center flex-[1]">
          <div className="flex flex-col gap-5 w-[380px] h-[500px]">
            <span className="text-4xl">Lexo Z</span>
            <span className="text-2xl">Accelerate into a New Era</span>
            <div className="flex items-center grow">
              <p className="text-sm font-[300]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip <br /> <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat
              </p>
            </div>
            <div className="flex flex-row gap-10 items-center">
              <Link href="#" className="py-2 px-8 bg-white text-[#1a1a1a]">
                Order Now
              </Link>
              <Link href="#" className="py-2 px-8">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={lexoZ}
            alt="Lexo Z"
            width={700}
            height={700}
            className="object-cover flex-[1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Features2;
