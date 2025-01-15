"use client";
import React from "react";
import dynamic from "next/dynamic";
import { FaPlay } from "react-icons/fa";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function SuperLoved() {
  const video = [
    {
      link: "https://assets.tulas.edu.in/virtual-guru/testimonial1.mp4",
    },
    {
      link: "https://assets.tulas.edu.in/virtual-guru/testimonial2.mp4",
    },
    {
      link: "https://assets.tulas.edu.in/virtual-guru/testimonial3.mp4",
    },
  ];
  return (
    <div className="w-[95%] mx-auto px-3 h-full py-8 md:py-[2%]">
      <h2 className="px-5 md:text-center pb-4 md:pb-[2%] font-[NeueHaasDisplay400]">
        Our attendees have{" "}
        <span className="font-[NeueHaasDisplayBold] text-[#FF914D]">
          Super Loved This Program
        </span>{" "}
        and it shows...
      </h2>
      <div className="flex flex-wrap items-center justify-center px-4 md:px-0 w-full md:w-[85%] mx-auto h-full gap-3">
        {video.map((video, index) => (
          <div
            key={index}
            className="h-full w-full border flex justify-center border-[#FF914D] bg-[#EBDFD6] md:w-[calc(33%-12px)] rounded-2xl overflow-hidden aspect-square"
          >
            <ReactPlayer url={video.link} width="100%" height="100%" controls />
            {/* <button className="bg-[#FF914D] text-white absolute aspect-square p-4 rounded-full">
              <FaPlay />
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuperLoved;
