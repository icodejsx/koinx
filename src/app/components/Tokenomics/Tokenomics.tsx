import Image from "next/image";
import React from "react";

const Tokenomics = () => {
  return (
    <section className=" bg-white w-full ">
      <main className="p-5 my-4 ">
        <h1 className="font-bold text-xl pb-5">Tokenomics</h1>
        <div className="flex flex-col gap-5">
          <h1 className=" font-bold">Initial Distribution</h1>
          <div className="flex lg:flex-row flex-col  lg:items-center gap-5">
            <Image src="/icons/token.svg" width={150} height={100} alt="" />
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <p className="w-3 h-3 rounded-full bg-[#0082FF]"> </p>
                <p>Crowdsale investors: 80%</p>
              </div>
              <div className="flex gap-3 items-center">
                <p className="w-3 h-3 rounded-full bg-[#FAA002]"> </p>
                <p>Foundation: 20%</p>
              </div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
            ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
            bibendum amet enim sit eget leo amet. At metus orci augue fusce
            eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales
            massa habitasse urna felis augue. Gravida aliquam fermentum augue
            eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio
            rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae.
            Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio
            nisi eu ac risus.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Tokenomics;
