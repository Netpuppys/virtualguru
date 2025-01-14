"use client";
import React, { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";

function FAQ() {
  const questions = [
    "What is so unique about this program compared to others?",
    "Is this webinar applicable to all levels including freshers?",
    "I have a career gap. Will I still be able to secure my dream job through this webinar?",
    "What is the guarantee that this will work for me?",
    "Do I have to pay to attend this webinar?",
  ];

  const answers = [
    <>
      Our Coach Teja Gudluru comes from a lower middle class family who had
      little or no access to resources, mentoring and guidance. He had to figure
      out various hacks to get ahead in career. He has now combined his own
      experience and the collective experience of working with 100s of HR heads
      to bring simple to use TINY NOTICEABLE GROWTH HACKS that work, packaged in
      a 2 hr webinar.
    </>,
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="w-[95%] mx-auto px-3 h-full pb-8 md:py-[2%]">
      <h2 className="md:text-center pb-4 md:pb-[2%] font-[NeueHaasDisplay400]">
        Frequently Asked{" "}
        <span className="font-[NeueHaasDisplayBold] text-[#FF914D]">
          Questions
        </span>{" "}
      </h2>
      <div className="w-full flex flex-col items-end md:w-[60%] gap-3 mx-auto">
        {questions.map((item, index) => (
          <div key={index} className="w-full">
            <div
              onClick={() => toggleExpand(index)}
              className={`w-full flex border-2 py-4 rounded-3xl md:rounded-[34px] items-center justify-between transition-all duration-300 ${
                expanded === index
                  ? "shadow-[0px_3.63px_24.686px_3.63px_rgba(255,145,77,0.63)] border-[#FF914D]"
                  : "border-[#323A53]"
              }`}
            >
              <h7
                className={`w-full md:w-[80%] px-4 md:px-10 font-[TTChocolatesMedium] rounded-full transition-all duration-300 ${
                  expanded === index ? "text-[#FF914D] font-black" : ""
                }`}
              >
                {item}
              </h7>
              <div
                className={`w-fit px-4 md:px-10 transition-transform duration-300 ${
                  expanded === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <IoIosArrowDown
                  className={`text-xl transition-transform duration-300 ${
                    expanded === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`w-full px-4 md:px-10 pt-4 overflow-hidden transition-all duration-500 ease-in ${
                expanded === index
                  ? "max-h-full opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <h7 className="font-[TTChocolatesMedium]">{answers[index]}</h7>
            </div>
          </div>
        ))}
        <button className="flex items-center justify-center gap-2 text-[#FF914D] font-[TTChocolatesMedium] font-black">
          Read All FAQs <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default FAQ;
