import React from "react";
import free from "../../public/icons/free.png";
import get from "../../public/icons/get.png";
import apply from "../../public/icons/apply.png";
import stand from "../../public/icons/stand.png";
import learn from "../../public/icons/learn.png";
import think from "../../public/icons/think.png";
import known from "../../public/icons/known.png";
import long from "../../public/icons/long.png";
import Image from "next/image";
function WhyShouldAttend() {
  const card = [
    {
      icon: free,
      description: "This webinar is free only for a limited time",
    },
    {
      icon: apply,
      description:
        "Apply to many jobs at will and get 10x more interview calls",
    },
    {
      icon: stand,
      description: "Stand out on LinkedIn as a top resource in your category",
    },
    {
      icon: get,
      description:
        "Get a job that values you as an individual and respects your skill",
    },
    {
      icon: long,
      description:
        "Get that long pending promotion or easily grab that incredible salary hike",
    },
    {
      icon: known,
      description:
        "To be known for the amazing Leader that you are. Not what they think you are!",
    },
    {
      icon: think,
      description:
        "If you think it’s about time you find a job that recognizes your potential and gives you consistent growth!",
    },
    {
      icon: learn,
      description:
        "To learn strategies that gets you stand out from any competition whether its for a promotion or a new job!",
    },
  ];
  return (
    <div className="w-[95%] relative px-3 mx-auto h-full py-8 md:py-[2%]">
      <h2 className="px-5 md:text-center  pb-4 md:pb-[2%] font-[NeueHaasDisplay400]">
        Why Should You{" "}
        <span className="md:hidden">
          <br />
        </span>
        <span className="font-[NeueHaasDisplayBold] text-[#FF914D]">
          Attend This Webinar?
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-3 w-full">
        {card.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-12px)] group rounded-lg p-3 flex justify-center items-center gap-5 md:p-4 border border-[#FF914D] bg-[#CB723A] hover:bg-[#FF914D] bg-opacity-5 hover:bg-opacity-100 shadow-[0px_2.732px_49.031px_0px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in"
          >
            <div className="w-[20%] p-3 bg-[#FF914D] group-hover:bg-white rounded-xl shadow-[11px_10px_12.8px_0px_rgba(255,145,77,0.24)]">
              <Image src={card.icon} alt="" className="w-full h-full" />
            </div>
            <h4 className="w-full font-[TTChocolatesMedium] group-hover:text-white transition-all duration-300 ease-in">
              {card.description}
            </h4>
          </div>
        ))}
      </div>
      <div className="bg-[#FF914D] absolute bottom-0 left-0 -z-10 bg-opacity-25 w-[25vw] min-w-[350px] aspect-[1.2/1] blur-2xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
}

export default WhyShouldAttend;
