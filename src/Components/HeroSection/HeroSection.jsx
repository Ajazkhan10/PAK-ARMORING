import React from "react";
import backgroundImage from "../../Assert/images/backgroundImg.png";
import car1 from "../../Assert/images/car1.png";
import car111222333 from "../../Assert/images/11222333.png";
import { Button } from "../../Extra/Button";
const HeroSection = () => {
  return (
    <>
      <div className="block lg:hidden ">
        <div className="px-30px] py-[40px] flex flex-col items-center gap-[40px]">
          <div className="pt-6 pb-[209px] relative  ">
            <img
              src={car111222333}
              alt="car11122"
              className=" rounded-[16px] absolute top-0 left-0 w-full h-full  "
            />
            <div className="relative text-[#fff] grid text-center grid-cols-1 px-[30px] top-[80px] mx-auto gap-[34px]">
              <h1 className="   font-Ubuntu text-center text-[32px] normal-case font-bold leading-normal  ">
                MULTI-PUROPSE TACTICAL VEHICLES SUPERIOR 4X4
              </h1>
              <p className="  font-[Inter] leading-[24px] normal-case text-[16px] font-normal ">
                ONE TEAM ONE GOAL SAVING LIVES...
              </p>
              <div className="mx-auto">
                <Button label="Contact" />
              </div>
            </div>
          </div>
          <div className="px-[12px] py-[40px]">
            <div className="flex flex-col justify-center items-center w-[358px] ">
              <div className="flex justify-center flex-col gap-[24px]  ">
                <h1 className="text-[#1A1A1A] font-Ubuntu text-[30px] normal-case font-bold leading-[36px]">
                  ARMORED VEHICLE
                  <span className="text-[#155214]">SPECIALIST</span>
                </h1>
                <p className="font-[Inter] text-[#70747C] text-[16px]  normal-case font-normal leading-6">
                  Pak Armoring was founded on the basic principle of
                  manufacturing the finest, most technologically advanced
                  armored passenger vehicles in the world.Pak Armoring Pvt. Ltd
                  was incorporated in 2012. Pak Armoring has been delivering
                  quality work with a team having experience for last 9 years
                  which are known for their excellence and it has been
                  productive, effective and efficient in not only providing
                  quality armored vehicles but has also succeed in building
                  great relationship with their valuable clients because Pak
                  Armoring Pvt.
                </p>
                <button
                  type="btn"
                  className="w-fit text-[#fff] bg-[#205228] flex justify-center items-center py-[12px] px-[40px] gap-[8px] rounded-[4px]"
                >
                  About Us
                </button>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center px-[30px] py-[30px] ">
              <img src={car1} alt="car1Logo" className="object-scale-down" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-full">
        <div className="  mx-auto flex flex-col  items-center gap-[40px]">
          <div
            className="w-full h-[75rem] flex flex-col items-center justify-center bg-cover bg-no-repeat "
            style={{ backgroundImage: `url(${backgroundImage}) ` }}
          >
            <div className="mx-auto  flex flex-col gap-[24px] text-[#fff] text-center   ">
              <h1 className="  lg:text-[62px]    font-Ubuntu  text-[32px] normal-case font-bold leading-normal  ">
                MULTI-PUROPSE TACTICAL VEHICLES SUPERIOR 4X4
              </h1>
              <p className="  font-[Inter] leading-[24px] normal-case text-[16px] font-normal ">
                ONE TEAM ONE GOAL SAVING LIVES...
              </p>
              <div className=" mx-auto">
                <Button
                  label="Contact"
                  onClick={() => alert("ckick the contact")}
                />
              </div>
            </div>
          </div>
          <div className="px-[12px] py-[40px] lg:px-[80px] lg:py-[40px]">
            <div className="flex flex-col justify-center items-center  mx-auto lg:flex lg:flex-row lg:w-100% lg:gap-[40px] lg:justify-between lg:items-center">
              <div className="flex justify-center flex-col gap-[24px] lg:w-[50%]">
                <h1 className="text-[#1A1A1A] font-Ubuntu text-[30px] normal-case font-bold leading-[36px]">
                  ARMORED VEHICLE
                  <span className="text-[#155214] mx-[10px]">SPECIALIST</span>
                </h1>
                <p className="font-[Inter] text-[#70747C] text-[16px]  normal-case font-normal leading-6">
                  Pak Armoring was founded on the basic principle of
                  manufacturing the finest, most technologically advanced
                  armored passenger vehicles in the world.Pak Armoring Pvt. Ltd
                  was incorporated in 2012. Pak Armoring has been delivering
                  quality work with a team having experience for last 9 years
                  which are known for their excellence and it has been
                  productive, effective and efficient in not only providing
                  quality armored vehicles but has also succeed in building
                  great relationship with their valuable clients because Pak
                  Armoring Pvt.
                </p>
                <div>
                  <Button
                    label="About Us"
                    onClick={() => alert("click about ")}
                  />
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center px-[30px] py-[30px] ">
                <img
                  src={car1}
                  alt="car1Logo"
                  className="w-[358.013px] h-[238.704px] lg:w-[664px] rounded-[16px ] lg:h-[442.721px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
