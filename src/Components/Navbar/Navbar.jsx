import React, { useState } from "react";
import mainLogo from "../../Assert/svg/image.svg";
import groupLogo from "../../Assert/svg/Group.svg";
import phoneLogo from "../../Assert/svg/phone.svg";
import dropDown from "../../Assert/svg/chevron-down.svg";
import crossManu from "../../Assert/svg/crossmanu.png";
import emailIcon from "../../Assert/svg/Email.svg";
import PhoneIcon from "../../Assert/svg/phoneIcon.svg";
// import { Button } from "../../Extra/Button";
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
    <div div className="fixed w-full z-20 top-[0px]">
      <div className="hidden py-[6px] w-full px-[80px] lg:inline-flex justify-end items-start bg-[#155214] text-[#fff] gap-[24px]">
        <img src={PhoneIcon} alt="PnoneIcon" />
        <p>03039234222 | 0303 9234333</p>

        <img src={emailIcon} alt="emailIcon" />
        <p>info@pakarmoring.com</p>
      </div>
      <navbar className=" h-[80px] w-full  bg-[#fff] grid grid-cols-1 px-[40px] mx-auto">
        <div className=" flex   w-full lg:justify-between  justify-between mx-auto  items-center ">
          <div className="lg:hidden  ">
            <img
              className="lg:w-[24px] lg:h-[24px] w-[30px]"
              src={phoneLogo}
              alt="group-Logo"
            />
          </div>
          <div className="flex gap-[30px] ">
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
                <li className="font-Inter text-[#000] text-[16px] hover:text-[#ffd257]  not-italic font-normal leading-normal ">
                  About Us
                </li>
                <button className="w-[13px] h-[80px]">
                  <img src={dropDown} alt="drop-down" />
                </button>
                <ul className="bg-[#155214] top-[80px]   w-[200px] hidden absolute py-[10px] group-hover/career:block flex-col gap-4 ">
                  <li className="relative mx-auto font-sans py-[10px]  hover:text-[#ffd257] hover:text-[#ffd257]cursor-pointer  text-[#fff]  text-center">
                    About Us
                  </li>
                  <div className=" h-[1px] bg-[#455f4b] px-[30px] "></div>
                  <li className="relative mx-auto font-sans py-[10px]  hover:text-[#ffd257] hover:text-[#ffd257]cursor-pointer  text-[#fff]  text-center">
                    Mission & Vision
                  </li>
                  <div className=" h-[1px] bg-[#455f4b] px-[30px] "></div>
                  <li className="relative mx-auto font-sans py-[10px]  hover:text-[#ffd257] hover:text-[#ffd257]cursor-pointer  text-[#fff]  text-center">
                    Message CEO
                  </li>
                  <div className=" h-[1px] bg-[#455f4b] px-[30px] "></div>
                  <li className="relative mx-auto font-sans py-[10px]  hover:text-[#ffd257] hover:text-[#ffd257]cursor-pointer  text-[#fff]  text-center">
                    Our Team
                  </li>
                  <div className=" h-[1px] bg-[#455f4b] px-[30px] "></div>
                  <li className="relative mx-auto font-sans py-[10px] hover:text-[#ffd257]  hover:text-[#ffd257]cursor-pointer  text-[#fff]  text-center">
                    Our Client
                  </li>
                </ul>
              </div>
              <div className="flex gap-[4px]  items-center group/product">
                <li className="font-Inter text-[#000] hover:text-[#ffd257]   text-[16px] not-italic font-normal leading-normal">
                  Product
                </li>
                <button>
                  <img
                    src={dropDown}
                    alt="drop-down"
                    className="w-[13px] h-[80px]"
                  />
                </button>
                <ul className="bg-[#155214] top-[80px]   w-[200px]  hidden absolute  py-[10px] group-hover/product:block flex-col gap-4 ">
                  <li className="relative mx-auto font-sans py-[10px]  hover:text-[#ffd257] hover:text-[#ffd257]cursor-pointer  text-[#fff]  text-center">
                    ViPs
                  </li>
                  <div className=" h-[1px] bg-[#455f4b] px-[30px] "></div>
                  <li className="relative mx-auto font-sans py-[10px]  hover:text-[#ffd257] hover:text-[#ffd257]cursor-pointer  text-[#fff]  text-center">
                    Law in Forces
                  </li>
                  <div className=" h-[1px] bg-[#455f4b] px-[30px] "></div>
                  <li className="relative mx-auto font-sans py-[10px]  hover:text-[#ffd257] hover:text-[#ffd257]cursor-pointer  text-[#fff]  text-center">
                    Multi Perpose Vehicle
                  </li>
                  <div className=" h-[1px] bg-[#455f4b] px-[30px] "></div>
                  <li className="relative mx-auto font-sans py-[10px]  hover:text-[#ffd257] hover:text-[#ffd257]cursor-pointer  text-[#fff]  text-center">
                    Cash And Transit
                  </li>
                  <div className=" h-[1px] bg-[#455f4b] px-[30px] "></div>
                  <li className="relative mx-auto font-sans py-[10px]  hover:text-[#ffd257] hover:text-[#ffd257]cursor-pointer  text-[#fff]  text-center">
                    Guard Posts
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-[4px] group/technology">
                <li className="font-Inter text-[#000] text-[16px] not-italic font-normal leading-normal hover:text-[#ffd257]  ">
                  Technology
                </li>
                <button>
                  <img
                    src={dropDown}
                    alt="drop-down"
                    className="w-[13px] h-[80px]"
                  />
                </button>
                <ul className="bg-[#155214] top-[80px] w-[200px] hidden absolute py-[10px] group-hover/technology:block flex-col gap-4 ">
                  <li className="relative mx-auto font-sans py-[10px]  hover:text-[#ffd257] hover:text-[#ffd257]cursor-pointer  text-[#fff]  text-center">
                    Tranparent armor
                  </li>
                  <div className=" h-[1px] bg-[#455f4b] px-[30px] "></div>
                  <li className="relative mx-auto font-sans py-[10px]  hover:text-[#ffd257]  cursor-pointer  text-[#fff]  text-center">
                    SUSPENSION
                  </li>
                  <div className=" h-[1px] bg-[#455f4b] px-[30px] "></div>
                  <li className="relative mx-auto font-sans py-[10px]  hover:text-[#ffd257] cursor-pointer  text-[#fff]  text-center">
                    BRACKES
                  </li>
                  <div className=" h-[1px] bg-[#455f4b] px-[30px] "></div>
                  <li className="relative mx-auto font-sans py-[10px]  hover:text-[#ffd257] hover:text-[#ffd257]cursor-pointer  text-[#fff]  text-center">
                    FLOOR PROTICTION
                  </li>
                  <div className=" h-[1px] bg-[#455f4b] px-[30px] "></div>
                  <li className="relative mx-auto font-sans py-[10px]  hover:text-[#ffd257] cursor-pointer  text-[#fff]  text-center">
                    HINGES
                  </li>
                </ul>
              </div>
              <div className="flex gap-[4px] items-center group/media">
                <li className="font-Inter cursor-pointer hover:text-[#ffd257] text-[#000] text-[16px] not-italic font-normal leading-normal">
                  Media
                </li>
              </div>
              <div className="flex items-center gap-[4px] group/faqs">
                <li className="font-Inter cursor-pointer hover:text-[#ffd257]  text-[#000] text-[16px] not-italic font-normal leading-normal">
                  FAQs
                </li>
              </div>
              <button className=" w-[150px] h-[50px] mt-[20px] ml-[10px] text-light_white bg-[#155214] hover:text-[#ffd257] flex px-[4px]   items-center justify-center rounded-[4px] bg-secondary_green ">
                Contact
              </button>
            </ul>
          </div>
        </div>
      </navbar>
    </div>
  );
};

export default Navbar;
