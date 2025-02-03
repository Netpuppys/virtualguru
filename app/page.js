"use client";
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
import EWebinarButton from "./Components/EWebinarbutton";

export default function Home() {
  const signUp = () => {
    window.location.href =
      "https://thecareergrowthproject.ewebinar.com/webinar/tiny-noticeable-growth-hacks-18902";
  };
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="bg-[#FF914D] absolute top-0 left-0 -z-10 bg-opacity-25 w-[25vw] min-w-[350px] aspect-[1.2/1] blur-2xl rounded-full -translate-x-1/3 -translate-y-1/3"></div>
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
      <div className="fixed bottom-0 z-20 bg-[#323A53] px-[8%] md:px-[2%] w-full h-[112px] flex gap-[8%] md:gap-auto justify-between items-center">
        <h2 className="text-white flex flex-col md:flex-row md:items-center md:gap-3 leading-tight">
          Free <strong className="text-[#FF914D]">Workshop</strong>
        </h2>
        {/* <button
          onClick={signUp}
          className="w-full shadow-[0px_4px_20.1px_0px_rgba(0,0,0,0.25)] md:w-fit flex gap-5 items-center font-[NeueHaasDisplayBold] text-white justify-center py-2 bg-[#FF914D] md:px-20 rounded-full hover:bg-white hover:text-[#FF914D] transition-all ease-in duration-300"
        >
          Register Now
        </button> */}
        <EWebinarButton />
      </div>

    </div>
  );
}
