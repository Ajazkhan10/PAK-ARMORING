import React from "react";
import mainLogo from "../../Assert/svg/image.svg";
import groupLogo from "../../Assert/svg/Group.svg";
import phoneLogo from "../../Assert/svg/phone.svg";
import dropDown from "../../Assert/svg/chevron-down.svg";
const Navbar = () => {
  return (
    <>
      <navbar className=" h-[80px]  w-full bg-[#fff]  flex  lg:px-[80px] lg:py-[8px]  mx-auto px-[80px]">
        <div className="h-[55.81396px] w-full  flex items-center  justify-between lg:flex lg:justify-between lg:items-center md:flex md:justify-between ">
          <div className="lg:hidden ">
            <img
              className="w-[24px] h-[24px]"
              src={phoneLogo}
              alt="group-Logo"
            />
          </div>
          <div className="lg:flex lg:justify-start lg:whitespace-nowrap lg:gap-[8px]">
            <img
              className="w-[53px] h-[60px] mt-[20px]"
              src={mainLogo}
              alt="phone-Logo"
            />
            <div className="lg:block hidden ">
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
          <div className="hidden lg:block md:block relative">
            <ul className="flex justify-center items-center gap-[30px]">
              <div className="flex gap-[4px] items-center group/career">
                <li className="font-Inter text-[#000] text-[16px] not-italic font-normal leading-normal ">
                  About
                </li>
                <button className="w-[13px] h-[13px]">
                  <img src={dropDown} alt="drop-down" />
                </button>
                <ul className="bg-secondary_gray w-[180px] hidden absolute top-[35px]  py-[20px] group-hover/career:block flex-col gap-4 ">
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                </ul>
              </div>
              <div className="flex gap-[4px] items-center group/product">
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
                <ul className="bg-secondary_gray w-[180px] hidden absolute top-[35px]  py-[20px] group-hover/product:block flex-col gap-4 ">
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-[4px] group/technology">
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
                <ul className="bg-secondary_gray w-[180px] hidden absolute top-[35px]  py-[20px] group-hover/technology:block flex-col gap-4 ">
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                </ul>
              </div>
              <div className="flex gap-[4px] items-center group/media">
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
                <ul className="bg-secondary_gray w-[180px] hidden absolute top-[35px]  py-[20px] group-hover/media:block flex-col gap-4 ">
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-[4px] group/faqs">
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
                <ul className="bg-secondary_gray w-[180px] hidden absolute top-[35px]  py-[20px] group-hover/faqs:block flex-col gap-4 ">
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                  <li className="relative mx-auto font-sans hover:text-secondary_gray_400 cursor-pointer  text-[#fff]  text-center">
                    Careers
                  </li>
                </ul>
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
