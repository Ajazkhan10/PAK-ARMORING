import React, { useState } from "react";
import mainLogo from "../../Assert/svg/image.svg";
import groupLogo from "../../Assert/svg/Group.svg";
import phoneLogo from "../../Assert/svg/phone.svg";
import dropDown from "../../Assert/svg/chevron-down.svg";
import crossManu from "../../Assert/svg/crossmanu.png";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handelDropdown = () => {
    setDropdown(!dropdown);
  };

  if (dropdown) {
    if (typeof window !== "undefined") {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  } else {
    if (typeof window !== "undefined") {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  }
  return (
    <>
      <navbar className=" h-[80px] w-full  bg-[#fff] grid grid-cols-1 px-[40px] mx-auto">
        <div className=" flex   w-full lg:justify-between  justify-between mx-auto  items-center ">
          <div className="lg:hidden  ">
            <img
              className="lg:w-[24px] lg:h-[24px] w-[30px]"
              src={phoneLogo}
              alt="group-Logo"
            />
          </div>
          <div className="flex ">
            <img
              className="lg:w-[53px] lg:h-[60px] w-full "
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
          <div className="lg:hidden">
            <button onClick={handelDropdown}>
              {dropdown ? (
                <img
                  className="w-[30px] object-scale-down h-[30px] font-bold "
                  src={crossManu}
                  alt="crossManu"
                />
              ) : (
                <img
                  className="w-[30px] object-scale-down h-[30px] font-bold "
                  src={groupLogo}
                  alt="groupLogo"
                />
              )}
            </button>
            <div
              className={`w-full absolute z-20 temp-class left-[0px] top-[80px] bg-secondary_gray text-light_white  overflow-y-hidden
               flex py-[30px]  ${dropdown ? "block" : "hidden"}`}
            >
              <ul className=" flex flex-col overflow-y-hidden  items-center mx-auto gap-[30px] ">
                <li className="hover:text-secondary_gray_400">
                  <a href="/">About</a>
                </li>
                <li className="hover:text-secondary_gray_400">
                  <a href="/">Product</a>
                </li>
                <li className="hover:text-secondary_gray_400">
                  <a href="/">Contact</a>
                </li>
                <li className="hover:text-secondary_gray_400">
                  <a href="/">Technology</a>
                </li>
                <li className="hover:text-secondary_gray_400">
                  <a href="/">FAQs</a>
                </li>
                <li className="hover:text-secondary_gray_400">
                  <a href="/">Media</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:block  relative ">
            <ul className="flex lg:gap-[30px] ">
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
                <button className="text-light_white flex px-[12px] lg:px-[20px] py-[12px]  items-center justify-center rounded-[4px] bg-[#205228] ">
                  Contact
                </button>
              </div>
            </ul>
          </div>
        </div>
      </navbar>
    </>
  );
};

export default Navbar;
