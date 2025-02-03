"use client";
import React, { useState } from "react";
import checked from "../../public/icons/checked.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import EWebinarButton from "./EWebinarbutton";

function PowerfullWebinar() {
  const signUp = () => {
    window.location.href =
      "https://thecareergrowthproject.ewebinar.com/webinar/tiny-noticeable-growth-hacks-18902";
  };
  const card = [
    {
      title: (
        <>
          <span className="font-[TTChocolatesMedium] font-black text-[#FF914D]">
            5 secrets
          </span>{" "}
          that only 1% of the Job applicants know and use to get high paying
          jobs
        </>
      ),
    },
    {
      title: (
        <>
          <span className="font-[TTChocolatesMedium] font-black text-[#FF914D]">
            3 Easy strategies
          </span>{" "}
          to network like a pro and find hidden jobs that are not found on
          LinkedIn or job portals
        </>
      ),
    },
    {
      title: (
        <>
          <span className="font-[TTChocolatesMedium] font-black text-[#FF914D]">
            My T.N.T Strategy
          </span>{" "}
          to get higher paid jobs and better designations when you switch your
          job!
        </>
      ),
    },
    {
      title: (
        <>
          <span className="font-[TTChocolatesMedium] font-black text-[#FF914D]">
            5 Hacks
          </span>{" "}
          to influence HR and be noticed amongst 100s of applicants
        </>
      ),
    },
    {
      title: (
        <>
          <span className="font-[TTChocolatesMedium] font-black text-[#FF914D]">
            Crack LinkedIn algorithm
          </span>{" "}
          and get noticed by recruiters as subject matter experts in your field
        </>
      ),
    },
    {
      title: (
        <>
          <span className="font-[TTChocolatesMedium] font-black text-[#FF914D]">
            Quick Job strategy
          </span>{" "}
          to easily find high paying international jobs
        </>
      ),
    },
  ];

  return (
    <div className="w-[95%] mx-auto px-3 h-full pb-8 md:py-[2%]">
      <h2 className="md:text-center px-4 md:px-0 pb-4 md:pb-[2%] font-[NeueHaasDisplay400]">
        What will you discover and learn in this{" "}
        <span className="font-[NeueHaasDisplayBold] text-[#FF914D]">
          powerful webinar:
        </span>{" "}
      </h2>
      <div className="flex flex-wrap justify-center w-full md:w-[85%] mx-auto h-full gap-3 md:gap-6">
        {card.map((card, index) => (
          <div
            key={index}
            className="border-2 border-[#323A53] shadow-[0px_4px_20.1px_0px_rgba(0,0,0,0.25)] py-4 px-4 md:px-8 flex flex-col w-full md:w-[90%] rounded-2xl justify-between"
          >
            <label className="flex gap-4 md:gap-8 w-full mx-auto">
              <span className="min-w-8 max-w-8 min-h-8 max-h-8 p-[6px] rounded-full flex items-center justify-center bg-[#FF914D]">
                <Image src={checked} alt="" className="w-full h-full" />
              </span>
              <h4 className="font-[TTChocolates]">{card.title}</h4>
            </label>
          </div>
        ))}
      </div>
      <h2 className="text-center mt-8 md:mt-[3%] leading-tight px-4 md:px-0 font-[NeueHaasDisplay400]">
        Webinar Value{" "}
        <span className="font-[NeueHaasDisplayBold] text-[#FF914D]">
          Rs 999/-
        </span>{" "}
      </h2>
      <h2 className="text-center px-4 md:px-0 leading-tight font-[NeueHaasDisplay400]">
        <strong>
          You get it for{" "}
          <span className="font-[NeueHaasDisplayBold] text-[#FF914D]">
            Free Today!
          </span>
        </strong>
      </h2>
      {/* <button
        onClick={signUp}
        className="mt-8 md:mt-[2%] w-full group shadow-[0px_4px_20.1px_0px_rgba(0,0,0,0.25)] md:w-fit mx-auto flex gap-5 items-center font-[NeueHaasDisplayBold] text-white justify-center py-2 bg-[#FF914D] md:px-20 rounded-full hover:bg-white hover:text-[#FF914D] transition-all ease-in duration-300"
      >
        Join For Free Now{" "}
        <span className="w-fit h-fit rounded-full p-[6px] aspect-square bg-[#323A53] border-[#323A53] group-hover:bg-[#FFF] group-hover:border-[#323A53] border transition-all ease-in duration-300">
          <FaArrowRight />
        </span>
      </button> */}

      <div className="mt-8 md:mt-[2%] w-full flex items-center justify-center">
        <div className="w-fit">
        <EWebinarButton
          varient={1}
        />
        </div>
      </div>
    </div>
  );
}

export default PowerfullWebinar;
