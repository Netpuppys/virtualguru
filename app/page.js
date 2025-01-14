import Image from "next/image";
import Banner from "./Components/Banner";
import WhyShouldAttend from "./Components/WhyShouldAttend";
import SuperLoved from "./Components/SuperLoved";
import SomeMore from "./Components/SomeMore";
import Category from "./Components/Category";
import EveryOneAroundYou from "./Components/EveryOneAroundYou";
import Join from "./Components/Join";
import PowerfullWebinar from "./Components/PowerfullWebinar";
import AboutCoach from "./Components/AboutCoach";
import Brands from "./Components/Brands";
import FAQ from "./Components/FAQ";

export default function Home() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="bg-[#FF914D] absolute top-0 left-0 -z-10 bg-opacity-30 w-[25vw] aspect-[1.2/1] blur-2xl rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <Banner />
      <WhyShouldAttend />
      <SuperLoved />
      <SomeMore />
      <Category />
      <EveryOneAroundYou />
      <Join />
      <PowerfullWebinar />
      <AboutCoach />
      <Brands />
      <FAQ />
    </div>
  );
}
