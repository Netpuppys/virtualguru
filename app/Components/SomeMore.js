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
    <div className="w-[95%] mx-auto h-full pb-8 md:py-[2%]">
      <h2 className="md:text-center px-3 pb-4 md:pb-[2%] font-[NeueHaasDisplay400]">
        And some more …….
      </h2>
      <div className="flex flex-wrap justify-center w-full md:w-[85%] mx-auto h-full gap-3">
        {card.map((card, index) => (
          <div
            key={index}
            className="bg-[#EAEAEA] text-center py-5 px-8 flex flex-col w-full md:w-[calc(33%-12px)] rounded-2xl justify-between"
          >
            <h7 className="font-[TTChocolatesMedium]">{card.description}</h7>
            <h7 className="font-[TTChocolatesMedium] text-[#FF914D] pt-7">
              {card.title}
            </h7>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SomeMore;
