import React from "react";
import CatalogImage from "../../Assert/images/catalog.png";
const Catalog = () => {
  return (
    <div className="bg-[#dadada]  mx-auto  shrink-0   items-center px-[80px] py-[30px] ">
      <div className=" grid lg:grid-cols-2 items-center justify-center gap-[40px]">
        <div className=" gap-[40px]  grid ">
          <h1 className=" text-[#000]  font-Ubuntu text-[36px] not-italic font-bold leading-normal">
            Let’s Work Together
          </h1>
          <p className=" text-[#000]  font-Inter text-[16px] not-italic font-normal leading-[24px]">
            Some vehicles, however, are more conductive to be armored than
            others. Again, please call the experts at Pak Armoring to discuss
            your specific needs.
          </p>
          <div className="flex flex-col w-full sm:flex-row lg:flex-row items-start   gap-[42px]">
            <button className="flex  py-[12px] px-[40px] lg:py-[10px] lg:px-[20px] justify-center items-center gap-[8px] bg-[#205228] rounded-[4px] text-[#fff]">
              Download Catalog
            </button>
            <button className="flex  py-[12px] px-[45px] lg:py-[10px] lg:px-[20px] justify-center items-center gap-[8px] bg-[#ffffff] rounded-[4px] text-[#205228]">
              Request a Quote
            </button>
          </div>
        </div>
        <div className=" w-full lg:px-[20px] py-[50px] ">
          <img
            src={CatalogImage}
            alt="carImage"
            className="w-full lg:object-scale-down"
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
