import React from "react";
import tejaCoach from "../../public/AboutCoach/tejaCoach.png";
import Image from "next/image";
import award1 from "../../public/AboutCoach/award1.png";
import award2 from "../../public/AboutCoach/award2.png";
import { FaArrowRight } from "react-icons/fa";
function AboutCoach() {
  const award = [
    {
      image: award1,
      title: "Education 2.0 for excellence in Education",
      description: "Dubai 2024",
    },
    {
      image: award2,
      title: "Best Career Growth Program",
      description: "Asia’s Icon Awards, Colombo, 2024",
    },
  ];
  return (
    <div className="w-full h-full relative">
      <div className="bg-[#FF914D] absolute top-0 left-0 -z-10 bg-opacity-25 w-[25vw] min-w-[350px] aspect-[1.2/1] blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="w-[calc(100%-30px)] md:w-[calc(100%-50px)] mx-auto relative rounded-3xl my-[15px] md:my-[25px] h-fit shadow-[0px_4px_71.8px_0px_rgba(0,0,0,0.25] min-h-[600px] bg-[#CB723A] bg-opacity-10 flex flex-col justify-center items-center">
        <div className="bg-[#FF914D] w-[70%] h-[18px] md:h-[24px] relative top-0 rounded-[0px_0px_45px_45px]"></div>
        <div className="flex flex-col py-8 md:py-[4%] md:flex-row w-[90%] mx-auto h-fit justify-between items-center">
          <h2 className="md:hidden px-4 md:px-0 pt-8 w-full font-[NeueHaasDisplay400] font-normal">
            <strong className="font-[NeueHaasDisplay400]">
              About Your Coach
              <br />
              <span className="text-[#FF914D] font-[NeueHaasDisplayBold] font-bold">
                Teja Gudluru
              </span>
            </strong>
          </h2>
          <div className="w-[85%] mx-auto md:w-[25%] h-full relative flex justify-center items-center">
            <div className="bg-[#FF914D] bg-opacity-25 w-full absolute blur-2xl -z-10 aspect-square rounded-full"></div>
            <Image src={tejaCoach} alt="" className="w-full h-fit" />
          </div>
          <div className="w-full md:w-[55%]">
            <h2 className="hidden md:block pt-8 md:py-[4%] w-fit font-[NeueHaasDisplay400] font-normal">
              <strong className="font-[NeueHaasDisplay400]">
                About Your Coach{" "}
                <span className="text-[#FF914D] font-[NeueHaasDisplayBold] font-bold">
                  Teja Gudluru
                </span>
              </strong>
            </h2>
            <h6 className="pt-8 md:pt-5 px-4 md:px-0 md:pb-[2%] font-[NeueHaasDisplay400] font-normal">
              <span className="text-[#FF914D] font-[NeueHaasDisplayBold] font-bold">
                Teja Gudluru
              </span>{" "}
              is one of India’s leading Career Coaches with over 80 Global
              clients across 54 countries. He has impacted over 30,000
              professionals worldwide with his{" "}
              <span className="text-[#FF914D] font-[NeueHaasDisplayBold] font-bold">
                Career Growth and Leadership coaching.
              </span>{" "}
              He has been a visiting faculty at premier institutes like IIM
              Udaipur and IIT Kanpur in the past. Teja has an overall experience
              of{" "}
              <span className="text-[#FF914D] font-[NeueHaasDisplayBold] font-bold">
                23+ years.
              </span>{" "}
              He is a{" "}
              <span className="text-[#FF914D] font-[NeueHaasDisplayBold] font-bold">
                2x TEDx Speaker, 5X LinkedIn top voice and a serial
                entrepreneur.
              </span>
            </h6>
          </div>
        </div>
        <div className="w-[95%] mx-auto px-3 h-full">
          <h2 className="md:text-center px-4 md:px-0 pb-4 md:pb-[2%] font-[NeueHaasDisplay400]">
            <span className="font-[NeueHaasDisplayBold] text-[#FF914D]">
              Most awarded
            </span>{" "}
            Career Growth Program{" "}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-[60%] mx-auto h-full gap-8 md:gap-[10%]">
            {award.map((award, index) => (
              <div
                key={index}
                className="h-full w-full flex flex-col gap-2 items-center justify-center"
              >
                <Image
                  src={award.image}
                  alt=""
                  className="w-full h-full shadow-[0px_4px_27.8px_0px_rgba(0,0,0,0.25)] border object-cover aspect-[1.5/1] border-[#FF914D] bg-[#EBDFD6] rounded-2xl"
                />
                <h7 className="text-[#323A53] font-[NeueHaasDisplayBold] font-demibold">
                  {award.title}
                </h7>
                <h7 className="text-[#FF914D] font-[NeueHaasDisplayBold] font-demibold">
                  {award.description}
                </h7>
              </div>
            ))}
          </div>
          <button className="my-8 md:my-[3%] w-full md:w-fit mx-auto flex gap-5 items-center font-[NeueHaasDisplayBold] text-white justify-center py-2 bg-[#FF914D] md:px-20 rounded-full">
            Join The Webinar For Free Now{" "}
            <span className="w-fit h-fit rounded-full p-[6px] aspect-square bg-[#323A53]">
              <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="bg-[#FF914D] w-[70%] h-[18px] md:h-[24px] relative bottom-0 rounded-[45px_45px_0px_0px]"></div>
      </div>
      <div className="bg-[#FF914D] absolute bottom-0 right-0 -z-10 bg-opacity-25 w-[25vw] min-w-[350px] aspect-[1.2/1] blur-2xl rounded-full translate-x-1/2"></div>
    </div>
  );
}

export default AboutCoach;
