"use client";
import React, { useState } from "react";
import checked from "../../public/icons/checked.png";
import Image from "next/image";

function Category() {
  const card = [
    {
      title: "You feel ignored and not valued at your current job",
    },
    {
      title: "You do all the hard work and someone else gets all the accolades",
    },
    {
      title: "You are tired of waiting for your loyalty to be valued",
    },
    {
      title:
        "You are tired of applying on LinkedIn and Job portals with no response",
    },
    {
      title: "You are frustrated with office politics and feel helpless",
    },
    {
      title: "You feel your salary is not matching your job role",
    },
    {
      title:
        "Your boss is not a great mentor and you are tired of waiting for guidance",
    },
    {
      title:
        "You are unsure of what else you can do to finally land that dream job",
    },
  ];

  // Initialize state for checkboxes
  const [checkedState, setCheckedState] = useState(
    card.map((item) => item.defaultchecked || false)
  );

  // Handle checkbox change
  const handleCheckboxChange = (index) => {
    setCheckedState((prev) =>
      prev.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  return (
    <div className="w-[95%] mx-auto px-3 h-full pb-8 md:py-[2%]">
      <h2 className="md:text-center px-4 md:px-0 pb-4 md:pb-[2%] font-[NeueHaasDisplay400]">
        Do you{" "}
        <span className="font-[NeueHaasDisplayBold] text-[#FF914D]">
          Fall in this Category?
        </span>{" "}
      </h2>
      <div className="flex flex-wrap justify-center w-full md:w-[85%] mx-auto h-full gap-3">
        {card.map((card, index) => (
          <div
            key={index}
            className="border-2 group border-[#FF914D] shadow-[0px_4px_20.1px_0px_rgba(0,0,0,0.25)] py-4 px-4 md:px-8 flex flex-col w-full md:w-[60%] rounded-2xl justify-between"
          >
            <label className="flex gap-[5%] w-[95%] mx-auto">
              <input
                type="checkbox"
                checked={checkedState[index]}
                onChange={() => handleCheckboxChange(index)}
                className="hidden peer"
              />
              <span className="min-w-8 max-w-8 min-h-8 max-h-8 bg-[#F5DBCA] p-[6px] rounded-full flex items-center justify-center peer-checked:bg-[#FF914D] group-hover:bg-[#FF914D] transition-all duration-300 ease-in">
                {checkedState[index] && (
                  <Image
                    src={checked}
                    alt="Checked"
                    className="w-full h-full"
                  />
                )}
              </span>
              <h4 className="font-[TTChocolates] peer-checked:font-[TTChocolatesMedium] peer-checked:font-black peer-checked:text-[#FF914D] group-hover:text-[#FF914D] transition-all duration-300 ease-in">
                {card.title}
              </h4>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
