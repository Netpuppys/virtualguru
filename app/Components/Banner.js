"use client";
import React, { useEffect, useState } from "react";
import TejaBanner from "../../public/Banner/TejaBanner.png";
import { FaArrowRight } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import Image from "next/image";
function Banner() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTargetDate = () => {
      const currentDate = new Date();
      const targetDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        23,
        59,
        59
      );
      return targetDate.getTime();
    };

    const calculateTimeLeft = () => {
      const targetDateTime = calculateTargetDate();
      const currentTime = new Date().getTime();
      const difference = targetDateTime - currentTime;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const signUp = () => {
    window.location.href =
      "https://thecareergrowthproject.ewebinar.com/webinar/tiny-noticeable-growth-hacks-18902";
  };
  return (
    <div className="w-[calc(100%-30px)] md:w-[calc(100%-50px)] mx-auto relative rounded-3xl my-[15px] md:my-[25px] h-fit shadow-[0px_4px_71.8px_0px_rgba(0,0,0,0.25)] min-h-[600px] bg-[#CB723A] bg-opacity-10 flex flex-col justify-center items-center">
      <div className="bg-[#FF914D] w-[70%] h-[18px] md:h-[24px] relative top-0 rounded-[0px_0px_45px_45px]"></div>
      <div className="flex flex-col py-8 md:py-[4%] md:flex-row w-[90%] mx-auto h-fit justify-between items-start">
        <div className="w-full md:w-fit  md:max-w-[70%]">
          <h6 className="bg-white flex flex-col md:block shadow-[0px_4px_16.9px_0px_rgba(0,0,0,0.25)] rounded-3xl md:rounded-full py-3 px-5 md:px-10 font-[NeueHaasDisplay400]">
            <span className="text-[#FF914D] underline underline-offset-4 font-[NeueHaasDisplayBold] font-bold">
              Attention Job Seekers:
            </span>{" "}
            Tired of applying for jobs and not getting any responses?
          </h6>
          <h2 className="pt-8 md:py-[4%] px-5 md:px-10 md:max-w-[70%] font-[NeueHaasDisplay400] font-normal">
            Finding jobs is not difficult! Learn a proven{" "}
            <span className="text-[#FF914D]">3 step framework </span>
            and find your
            <br />{" "}
            <strong className="text-[#FF914D] font-[NeueHaasDisplayBold] font-bold">
              Dream Job in just 30 days!
            </strong>
          </h2>
          <div className="hidden md:block w-full h-full px-5 md:px-10">
            <h6 className="pb-5 md:pb-[2%] font-[NeueHaasDisplay400] max-w-[60%] font-normal">
              Learn the most powerful and easiest strategy to crack any job and
              get high paying jobs ! Stay ahead of your competition with ease!
            </h6>
            <button onClick={signUp} className="w-full md:w-fit flex gap-5 group items-center font-[NeueHaasDisplayBold] text-white justify-center py-2 bg-[#FF914D] hover:bg-white hover:text-[#FF914D] transition-all ease-in duration-300 md:px-20 rounded-full">
              Join For Free Now{" "}
              <span className="w-fit h-fit rounded-full p-[6px] aspect-square bg-[#323A53] border-[#323A53] group-hover:bg-[#FFF] group-hover:border-[#323A53] border transition-all ease-in duration-300">
                <FaArrowRight />
              </span>
            </button>
            <div className="pt-5 md:pt-[1.5%] w-fit flex flex-col justify-center items-center">
              <h6 className="font-[NeueHaasDisplay400] font-normal">
                This is the{" "}
                <span className="text-[#FF914D] font-black">FASTEST</span> way
                to your dream job
              </h6>
              <div className="flex pt-5 md:pt-[2%] gap-5 justify-center items-center w-fit mx-auto">
                <div className="bg-[#ECD8CB] flex flex-col justify-center items-center gap-1 px-3 py-2 rounded-md">
                  <h4 className="text-[#323A53] font-[TTChocolatesMedium] font-semibold">
                    {timeLeft.hours?.toString().padStart(2, "0")}
                  </h4>
                  <h4 className="text-[#CC743E] font-[TTChocolatesMedium] font-normal">
                    Hrs
                  </h4>
                </div>
                <div className="bg-[#ECD8CB] flex flex-col justify-center items-center gap-1 px-3 py-2 rounded-md">
                  <h4 className="text-[#323A53] font-[TTChocolatesMedium] font-semibold">
                    {timeLeft.minutes?.toString().padStart(2, "0")}
                  </h4>
                  <h4 className="text-[#CC743E] font-[TTChocolatesMedium] font-normal">
                    Min
                  </h4>
                </div>
                <div className="bg-[#ECD8CB] flex flex-col justify-center items-center gap-1 px-3 py-2 rounded-md">
                  <h4 className="text-[#323A53] font-[TTChocolatesMedium] font-semibold">
                    {timeLeft.seconds?.toString().padStart(2, "0")}
                  </h4>
                  <h4 className="text-[#CC743E] font-[TTChocolatesMedium] font-normal">
                    Sec
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full pt-5 md:pt-[2%] flex justify-end items-center gap-3">
              <button onClick={signUp} className="buttonSmall group w-full md:w-fit flex gap-5 items-center font-[NeueHaasDisplayBold] text-white justify-center py-2 bg-[#FF914D] hover:bg-white hover:text-[#FF914D] transition-all ease-in duration-300 md:px-14 rounded-full">
                <div className="bg-white p-2 rounded-full !aspect-square group-hover:bg-[#FF914D] text-[#FF914D] group-hover:text-white transition-all ease-in duration-300">
                  <BiLogoLinkedin />
                </div>
                Top Career Growth Voice
              </button>
            </div>
          </div>
        </div>
        <div className="w-[80%] ml-auto md:mx-auto md:w-[25%] h-full relative flex justify-center items-center">
          <div className="bg-[#FF914D] bg-opacity-25 w-full absolute blur-2xl -z-10 aspect-square rounded-full"></div>
          <Image src={TejaBanner} alt="" className="w-full h-fit" />
        </div>
      </div>
      <div className="md:hidden w-full h-full px-5 md:px-10">
        <div className="w-full pb-5 flex justify-center items-center gap-3">
          <button onClick={signUp} className="buttonSmall group w-full md:w-fit flex gap-5 items-center font-[NeueHaasDisplayBold] text-white justify-center py-2 bg-[#FF914D] hover:bg-white hover:text-[#FF914D] transition-all ease-in duration-300 md:px-14 rounded-full">
            <div className="bg-white p-2 rounded-full group-hover:text-white !aspect-square group-hover:bg-[#FF914D] text-[#FF914D] transition-all ease-in duration-300">
              <BiLogoLinkedin />
            </div>
            Top Career Growth Voice
          </button>
        </div>
        <h6 className="px-5 pb-5 font-[NeueHaasDisplay400] font-normal">
          Learn the most powerful and easiest strategy to crack any job and get
          high paying jobs ! Stay ahead of your competition with ease!
        </h6>
        <button onClick={signUp} className="w-full md:w-fit flex gap-5 items-center font-[NeueHaasDisplayBold] text-white justify-center py-2 bg-[#FF914D] hover:bg-white hover:text-[#FF914D] transition-all ease-in duration-300 md:px-20 rounded-full">
          Join For Free Now{" "}
          <span className="w-fit h-fit rounded-full p-[6px] aspect-square bg-[#323A53] border-[#323A53] group-hover:bg-[#FFF] group-hover:border-[#323A53] border transition-all ease-in duration-300">
            <FaArrowRight />
          </span>
        </button>
        <div className="pt-5 md:pt-[1.5%] w-fit flex flex-col justify-center items-center">
          <h6 className="px-5 font-[NeueHaasDisplay400] font-normal">
            This is the{" "}
            <span className="text-[#FF914D] font-black">FASTEST</span> way to
            your dream job
          </h6>
          <div className="flex py-5 gap-5 justify-center items-center w-fit mx-auto">
            <div className="bg-[#ECD8CB] flex flex-col justify-center items-center gap-1 px-3 py-2 rounded-md">
              <h4 className="text-[#323A53] font-[TTChocolatesMedium] font-semibold">
                {timeLeft.hours?.toString().padStart(2, "0")}
              </h4>
              <h4 className="text-[#CC743E] font-[TTChocolatesMedium] font-normal">
                Hrs
              </h4>
            </div>
            <div className="bg-[#ECD8CB] flex flex-col justify-center items-center gap-1 px-3 py-2 rounded-md">
              <h4 className="text-[#323A53] font-[TTChocolatesMedium] font-semibold">
                {timeLeft.minutes?.toString().padStart(2, "0")}
              </h4>
              <h4 className="text-[#CC743E] font-[TTChocolatesMedium] font-normal">
                Min
              </h4>
            </div>
            <div className="bg-[#ECD8CB] flex flex-col justify-center items-center gap-1 px-3 py-2 rounded-md">
              <h4 className="text-[#323A53] font-[TTChocolatesMedium] font-semibold">
                {timeLeft.seconds?.toString().padStart(2, "0")}
              </h4>
              <h4 className="text-[#CC743E] font-[TTChocolatesMedium] font-normal">
                Sec
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
