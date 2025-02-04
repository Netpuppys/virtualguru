'use client'

import { useEffect, useState } from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

const EWebinarButton = ({ varient=0, text="Join For Free Now" }) => {
    const [ disabled, setDisabled ] = useState(true)

  useEffect(() => {
    setDisabled(true)

    const script = document.createElement("script");
    script.innerHTML = `(function (w,d,s,o,f,js,fjs) {
      w['eWidget']=o;w[o] = w[o] || function () {
        (w[o].q = w[o].q || []).push(arguments)
      };
      if(d.getElementById(o)) return;
      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o; js.src = f;
      fjs.parentNode.insertBefore(js, fjs);
    }(window, document, 'script', '_ew', 'https://app.ewebinar.com/widget.js'));
    _ew('init', {
      "root":"w1738576174002",
      "isReview":false,
      "mode":"public",
      "openInPopup":false,
      "for":"Registration",
      "type":"Button",
      "source":"",
      "url":"https://act.virtualguru.online/",
      "shortUrl":"https://thecareergrowthproject.ewebinar.com/webinar/18902",
      "sessions":[],
      "formType":"FastRendering",
      "ewebinar":{
        "title":"Tiny%20Noticeable%20Growth%20Hacks",
        "borderRadius":50,
        "primaryColor":"#323a53ff",
        "readableColor":"#ffffff",
        "actionColor":"#ff5b00ff",
        "readableActionColor":"#ffffff",
        "readableOnWhiteColor":"#323a53ff",
        "language":"en"
      },
      "showGdprBanner":false,
      "gdprBannerMode":"Off",
      "gdprBannerText":"",
      "hideBranding":false,
      "teamId":"6603",
      "carouselId":"",
      "isWebinarRegPage":false,
      "isMobile":false,
      "initialized":false,
      "button":{
        "btnText":"Sign up now!",
        "showButtonTimer":false,
        "buttonPrimaryColor":"#ff5b00ff",
        "buttonReadableColor":"#ffffff",
        "align":"Center",
        "isFullWidth":false
      }
    });
    window.ewInit && window.ewInit();`;

    document.body.appendChild(script);

    setDisabled(false)
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (disabled) {
    return(
        <div className="opacity-0 w-0 h-0">

        </div>
    )
  }

  return (
    <div
      id="w1738576174002"
      className="ewebinar__Widget ewebinar__RegisterButton_Root w-full flex items-center justify-center md:justify-start"
      style={{ 
        // padding: "2px 0 14px" 
      }}
    >
      <a
        className="ewebinar__RegisterButton__Wrap ewebinar--ltr w-full flex items-center justify-center md:justify-start"
        href="javascript:;"
        style={{
          // textDecoration: "none",
          // display: "flex",
          // width: "100%",
          // justifyContent: "center",
        }}
      >
        <button
          className="ewebinar__Widget ewebinar__RegisterButton cursor-pointer w-full md:min-w-[234px] shadow-[0px_4px_20.1px_0px_rgba(0,0,0,0.25)] md:w-fit flex gap-5 items-center font-[NeueHaasDisplayBold] text-white justify-center py-2 bg-[#FF914D] md:px-20 rounded-full hover:bg-white hover:text-[#FF914D] transition-all ease-in duration-300"
          type="button"
        //   disabled={disabled}
          style={{
            // borderRadius: "50px",
            // background: "#ff5b00ff",
            // color: "#ffffff",
          }}
        >
          <div className="ewebinar__Dots">
            <span className="ewebinar__LoadingDot" style={{ 
              // background: "#ffffff" 
              }}></span>
            <span className="ewebinar__LoadingDot" style={{ 
              // background: "#ffffff" 
              }}></span>
            <span className="ewebinar__LoadingDot" style={{ 
              // background: "#ffffff" 
              }}></span>
          </div>

          {varient===0 &&
          <span className="ewebinar__ButtonText md:text-[clamp(10px,1.2vw,75px)] font-bold">
            Register Now
          </span>}

          {varient===1 &&
          <div className="flex items-center justify-center text-nowrap gap-2 w-full md:w-[376px] md:text-[clamp(10px,1.2vw,75px)] font-bold">
            {text}{" "}
            <span className="ewebinar__ButtonText w-fit h-fit rounded-full p-[6px] aspect-square bg-[#323A53] border-[#323A53] group-hover:bg-[#FFF] group-hover:border-[#323A53] border transition-all ease-in duration-300">
                <FaArrowRight />
            </span>
          </div>}

          {varient===2 &&
          <div className="flex items-center justify-center text-nowrap gap-2 w-full md:w-[376px] md:text-[clamp(10px,1.2vw,75px)] font-bold">
            <div className="bg-white p-2 rounded-full group-hover:text-white !aspect-square group-hover:bg-[#FF914D] text-[#FF914D] transition-all ease-in duration-300">
              <BiLogoLinkedin />
            </div>
            <span className="ewebinar__ButtonText">
            Top Career Growth Voice
            </span>
          </div>}
        </button>
      </a>
      <noscript>
        <div
          style={{
            // textAlign: "center",
            // margin: "0.5em",
            // textDecoration: "none",
          }}
        >
          <a 
            style={{ 
              // color: "#000", fontSize: "13px" 
            }} 
            href="https://act.virtualguru.online/">
            Register Now
          </a>
        </div>
      </noscript>
    </div>
  );
};

export default EWebinarButton;