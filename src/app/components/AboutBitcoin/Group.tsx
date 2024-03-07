import Image from "next/image";
import React from "react";

type Props = {
  bg: string;
  src: string;
  text: string;
};

const Group: React.FC<Props> = ({ bg, src, text }) => {
  return (
    <div
      style={{
        background: `${bg}`,
      }}
      className="flex gap-5 items-center col-span-1 rounded-xl pr-16"
    >
      <div className="p-2.5">
        <Image src={src} width={140} height={100} alt="" />
      </div>
      <div className="flex flex-col text- gap-3 text-white ">
        <p className="font-bold text">{text}</p>
        <div className="inline">
          <button className="flex text-sm font-bold gap-4 items-center justify-center bg-white rounded-xl  px-2 py-2 text-black">
            <p> Check Now</p>
            <img src="/icons/Arrow - Right.svg" className="w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Group;
