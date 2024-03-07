import React from "react";
import SentimentsBox from "./SentimentsBox";
import Analyst from "./Analyst";

const Sentments = () => {
  return (
    <section className="p-4 bg-white my-6">
      <main className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">Sentiment </h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <p className="font-bold text- text-[#44475B]">Key Events</p>
            <img src="/icons/note.png" className="" />
          </div>
          <main className="lg:grid flex flex-col grid-cols-2 text-xs gap-5">
            <SentimentsBox
              src="/icons/blue.svg"
              title=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat"
              body="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            ipsum qui natus sunt laborum unde? Eveniet atque voluptatibus,
            laboriosam blanditiis temporibus pariatur, earum rerum fugit fugiat
            nihil asperiores inventore quam?"
            />
            <SentimentsBox
              src="/icons/green.svg"
              title=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat"
              body="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            ipsum qui natus sunt laborum unde? Eveniet atque voluptatibus,
            laboriosam blanditiis temporibus pariatur, earum rerum fugit fugiat
            nihil asperiores inventore quam?"
            />
          </main>
        </div>
      </main>
      <Analyst />
    </section>
  );
};

export default Sentments;
