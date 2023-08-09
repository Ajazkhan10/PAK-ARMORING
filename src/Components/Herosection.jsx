import "./style.css";
import mainLogo from "../Assert/svg/image.svg";
import groupLogo from "../Assert/svg/Group.svg";
import phoneLogo from "../Assert/svg/phone.svg";
import backgroundImage from "../Assert/images/backgroundImg.png";
import car1 from "../Assert/images/car1.png";
import bmw from "../Assert/images/bmw.png";
import range from "../Assert/images/range.png";
import toyota from "../Assert/images/toyota.png";
import learnMore from "../Assert/svg/learnMore.svg";
export default function HeroSection() {
  return (
    <div className="">
      <navbar className=" h-[80px] w-[390px]  bg-light_white flex justify-center items-center">
        <div className="h-[55.81396px] w-[342px] flex items-center  justify-between">
          <div>
            <img
              className="w-[24px] h-[24px]"
              src={phoneLogo}
              alt="group-Logo"
            />
          </div>
          <div>
            <img
              className="w-[53px] h-[60px]"
              src={mainLogo}
              alt="phone-Logo"
            />
          </div>
          <div>
            <img className="w-[24px] h-[8px]" src={groupLogo} alt="Logo" />
          </div>
        </div>
      </navbar>
      <hero>
        <div>
          <div
            className=" w-[390px] h-[613px] flex justify-center items-center"
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
        </div>
      </hero>
      <main className="flex justify-center items-center mt-[30px]">
        <div className="w-[358px] flex justify-center flex-col gap-[24px] items-start ">
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
      </main>
      <div className=" flex justify-center items-center mt-[30px] ">
        <img
          src={car1}
          alt="car1Logo"
          className="w-[358.013px] h-[238.704px]"
        />
      </div>
      <mainsection className=" w-[390px] h-[2226px] flex justify-center items-center bg-[#1A1A1A] mt-[30px]">
        <div className="w-[358px] flex flex-col justify-center items-center gap-[24px]">
          <h1 className="w-[358px] text-[#fff] font-[Ubuntu] text-[48px] normal-case font-bold leading-normal">
            Every Features You Might Fall In Love
          </h1>
          <p className="w-[358px] text-[#fff] font-[Inter] text-[16px] normal-case font-normal leading-6">
            Here are several Features of BMW X Series That Inform you
            specifically before you decide anything for this car.
          </p>
          <div className="flex flex-col items-start gap-[24px]">
            <img src={bmw} alt="bmwImage" />
            <h1 className="w-[358px] text-[#fff] font-[Ubuntu] text-[24px] normal-case font-medium leading-6">
              BMW X MODELS
            </h1>
            <p className="w-[358px] text-[#fff] font-[Inter] text-[16px] normal-case font-normal leading-6">
              The BMW X1 is the perfect vehicle for those who want to you
              interpret driving pleasure in line with their own needs and wants.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[24px]">
            <img src={range} alt="rangeImage" />
            <h1 className="w-[358px] text-[#fff] font-[Ubuntu] text-[24px] normal-case font-medium leading-6">
              Range Rover{" "}
            </h1>
            <p className="w-[358px] text-[#fff] font-[Inter] text-[16px] normal-case font-normal leading-6">
              Range Rover sub-brands have been launched. In 2004, Land Rover
              debuted the Range Rover Sport, based on the Land Rover Discovery
              platform.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[24px]">
            <img src={toyota} alt="toyotaImage" />
            <h1 className="w-[358px] text-[#fff] font-[Ubuntu] text-[24px] normal-case font-medium leading-6">
              Toyota Truck{" "}
            </h1>
            <p className="w-[358px] text-[#fff] font-[Inter] text-[16px] normal-case font-normal leading-6">
              These Toyota trucks offer incredible standard features and a
              stylish look without sacrificing performance and power. Build your
              ideal truck today.
            </p>
          </div>
          <div className="">
            <button
              className="flex justify-center items-center w-[367px] gap-[24px] py-[12px] px-[24px] rounded-[25px] border border-[#fff] "
              type="btn"
            >
              <p className="text-[#fff] font-[Ubuntu] text-[16px] normal-case font-medium leading-normal">
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
      <div className="w-[390px] bg-[#FFF] h-[6399px] mt-[40px]  flex flex-col items-start gap-[48px]">
        <h1 className="w-[342] mx-[24px] text-[##1A1A1A] text-[34px] font-[Montserrat] normal-case font-bold leading-normal">
          FAQs
        </h1>
        <div className="w-[390px] flex flex-col gap-[32px] justify-center items-center">
          <div className="w-[342px] h-[1px] bg-[#CCC]"></div>
        </div>
      </div>
      <div className="mb-[400px]"></div>
    </div>
  );
}
