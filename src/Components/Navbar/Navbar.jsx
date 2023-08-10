import React from "react";
import mainLogo from "../../Assert/svg/image.svg";
import groupLogo from "../../Assert/svg/Group.svg";
import phoneLogo from "../../Assert/svg/phone.svg";
import dropDown from "../../Assert/svg/chevron-down.svg";
const Navbar = () => {
  return (
    <>
      <navbar className=" h-[80px] w-[100%]  bg-light_white flex justify-center items-center lg:w-full  lg:px-[80px] lg:py-[8px]  xl:px-[150px] md:w-full ">
        <div className="h-[55.81396px] w-[100%] flex items-center  justify-between lg:w-[100%] lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center">
          <div className="lg:hidden md:hidden">
            <img
              className="w-[24px] h-[24px]"
              src={phoneLogo}
              alt="group-Logo"
            />
          </div>
          <div className="lg:flex lg:justify-start lg:whitespace-nowrap lg:gap-[8px]">
            <img
              className="w-[53px] h-[60px]"
              src={mainLogo}
              alt="phone-Logo"
            />
            <div className="lg:block hidden md:block">
              <h1 className="text-[#205228] font-Ubuntu text-[20px] not-italic font-bold leading-normal ">
                PAK ARMORING (PVT) LTD.
              </h1>
              <p className="font-medium	 text-[#000] text-[12px] not-italic leading-normal">
                ARMORED VEHICLES SPECIALIST
              </p>
            </div>
          </div>
          <div className="lg:hidden md:hidden">
            <img className="w-[24px] h-[8px]" src={groupLogo} alt="Logo" />
          </div>
          <div className="hidden lg:block md:block">
            <ul className="flex justify-center items-center gap-[30px]">
              <div className="flex gap-[4px] items-center">
                <li className="font-Inter text-[#000] text-[16px] not-italic font-normal leading-normal">
                  About
                </li>
                <button className="w-[13px] h-[13px]">
                  <img src={dropDown} alt="drop-down" />
                </button>
              </div>
              <div className="flex gap-[4px] items-center">
                <li className="font-Inter text-[#000] text-[16px] not-italic font-normal leading-normal">
                  Product
                </li>
                <button>
                  <img
                    src={dropDown}
                    alt="drop-down"
                    className="w-[13px] h-[13px]"
                  />
                </button>
              </div>
              <div className="flex items-center gap-[4px]">
                <li className="font-Inter text-[#000] text-[16px] not-italic font-normal leading-normal">
                  Technology
                </li>
                <button>
                  <img
                    src={dropDown}
                    alt="drop-down"
                    className="w-[13px] h-[13px]"
                  />
                </button>
              </div>
              <div className="flex gap-[4px] items-center">
                <li className="font-Inter text-[#000] text-[16px] not-italic font-normal leading-normal">
                  Media
                </li>
                <button>
                  <img
                    src={dropDown}
                    alt="drop-down"
                    className="w-[13px] h-[13px]"
                  />
                </button>
              </div>
              <div className="flex items-center gap-[4px]">
                <li className="font-Inter text-[#000] text-[16px] not-italic font-normal leading-normal">
                  FAQs
                </li>
                <button>
                  <img
                    src={dropDown}
                    alt="drop-down"
                    className="w-[13px] h-[13px]"
                  />
                </button>
              </div>
              <button className="text-light_white flex px-[40px] py-[12px] gap-[8px] items-center justify-center rounded-[4px] bg-[#205228] ">
                Contact
              </button>
            </ul>
          </div>
        </div>
      </navbar>
    </>
  );
};

export default Navbar;
