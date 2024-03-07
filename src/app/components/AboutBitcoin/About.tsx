import React from "react";
import Group from "./Group";

const About = () => {
  return (
    <section className="mt-6 bg-white p-5">
      <h1 className=" font-bold text-2xl">About Bitcoin</h1>
      <main className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 py-6">
          <h1 className="font-bold">What is Bitcoin?</h1>
          <p>
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div className="flex flex-col gap-3 py-6 border-y-2">
          <h1 className="font-bold">Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>
          <p>
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
          </p>
          <p>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>

        <div className="flex flex-col gap-3 py-6">
          <h1 className="font-bold text-xl">Already Holding Bitcoin?</h1>
          <div className=" lg:grid flex-col flex  grid-cols-2 gap-8">
            <Group
              src="/images/pic2.png"
              text="Calculate your Profits"
              bg="linear-gradient(135.73deg, #79F1A4, #0E5CAD)"
            />

            <Group
              bg="linear-gradient(135.73deg, #ff9865, #ef3031)"
              src="/images/pic1.png"
              text="Calculate your tax liability"
            />
          </div>
          <p className="py-4 border-t">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
      </main>
    </section>
  );
};

export default About;
