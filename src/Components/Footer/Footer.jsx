import React from "react";
import logo from "../../Assert/svg/image.svg";
import facebook from "../../Assert/svg/facebook.svg";
import twitter from "../../Assert/svg/twitter.svg";
import linkedin from "../../Assert/svg/akar-icons_linkedin-fill.svg";
import whatsapp from "../../Assert/svg/WhatsApp - png.png";
const Footer = () => {
  return (
    <div className="w-[390px] flex flex-col justify-center items-center gap-[40px] px-[30px] py-[30px]">
      <div className="flex justify-center items-center gap-[16px]">
        <img src={logo} alt="Logo" className="w-[62px] h-[70px]" />
        <div className="flex flex-col justify-start whitespace-nowrap gap-[8px]">
          <h1 className="text-[#000] font-Ubuntu text-[20px] not-italic font-bold leading-normal ">
            PAK ARMORING (PVT) LTD.
          </h1>
          <p className="font-medium	 text-[#000] text-[12px] not-italic leading-normal">
            ARMORED VEHICLES SPECIALIST
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-[40px]">
          <h1 className="text-[#000] font-Ubuntu text-[16px] not-italic font-medium leading-normal">
            Products
          </h1>
          <div className="grid grid-rows-6 grid-flow-col gap-x-[56px] gap-y-[16px] text-[#1A1A1A] font-Ubuntu text-[16px] not-italic font-normal leading-normal">
            <p>BMW X Series</p>
            <p>Range Rover</p>
            <p>Fortuner</p>
            <p>Mercedez Benz</p>
            <p>Toyota Corolla</p>
            <p>Toyota Camry</p>
            <p>Toyota Revo</p>
            <p>HiAc</p>
            <p>Coaster</p>
            <p>Sagr APC & UQAAb</p>
          </div>
          <div className="flex flex-col gap-[40px]">
            <h1 className="text-[#000] font-Ubuntu text-[16px] not-italic font-medium leading-normal">
              ProductsAbout Company
            </h1>
            <div className="grid grid-rows-3 grid-flow-col gap-x-[56px] gap-y-[16px] text-[#1A1A1A] font-Ubuntu text-[16px] not-italic font-normal leading-normal">
              <p>Company Profile</p>
              <p>Testimonial</p>
              <p>CEO Message</p>
            </div>
          </div>
          <div className="flex flex-col gap-[40px]">
            <h1 className="text-[#000] font-Ubuntu text-[16px] not-italic font-medium leading-normal">
              Office Address
            </h1>
            <div className="grid grid-rows-3 grid-flow-col gap-x-[56px] gap-y-[16px] text-[#1A1A1A] font-Ubuntu text-[16px] not-italic font-normal leading-normal">
              <p>
                Plot No. 2/2a, Survey 86, Sector 24, Main Korangi Creek Road,
                Karachi.
              </p>
              <p>0303 9234222 - 0303 9234333</p>
              <p>info@pakarmoning.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-between w-[ 336.331px] items-center gap-[24px]">
            <div className="flex  items-center gap-[24px]">
              <img
                src={facebook}
                alt="facebook"
                className="w-[24px] h-[24px]"
              />
              <img src={twitter} alt="twitter" className="w-[24px] h-[24px]" />
              <img
                src={linkedin}
                alt="linkedin"
                className="w-[24px] h-[24px]"
              />
              <img
                src={whatsapp}
                alt="whatsapp"
                className="w-[24px] h-[24px]"
              />
            </div>
            <p className="text-[#1A1A1A] font-Inter text-[14px] not-italic font-normal leading-normal">
              Copyrights 2023 Pak Armoring All rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
