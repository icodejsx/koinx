import Image from "next/image";
import HeroSection from "./components/HeroSection";
import GetStarted from "./components/GetStarted";
import Trending from "./components/Trending";
import OverView from "./components/OverView/OverView";

export default function Home() {
  return (
    <main className="bg-gray-100 px-16  py-6">
      <div className="flex gap-2 text-sm pb-4">
        <h1>Cryptocurrency </h1>
        {">>"}
        <p className="font-medium">Bitcoin</p>
      </div>
      <div className="  grid grid-cols-6 gap-10">
        <div className="col-span-4">
          <HeroSection />
          <OverView />
        </div>

        <div className="col-span-2 flex flex-col gap-4">
          <GetStarted />
          <Trending />
        </div>
      </div>
    </main>
  );
}
