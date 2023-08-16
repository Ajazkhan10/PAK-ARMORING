import React from "react";
import bmw from "../../Assert/images/bmw.png";
import range from "../../Assert/images/range.png";
import toyota from "../../Assert/images/toyota.png";
import learnMore from "../../Assert/svg/learnMore.svg";
const MainSection = () => {
  return (
    <div>
      <mainsection className="flex flex-col pb-[30px] justify-center items-center  bg-[#1A1A1A]  px-[80px] py-[30px]  ">
        <div className=" flex flex-col justify-center items-center gap-[24px] ">
          <div className="w-full flex  flex-col justify-center items-center">
            <h1 className="  text-[#fff] font-[Ubuntu] text-[48px] normal-case font-bold leading-normal ">
              Every Features You Might Fall In Love
            </h1>
            <p className=" text-[#fff] font-[Inter] text-[16px] normal-case font-normal leading-6 ">
              Here are several Features of BMW X Series That Inform you
              specifically before you decide anything for this car.
            </p>
          </div>
          <div className="grid  mx-auto sm:grid-cols-2 lg:grid-cols-3 py-[30px] gap-[30px] ">
            <div className="flex flex-col gap-[24px]">
              <img src={bmw} alt="bmwImage" className=" w-full" />
              <h1 className=" text-[#fff] font-[Ubuntu] text-[24px] normal-case font-medium leading-6">
                BMW X MODELS
              </h1>
              <p className=" text-[#fff] font-[Inter] text-[16px] normal-case font-normal leading-6">
                The BMW X1 is the perfect vehicle for those who want to you
                interpret driving pleasure in line with their own needs and
                wants.
              </p>
            </div>
            <div className="flex flex-col  gap-[24px]">
              <img src={range} alt="rangeImage" className=" w-full" />
              <h1 className=" text-[#fff] font-[Ubuntu] text-[24px] normal-case font-medium leading-6">
                Range Rover
              </h1>
              <p className=" text-[#fff] font-[Inter] text-[16px] normal-case font-normal leading-6">
                Range Rover sub-brands have been launched. In 2004, Land Rover
                debuted the Range Rover Sport, based on the Land Rover Discovery
                platform.
              </p>
            </div>
            <div className="flex flex-col  gap-[24px]">
              <img src={toyota} alt="toyotaImage" className=" w-full" />
              <h1 className=" text-[#fff] font-[Ubuntu] text-[24px] normal-case font-medium leading-6">
                Toyota Truck
              </h1>
              <p className=" text-[#fff] font-[Inter] text-[16px] normal-case font-normal leading-6">
                These Toyota trucks offer incredible standard features and a
                stylish look without sacrificing performance and power. Build
                your ideal truck today.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-start w-full">
            <button
              className="flex justify-center items-center w-[367px] gap-[24px] py-[12px] px-[24px] rounded-[25px] border border-[#fff]  text-light_white bg-[#155214]  "
              type="btn"
            >
              <p className="text-[#fff] font-[Ubuntu] text-[16px] normal-case font-medium leading-normal hover:text-[#ffd257]">
                Learn More
              </p>
              <img
                src={learnMore}
                alt="learnMoreIcon"
                className="w-[24px] h-[24px]"
              />
            </button>
          </div>
        </div>
      </mainsection>
    </div>
  );
};

export default MainSection;
