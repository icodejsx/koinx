import Image from "next/image";
import React from "react";

const GetStarted = () => {
  return (
    <div className="bg-[#1b4aef] text-white p-10 flex flex-col text-center justify-center items-center gap-7 rounded-xl">
      <p className="text-3xl font-bold"> Get Started with KoinX for free</p>
      <p className="text-sm">
        With our range of features that you can equip for free coins, KoinX
        allows you to be more educated and aware of your tax report{" "}
      </p>
      <Image src="/images/girll.svg" width={250} height={100} alt="" />
      <button className="flex gap-4 items-center text-black font-bold  py-2  px-6 bg-white rounded-xl">
        <p>Get Started for FREE</p>
        <Image src="/icons/Arrow - Right.svg" width={30} height={100} alt="" />
      </button>
    </div>
  );
};

export default GetStarted;
