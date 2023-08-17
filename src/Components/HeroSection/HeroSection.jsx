import React from "react";
import backgroundImage from "../../Assert/images/backgroundImg.png";
import car112233 from "../../Assert/images/11222333.png";
import car1 from "../../Assert/images/car1.png";
import { Button } from "../../Extra/Button";

const HeroSection = () => {
  return (
    <div className="bg-[#000] bg-opacity-10">
      <div className=" relative  w-full h-[600px] my-[40px] mx-auto max-w-[1512px]">
        <div className="block lg:hidden">
          <img
            src={car112233}
            alt="car11122"
            className="  absolute  w-full h-full  "
          />
        </div>
        <div className="hidden lg:block">
          <img
            src={backgroundImage}
            alt="car11122"
            className="  absolute  w-full h-full  "
          />
        </div>
        <div className="relative text-[#ffffff]   max-w-[1512px] bg-[#000] bg-opacity-40 w-full h-full justify-center px-[80px] text-center flex flex-col gap-[24px] mx-auto">
          <h1 className="  font-Ubuntu  text-[32px] normal-case font-bold leading-normal  ">
            MULTI-PUROPSE TACTICAL VEHICLES SUPERIOR 4X4
          </h1>
          <p className=" font-[Inter] leading-[24px] normal-case text-[16px] font-normal ">
            ONE TEAM ONE GOAL SAVING LIVES...
          </p>
          <Button label="Contact" />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row  mx-auto max-w-[1512px] justify-between gap-[30px] px-[80px] py-[40px]">
        <div className="flex justify-between  flex-col gap-[24px] w-full lg:w-1/2 ">
          <h1 className="text-[#1A1A1A] font-Ubuntu text-[30px] normal-case font-bold leading-[36px]">
            ARMORED VEHICLE
            <span className="text-[#155214]">SPECIALIST</span>
          </h1>
          <p className="font-[Inter] text-[#70747C] text-[16px]  normal-case font-normal leading-6">
            Pak Armoring was founded on the basic principle of manufacturing the
            finest, most technologically advanced armored passenger vehicles in
            the world.Pak Armoring Pvt. Ltd was incorporated in 2012. Pak
            Armoring has been delivering quality work with a team having
            experience for last 9 years which are known for their excellence and
            it has been productive, effective and efficient in not only
            providing quality armored vehicles but has also succeed in building
            great relationship with their valuable clients because Pak Armoring
            Pvt.
          </p>
          <div className="w-fit flex justify-center items-center ">
            <Button label="About Us" />
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#000] bg-opacity-60 h-full lg:items-start lg:w-[50%]">
          <img src={car1} alt="car1Logo" className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
