import React from "react";
import MinusIcon from "../../Assert/svg/Minus-Icon.svg";
import PlusIcon from "../../Assert/svg/icons_plus.svg";
const IncrementDecrement = () => {
  return (
    <div>
      <div className="w-[390px] bg-[#FFF]  mt-[40px]  flex flex-col items-start gap-[48px]">
        <h1 className="w-[342px] mx-[24px] text-[##1A1A1A] text-[34px] font-Montserrat normal-case font-bold leading-normal">
          FAQs
        </h1>
        <div className="w-[390px] flex flex-col gap-[32px] justify-center items-center">
          <div className="w-[342px] h-[1px] bg-[#CCC]"></div>
          <div className="flex justify-center flex-col items-center w-[342px] gap-[32px]">
            <div className="flex justify-between items-center w-[342px] text-[#1A1A1A]">
              <h1 className="font-Montserrat text-[18px] font-bold normal-case w-[294px] shrink-0 leading-[28px]">
                Question goes here lorem ipsum dolor sit?
              </h1>
              <img
                src={MinusIcon}
                alt="MinusIcon"
                className="w-[24px] h-[24px] shrink-0 text-[#205228]"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-base not-italic text-[24px] leading-6 font-normal	text-[#656970]">
                Our audit services are tailored to your operations, risk, and
                growth objectives and are conducted with the highest quality
                assurance and technical excellence. By focusing on critical
                areas of your business, we ensure a seamless, streamlined audit
                process that produces valuable data.
              </p>
            </div>
          </div>
          <div className="w-[342px] h-[1px] bg-[#CCC]"></div>
          <div className="flex justify-between items-center w-[342px] text-[#1A1A1A]">
            <h1 className="font-Montserrat text-[18px] font-bold normal-case w-[294px] shrink-0 leading-[28px]">
              Question goes here lorem ipsum dolor sit?
            </h1>
            <img
              src={PlusIcon}
              alt="PlusIcon"
              className="w-[24px] h-[24px] shrink-0 text-[#205228]"
            />
          </div>
          <div className="w-[342px] h-[1px] bg-[#CCC]"></div>
          <div className="flex justify-between items-center w-[342px] text-[#1A1A1A]">
            <h1 className="font-Montserrat text-[18px] font-bold normal-case w-[294px] shrink-0 leading-[28px]">
              Question goes here lorem ipsum dolor sit?
            </h1>
            <img
              src={PlusIcon}
              alt="PlusIcon"
              className="w-[24px] h-[24px] shrink-0 text-[#205228]"
            />
          </div>
          <div className="w-[342px] h-[1px] bg-[#CCC]"></div>
          <div className="flex justify-between items-center w-[342px] text-[#1A1A1A]">
            <h1 className="font-Montserrat text-[18px] font-bold normal-case w-[294px] shrink-0 leading-[28px]">
              Question goes here lorem ipsum dolor sit?
            </h1>
            <img
              src={PlusIcon}
              alt="PlusIcon"
              className="w-[24px] h-[24px] shrink-0 text-[#205228]"
            />
          </div>
          <div className="w-[342px] h-[1px] bg-[#CCC]"></div>
        </div>
      </div>
    </div>
  );
};

export default IncrementDecrement;
