import React from "react";

const Analyst = () => {
  return (
    <div className="py-6 flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <p className="font-bold text-xl text-[#44475B]">Analyst Estimates</p>
        <img src="/icons/note.png" className="" />
      </div>
      <div className="flex lg:flex-row flex-col gap-5 justify-center lg:justify-start lg:gap-16">
        <div
          className="rounded-full flex items-center bg-[#EBF9F4] text-green-600
        text-[2rem] font-semibold h-32 w-32 justify-center"
        >
          76<span className="text-sm">%</span>
        </div>
        <div className="text-textGray flex flex-col gap-4">
          <div className="flex items-center gap-4 justify-start">
            <p>Buy</p>
            <p className=" border-4 border-[#00B386] h-2 rounded-full w-72"></p>
            <p>76%</p>
          </div>
          <div className="flex items-center gap-3 justify-start">
            <p>Hold</p>
            <p className=" border-4 border-[#636766] h-2 rounded-full w-10"></p>
            <p>8%</p>
          </div>
          <div className="flex items-center gap-4  justify-start">
            <p>Sell</p>
            <p className=" border-4 border-[#b30000] h-2 rounded-full w-24"></p>
            <p>16%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyst;
