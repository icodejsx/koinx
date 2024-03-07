import Image from "next/image";
import React from "react";

type props = {
  src: string;
  name: string;
  body: string;
};

const TeamBox = ({ src, name, body }: props) => {
  return (
    <div className="flex gap-7 items-center bg-[#E8F4FD] p-5 rounded-lg">
      <div className="flex flex-col gap-1">
        <Image
          src={src}
          alt=""
          width={250}
          height={100}
          className="w-[30rem]"
        />
        <p>{name}</p>
        <span className="text-xs text-textGray">Designation here</span>
      </div>
      <p className="text-sm">{body}</p>
    </div>
  );
};

export default TeamBox;
