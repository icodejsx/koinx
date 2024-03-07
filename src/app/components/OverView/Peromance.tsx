import React from "react";
import Td from "../td";

const Peromance = () => {
  return (
    <div className="bg-[#FFFFFF] px-2 lg:px-6 rounded-lg ">
      <div className="self-stretch rounded-lg bg-gray-white flex flex-col items-center justify-start pt-[23px] pb-[53px] box-border gap-[24px_0px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start text-gray-1">
          <h3 className="m-0 relative text-inherit leading-[28.8px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
            Performance
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border gap-[13px_0px] min-h-[1px] max-w-full text-sm lg:text-sm-8 overflow-x-auto">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[0px_7px] max-w-full mq800:flex-wrap">
            <div className="w-[116px] flex flex-col items-start justify-start pt-1.5 px-0 pb-[13px] box-border gap-[10px_0px] min-w-[85px]">
              <div className="relative leading-[20px]">Today’s Low</div>
              <div className="relative text-base-6 leading-[22px] font-medium">
                46,930.22
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[33px] pb-0 pr-px pl-0 box-border max-w-full text-sm ">
              <div className="self-stretch flex flex-col items-end justify-start gap-[7px_0px]">
                <div className="self-stretch h-3.5 flex flex-col items-end justify-start gap-[1px_0px]">
                  <div className="self-stretch h-[4.6px]  rounded-3xs [background:linear-gradient(90deg,_#ff4949,_#ff4e11_15.33%,_#fc870a_30.44%,_#feae11_48.67%,_#c2cb21_62.73%,_#11eb68)] flex flex-col items-start justify-start">
                    <div className="self-stretch h-[5px] relative rounded-3xs   hidden" />
                  </div>
                  <div className="w-[266px]  flex flex-row items-start justify-center py-0 px-5 box-border">
                    <div className="h-2 w-3 relative overflow-hidden shrink-0">
                      <div className="absolute bottom-[-2.11px] left-[5.65px] bg-absolute-black w-2 h-2 [transform:_rotate(45deg)] [transform-origin:0_0]" />
                    </div>
                  </div>
                </div>
                <div className="w-[266px] flex flex-row items-start justify-center py-0 px-5 box-border">
                  <div className="relative leading-[20px] whitespace-nowrap">
                    $48,637.83
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[115px] flex flex-col items-end justify-start pt-1.5 px-0 pb-[13px] box-border gap-[10px_0px] min-w-[85px] text-right text-sm-6">
              <div className="relative leading-[20px]">Today’s High</div>
              <div className="relative text-base-6 leading-[22px] font-medium">
                49,343.83
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[3px] pl-0 box-border gap-[0px_7px] max-w-full text-sm mq800:flex-wrap">
            <div className="w-[121px] flex flex-col items-start justify-start pt-1.5 px-0 pb-[13px] box-border gap-[10px_0px] min-w-[85px]">
              <div className="relative leading-[20px]">52W Low</div>
              <div className="relative text-base-6 leading-[22px] font-medium">
                16,930.22
              </div>
            </div>
            <div className="h-[4.6px] flex-1 rounded-3xs [background:linear-gradient(90deg,_#ff4949,_#ff4e11_15.33%,_#fc870a_30.44%,_#feae11_48.67%,_#c2cb21_62.73%,_#11eb68)] flex flex-col items-start justify-start min-w-[376px] max-w-full mq800:min-w-full">
              <div className="self-stretch h-[5px] relative rounded-3xs [background:linear-gradient(90deg,_#ff4949,_#ff4e11_15.33%,_#fc870a_30.44%,_#feae11_48.67%,_#c2cb21_62.73%,_#11eb68)] hidden" />
            </div>
            <div className="w-[114px] flex flex-col items-end justify-start pt-1.5 px-0 pb-[13px] box-border gap-[10px_0px] min-w-[85px] text-right text-sm-8">
              <div className="relative leading-[20px]">52W High</div>
              <div className="relative text-base-6 leading-[22px] font-medium">
                49,743.83
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col  gap-4 py-10">
        <div className="flex items-center gap-2">
          <p className="font-bold text-xl text-[#44475B]">Fundamentals</p>
          <img src="/icons/note.png" className="" />
        </div>
        <main className="lg:grid flex flex-col gap-4 grid-cols-2 w-full gap-10 text-xs">
          <div className="col-span-1 flex flex-col gap-5">
            <div className="flex justify-between items-center border-b-2 pb-4">
              <p className="text-textGray">Bitcoin Price</p>
              <p className="font-semibold">$16,815.46</p>
            </div>
            <div className="flex justify-between items-center border-b-2 pb-4">
              <p className="text-textGray">24h Low / 24h High</p>
              <p className="font-semibold">$16,382.07 / $16,874.12</p>
            </div>
            <div className="flex justify-between items-center border-b-2 pb-4">
              <p className="text-textGray">7d Low / 7d High</p>
              <p className="font-semibold">$16,382.07 / $16,874.12</p>
            </div>
            <div className="flex justify-between items-center border-b-2 pb-4">
              <p className="text-textGray">Trading Volume</p>
              <p className="font-semibold">$23,249,202,782</p>
            </div>
            <div className="flex justify-between items-center border-b-2 pb-4">
              <p className="text-textGray">Market Cap Rank</p>
              <p className="font-semibold">#1</p>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-5">
            <div className="flex justify-between items-center border-b-2 pb-4">
              <p className="text-textGray">Market Cap</p>
              <p className="font-semibold">$323,507,290,047</p>
            </div>
            <div className="flex justify-between items-center border-b-2 pb-4">
              <p className="text-textGray">Market Cap Dominance</p>
              <p className="font-semibold">38.343%</p>
            </div>
            <div className="flex justify-between items-center border-b-2 pb-4">
              <p className="text-textGray">Volume / Market Cap</p>
              <p className="font-semibold">0.0718</p>
            </div>
            <div className="flex justify-between items-center border-b-2 pb- w-full">
              <p className="text-textGray">All-Time High</p>
              <div className="flex flex-col justify-end items-end">
                <p className="font-semibold">
                  $69,044.77 <span className="text-[#F7324C]">-75.6%</span>
                </p>
                <p className="text-xs">Nov 10, 2021 (about 1 year)</p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-2 pb- w-full">
              <p className="text-textGray">All-Time low</p>
              <div className="flex flex-col justify-end items-end">
                <p className="font-semibold">
                  $67.81 <span className="text-[#0FBA83]">24729.1%</span>
                </p>
                <p className="text-xs">Jul 06, 2013 (over 9 years)</p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Peromance;
