import React from "react";

type SentimentProps = {
  src: string;
  title: string;
  body: string;
};

const SentimentsBox = ({ src, title, body }: SentimentProps) => {
  return (
    <div>
      <div className="col-span-1 flex bg-[#E8F4FD] p-4 gap-3 items-start rounded-xl">
        <img src={src} className="" />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">{title}</h1>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default SentimentsBox;
