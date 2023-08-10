import React from "react";
import backgroundImage from "../../Assert/images/backgroundImg.png";
import car1 from "../../Assert/images/car1.png";

const HeroSection = () => {
  return (
    <div className="w-[390px] flex flex-col justify-center items-center gap-[40px]">
      <div
        className="w-[390px]  h-[613px] flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage}) ` }}
      >
        <div className=" w-[358px]  flex flex-col gap-[24px] ">
          <h1 className="w-[358px]  text-[#FFF] font-Ubuntu items-start  text-[32px] normal-case font-bold leading-normal  ">
            MULTI-PUROPSE TACTICAL VEHICLES SUPERIOR 4X4
          </h1>
          <p className="w-[295px] text-[#FFF] font-[Inter] leading-[24px] normal-case text-[16px] font-normal ">
            ONE TEAM ONE GOAL SAVING LIVES...
          </p>
          <button
            type="btn"
            className="w-fit text-[#205228] bg-[#FFF] flex justify-center items-center py-[12px] px-[40px] gap-[8px] rounded-[4px]"
          >
            Contact
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[358px]">
        <div className="flex justify-center flex-col gap-[24px]  ">
          <h1 className="text-[#1A1A1A] font-Ubuntu text-[30px] normal-case font-bold leading-[36px]">
            ARMORED VEHICLE <span className="text-[#155214]">SPECIALIST</span>
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
          <button
            type="btn"
            className="w-fit text-[#fff] bg-[#205228] flex justify-center items-center py-[12px] px-[40px] gap-[8px] rounded-[4px]"
          >
            About Us
          </button>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center px-[30px] py-[30px] ">
        <img
          src={car1}
          alt="car1Logo"
          className="w-[358.013px] h-[238.704px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
