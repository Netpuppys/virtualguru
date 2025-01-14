import React from "react";
import bmw from "../../public/logos/bmw.png";
import hsbc from "../../public/logos/hsbc.png";
import microsoft from "../../public/logos/microsoft.png";
import accenture from "../../public/logos/accenture.png";
import amazon from "../../public/logos/amazon.png";
import google from "../../public/logos/google.png";
import siemens from "../../public/logos/siemens.png";
import deloitte from "../../public/logos/deloitte.png";
import dell from "../../public/logos/dell.png";
import ericsson from "../../public/logos/ericsson.png";
import Image from "next/image";

function Brands() {
  const logos = [
    bmw,
    hsbc,
    microsoft,
    accenture,
    amazon,
    google,
    siemens,
    deloitte,
    dell,
    ericsson,
  ];
  return (
    <div className="w-[95%] mx-auto px-3 h-full pb-8 md:py-[2%]">
      <div className="flex flex-wrap rounded-3xl border-2 px-8 md:px-[5%] py-8 md:py-[3%] border-[#FF914D] bg-[#FAF1EB] shadow-[0px_4px_71.8px_0px_rgba(0,0,0,0.25)] justify-center w-full md:w-[85%] mx-auto h-full">
        <h6 className="text-center font-[TTChocolates] px-[5%]">
          My webinar attendees have found jobs well within{" "}
          <span className="text-[#FF914D] font-[TTChocolatesMedium]">
            8 weeks!
          </span>{" "}
          Some of them have found jobs where they are paid well, recognized for
          their skills, and have found <br />
          <span className="text-[#FF914D] font-[TTChocolatesMedium]">
            amazing careers paths at companies like :
          </span>
        </h6>
        <div className="bg-white rounded-3xl px-2 flex flex-wrap items-center justify-center gap-4 md:gap-[10%] w-full mt-8 md:mt-[3%] py-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex w-[calc(50%-1rem)] md:w-[10%] aspect-[1.5/1] md:aspect-square justify-center items-center"
            >
              <Image
                src={logo}
                alt=""
                className="w-[80%] mx-auto md:w-full h-fit"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
