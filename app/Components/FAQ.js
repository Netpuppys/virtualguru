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
    "What is the guarantee that this will work for me? ",
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
    <>
      Growing in your careers is simple. It just needs the right process and the
      process never discriminates based on your experience. This program is
      applicable to all levels. Yes, some levels of experience take more than
      than the others, but the Tiny Noticeable Growth hacks work for all levels.
    </>,
    <>
      The answer is absolutely YES. 100s of my participants with career gaps
      could easily find jobs their choice by applying the Tiny Noticeable Growth
      Hacks.
    </>,
    <>
      I understand the apprehension you may have since there are so many ads you
      may be seeing. There are thousands of participants who have benefited from
      this webinar. This is exactly why this webinar is being given to you for
      free for a limited time. All you need to invest is 2 hrs of undivided
      attention and you will see for yourself.
    </>,
    <>
      Absolutely NO. This is a limited time offer to attend this 2 hr webinar
      completely free.
    </>,
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="w-[95%] mx-auto px-3 h-full pb-8 md:py-[2%] mb-28 md:mb-[8%]">
      <h2 className="md:text-center px-4 md:px-0 pb-4 md:pb-[2%] font-[NeueHaasDisplay400]">
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
              className={`w-full flex border-2 cursor-pointer py-4 rounded-3xl md:rounded-[30px] items-center justify-between transition-all duration-300 ${
                expanded === index
                  ? "shadow-[0px_3.63px_24.686px_3.63px_rgba(255,145,77,0.63)] border-[#FF914D]"
                  : "border-[#323A53] hover:text-[#FF914D] hover:border-[#FF914D]"
              }`}
            >
              <h4
                className={`w-full md:w-[80%] px-4 md:px-10 font-[TTChocolatesMedium] rounded-full transition-all duration-300 ${
                  expanded === index
                    ? "text-[#FF914D] font-black"
                    : "hover:text-[#FF914D]"
                }`}
              >
                {item}
              </h4>
              <h6
                className={`w-fit px-4 md:px-10 transition-transform duration-300 ${
                  expanded === index
                    ? "rotate-180 text-[#FF914D]"
                    : "rotate-0 hover:text-[#FF914D]"
                }`}
              >
                <IoIosArrowDown />
              </h6>
            </div>
            <div
              className={`w-full px-4 md:px-10 py-1 overflow-hidden transition-all duration-500 ease-in ${
                expanded === index
                  ? "max-h-full opacity-100 py-7"
                  : "max-h-0 opacity-0"
              }`}
            >
              <h4 className="font-[TTChocolatesMedium]">{answers[index]}</h4>
            </div>
          </div>
        ))}
        <div className="w-full flex flex-wrap justify-between gap-2 items-center">
          <button
            onClick={() => (window.location.href = "/privacy-policy")}
            className="flex items-center justify-center gap-2 text-[#FF914D] font-[TTChocolatesMedium] font-black"
          >
            Privacy Policy
          </button>
          <button
            onClick={() =>
              (window.location.href = "/learning-terms-and-conditions")
            }
            className="flex items-center justify-center gap-2 text-[#FF914D] font-[TTChocolatesMedium] font-black"
          >
            Learning Terms and Conditions
          </button>
          <button
            onClick={() => (window.location.href = "/refund_returns")}
            className="flex items-center justify-center gap-2 text-[#FF914D] font-[TTChocolatesMedium] font-black"
          >
            Refund and Returns Policy
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
