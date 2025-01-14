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
      icon: get,
      description:
        "Get a job that values you as an individual and respects your skill",
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
      icon: learn,
      description:
        "To learn strategies that gets you stand out from any competition whether its for a promotion or a new job!",
    },
    {
      icon: think,
      description:
        "If you think it’s about time you find a job that recognizes your potential and gives you consistent growth!",
    },
    {
      icon: known,
      description:
        "To be known for the amazing Leader that you are. Not what they think you are!",
    },
    {
      icon: long,
      description:
        "Get that long pending promotion or easily grab that incredible salary hike",
    },
  ];
  return (
    <div className="w-[95%] px-3 mx-auto h-full py-8 md:py-[2%]">
      <h2 className="md:text-center  pb-4 md:pb-[2%] font-[NeueHaasDisplay400]">
        Why Should You{" "}
        <stroke className="md:hidden">
          <br />
        </stroke>
        <stroke className="font-[NeueHaasDisplayBold] text-[#FF914D]">
          Attend This Webinar?
        </stroke>
      </h2>
      <div className="flex flex-wrap justify-center gap-3 w-full">
        {card.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-12px)] rounded-lg p-3 flex justify-center items-center gap-3 md:p-4 border border-[#FF914D] bg-[#CB723A] bg-opacity-5 shadow-[0px_2.732px_49.031px_0px_rgba(0,0,0,0.25)]"
          >
            <div className="w-[20%] p-3 bg-[#FF914D] rounded-xl shadow-[11px_10px_12.8px_0px_rgba(255,145,77,0.24)]">
              <Image src={card.icon} alt="" className="w-full h-full" />
            </div>
            <h7 className="w-full font-[TTChocolatesMedium]">
              {card.description}
            </h7>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyShouldAttend;
