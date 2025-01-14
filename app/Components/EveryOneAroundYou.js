import React from "react";

function EveryOneAroundYou() {
  const card = [
    {
      title:
        "“Why are you always working day and night for the company that doesn’t value you?”",
    },
    {
      title:
        "“You say you are a top performer and yet, you still didn’t get that promotion?”",
    },
    {
      title: "“The job market is so bad”",
    },
    {
      title: "“Send me your CV, let me see what I can do?”",
    },
    {
      title: "“Sorry there is a hiring freeze in the market”",
    },
    {
      title:
        "“It’s been 1 year since you finished your graduation. Our neighbour’s son is already working in a top MNC. When will you take your life seriously?” ",
    },
  ];
  return (
    <div className="w-[95%] mx-auto px-3 h-full pb-8 md:py-[2%]">
      <h2 className="md:text-center  pb-4 md:pb-[2%] font-[NeueHaasDisplay400]">
        And are you tired of hearing this from{" "}
        <span className="font-[NeueHaasDisplayBold] text-[#FF914D]">
          everyone around you? ….
        </span>{" "}
      </h2>
      <div className="flex flex-wrap rounded-3xl shadow-[0px_4px_71.8px_0px_rgba(0,0,0,0.25)] bg-[#CB723A] bg-opacity-15 justify-center w-full md:w-[85%] mx-auto h-full">
        {card.map((card, index) => (
          <div
            key={index}
            className="py-5 border-b border-black last:border-none px-4 md:px-8 flex flex-col w-full justify-between"
          >
            <h7 className="text-center md:max-w-[80%] mx-auto font-[TTChocolates] peer-checked:font-[TTChocolatesMedium] peer-checked:font-black peer-checked:text-[#FF914D]">
              {card.title}
            </h7>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EveryOneAroundYou;
