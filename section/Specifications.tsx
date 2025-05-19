import SpecCard from "@/components/SpecCard";
import Link from "next/link";

const Specifications = () => {
  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: "url('/assets/Model-X-Specs-Hero-Desktop-LHD.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center text-white">
        <div className="flex flex-row grow h-full">
          <div className="flex items-center justify-center flex-[1]"></div>
          <div className="flex items-center justify-center flex-[1]">
            <div className="flex flex-col gap-16">
              <span className="text-2xl font-light">
                Model Air X Specifications
              </span>
              <div className="grid grid-cols-2 gap-y-10 gap-x-32 font-extralight">
                <SpecCard label="Range (EPA est.)" value="Up to 300 miles" />
                <SpecCard label="Acceleration" value="4.5s 0-60 mph" />
                <SpecCard label="Peak Power" value="400 hp" />
                <SpecCard label="wheels" value='19" or 20"' />
                <SpecCard label="Towing" value="2000 pounds" />
                <SpecCard label="Seating" value="Up to 5" />
                <SpecCard label="Drag Coefficient" value="0.28 cd" />
                <SpecCard label="Top Speed" value="130 mph" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
