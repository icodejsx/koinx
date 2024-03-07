import React from "react";
import Link from "next/link";
const OverViewHead = () => {
  return (
    <div>
      <div className="self-stretch h box-border my-10  shrink-0 flex flex-row items-start justify-start  overflow-x-auto w-full px-0 gap-[0px_32px] text-base text-gray-2 border-b-[1px] b border-day-gray-04 ">
        <div className="flex items-center justify-center px-0 pb-1.5 text text-primary-blue border-b-[3px] border-solid border-primary-blue">
          <Link href="" className="relative tracking-[-0.01em] font-semibold">
            Overview
          </Link>
        </div>
        <Link href="" className="relative tracking-[-0.01em] font-medium">
          Fundamentals
        </Link>

        <Link href={""} className="relative  font-medium">
          Insights
        </Link>
        <Link href={""} className="relative tracking-[-0.01em] font-medium">
          Sentiments
        </Link>
        <Link href={""} className="relative tracking-[-0.01em] font-medium">
          Team
        </Link>
        <Link href="" className="relative tracking-[-0.01em] font-medium">
          Technicals
        </Link>
        <Link href={""} className="relative tracking-[-0.01em] font-medium">
          Tokenomics
        </Link>
      </div>
    </div>
  );
};

export default OverViewHead;
