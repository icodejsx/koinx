import React from "react";

const OverView = () => {
  return (
    <div>
      <div className="self-stretch h-12 box-border  shrink-0 flex flex-row items-start justify-start py-0 px-0 gap-[0px_32px] text-base text-gray-2 border-b-[1px] b border-day-gray-04 ">
        <div className="flex items-center justify-center pt-[15px] px-0 pb-1.5 text text-primary-blue border-b-[3px] border-solid border-primary-blue">
          <div className="relative tracking-[-0.01em] font-semibold">
            Overview
          </div>
        </div>
        <div className="mt-[-11px] mb-[-11px] flex flex-row items-center justify-center pt-[26px] px-0 pb-[25px]">
          <div className="relative tracking-[-0.01em] font-medium">
            Fundamentals
          </div>
        </div>
        <div className="mt-[-11px] mb-[-11px] flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[0px_28px]">
          <div className="flex flex-row items-center justify-center pt-[26px] px-0 pb-[25px]">
            <div className="relative tracking-[-0.01em] font-medium">
              News Insights
            </div>
          </div>
          <div className="flex flex-row items-center justify-center pt-[26px] px-0 pb-[25px]">
            <div className="relative tracking-[-0.01em] font-medium">
              Sentiments
            </div>
          </div>
        </div>
        <div className="mt-[-11px] mb-[-11px] flex flex-row items-center justify-center pt-[26px] px-0 pb-[25px]">
          <div className="relative tracking-[-0.01em] font-medium">Team</div>
        </div>
        <div className="mt-[-11px] mb-[-11px] flex flex-row items-center justify-center pt-[26px] px-0 pb-[25px]">
          <div className="relative tracking-[-0.01em] font-medium">
            Technicals
          </div>
        </div>
        <div className="mt-[-11px] mb-[-11px] flex flex-row items-center justify-center pt-[26px] px-0 pb-[25px]">
          <div className="relative tracking-[-0.01em] font-medium">
            Tokenomics
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
