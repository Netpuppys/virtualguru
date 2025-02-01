import React from "react";

function SomeMore() {
  const card = [
    {
      title: "Ravi K., Marketing Specialist",
      description:
        "The CGP ACT program helped me unlock my true potential! The RAMP framework gave me clarity on my strengths, and I’ve never felt more confident in my career choices. The weekly calls with Teja are a game-changer!",
    },
    {
      title: "Priya S., IT Consultant",
      description:
        "The psychometric assessment was spot-on in helping me identify my key strengths. The AI-based resume module and LinkedIn mastery made a huge difference in how I present myself. I’m already getting more job offers!",
    },
    {
      title: "Amit T., Operations Manager",
      description:
        "The CGP Tribe is an amazing support system. The live coaching calls with Teja keep me on track, and the community keeps me motivated. I’ve seen real growth in just weeks, especially after applying the Interview and Job Search strategies.",
    },
  ];
  return (
    <div className="w-[95%] relative mx-auto h-full pb-8 md:py-[2%]">
      <h2 className="md:text-center px-8 md:px-3 pb-4 md:pb-[2%] font-[NeueHaasDisplay400]">
        And some more …….
      </h2>
      <div className="flex flex-wrap justify-center px-4 md:px-0 w-[95%] md:w-[85%] mx-auto h-full gap-3">
        {card.map((card, index) => (
          <div
            key={index}
            className="bg-[#EAEAEA] group hover:bg-[#FF914D] transition-all duration-300 ease-in shadow-[0px_4px_16.9px_0px_rgba(0,0,0,0.25)] text-center py-5 px-8 flex flex-col w-full md:w-[calc(33%-12px)] rounded-2xl justify-between"
          >
            <h4 className="font-[TTChocolatesMedium] group-hover:text-white transition-all duration-300 ease-in">
              {card.description}
            </h4>
            <h4 className="font-[TTChocolatesMedium] text-[#FF914D] group-hover:text-[#323A53] pt-7 transition-all duration-300 ease-in">
              {card.title}
            </h4>
          </div>
        ))}
      </div>
      <div className="bg-[#FF914D] absolute top-0 right-0 -z-10 bg-opacity-25 w-[25vw] min-w-[350px] aspect-[1.2/1] blur-2xl rounded-full translate-x-1/2 "></div>
    </div>
  );
}

export default SomeMore;
