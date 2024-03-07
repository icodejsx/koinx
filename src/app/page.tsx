import Image from "next/image";
import HeroSection from "./components/Herosection/HeroSection";
import GetStarted from "./components/Herosection/GetStarted";
import Trending from "./components/Herosection/Trending";
import OverView from "./components/OverView/OverView";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import SentimentsBox from "./components/Sentments/SentimentsBox";
import About from "./components/AboutBitcoin/About";
import Sentments from "./components/Sentments/Sentments";
import Team from "./components/Team/Team";
import YoumayLike from "./components/youMayLike/YoumayLike";

export default function Home() {
  return (
    <section>
      <main className="bg-gray-100 lg:px-16 px-4  py-6">
        <div className="flex gap-2 text-sm pb-2">
          <h1 className="text-textGray">Cryptocurrency </h1>
          {">>"}
          <p className="font-medium">Bitcoin</p>
        </div>
        <div className="  lg:grid grid-cols-6 gap-10">
          <div className="col-span-4">
            <HeroSection />
            <OverView />
            <Sentments />
            <About />
            <Tokenomics />
            <Team />
          </div>

          <div className="col-span-2 flex flex-col gap-4">
            <GetStarted />
            <Trending />
          </div>
        </div>
      </main>
      <YoumayLike />
    </section>
  );
}
