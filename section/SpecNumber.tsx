import SpecNumCard from "@/components/SpecNumCard";
import React from "react";

const SpecNumber = () => {
  return (
    <div className="bg-[#1a1a1a] text-white flex items-center justify-between">
      <div className="w-4/5 h-[380px] flex items-center justify-around mx-auto">
        <SpecNumCard label="Max Power" value="1200+" units="hp" />
        <SpecNumCard label="EPA estimated range up to" value="516" units="mi" />
        <SpecNumCard label="minutes to charge 200 mi" value="12" units="mins" />
        <SpecNumCard label="0-60 mph" value="<2" units="sec" />
      </div>
    </div>
  );
};

export default SpecNumber;
