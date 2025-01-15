import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Join() {
  return (
    <div className="w-[95%] mx-auto relative px-3 h-full pb-8 md:py-[2%]">
      <div className="flex flex-wrap rounded-3xl border-2 px-8 md:px-[5%] py-8 md:py-[5%] border-[#FF914D] bg-[#F7E6DC] shadow-[0px_4px_71.8px_0px_rgba(0,0,0,0.25)] justify-center w-full md:w-[85%] mx-auto h-full">
        <h6 className="text-center">
          You couldn’t be more wrong! It’s time to learn those simple, yet
          powerful strategies that can get your dream job just within 30 days.
          The only thing you need to do is grab a note pad, <br />
          <span className="text-[#FF914D]">
            give undivided attention and attend this free webinar!
          </span>
        </h6>
        <button className="mt-8 md:mt-[3%] group w-full md:w-fit flex gap-5 items-center font-[NeueHaasDisplayBold] text-white justify-center py-2 bg-[#FF914D] md:px-20 rounded-full hover:bg-white hover:text-[#FF914D] transition-all ease-in duration-300">
          Join For Free Now{" "}
          <span className="w-fit h-fit rounded-full p-[6px] aspect-square bg-[#323A53] border-[#323A53] group-hover:bg-[#FFF] group-hover:border-[#323A53] border transition-all ease-in duration-300">
            <FaArrowRight />
          </span>
        </button>
      </div>
      <div className="bg-[#FF914D] absolute top-0 right-0 -z-10 bg-opacity-25 w-[25vw] min-w-[350px] aspect-[1.2/1] blur-2xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}

export default Join;
