import Image from "next/image";
import React from "react";

const Trending = () => {
  return (
    <div className="flex flex-col items-center gap-5 bg-white py-10 rounded-xl w-full px-6">
      <p className="font-bold text-xl">Trending Coins (24h)</p>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <Image src="/icons/eth.svg" width={20} height={10} alt="" />
          <p className="font-bold text-">Ethereum(ETH)</p>
        </div>
        <div className="inline">
          <div className="bg-[#bcffe7] flex items-center px-4 text-[#14B079] gap-2 py-1">
            <Image src="/icons/arroww.svg" width={18} height={10} alt="" />
            8.21%
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <Image src="/icons/btc.svg" width={20} height={10} alt="" />
          <p className="font-bold text-">Bitcoin (BTC)</p>
        </div>
        <div className="inline">
          <div className="bg-[#bcffe7] flex items-center px-4 text-[#14B079] gap-2 py-1">
            <Image src="/icons/arroww.svg" width={18} height={10} alt="" />
            5.21%
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <Image src="/icons/sol.svg" width={20} height={10} alt="" />
          <p className="font-bold text-">Polygon (MATIC)</p>
        </div>
        <div className="inline">
          <div className="bg-[#bcffe7] flex items-center px-4 text-[#14B079] gap-2 py-1">
            <Image src="/icons/arroww.svg" width={18} height={10} alt="" />
            4.21%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
