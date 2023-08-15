import React from "react";
import CatalogImage from "../../Assert/images/catalog.png";
const Catalog = () => {
  return (
    <div className="bg-[#E6Egrid  mx-auto  shrink-0   items-center px-[30px] py-[30px] ">
      <div className=" grid lg:grid-cols-2 items-center justify-center mx-auto gap-[20px]">
        <div className=" gap-[40px] px-[30px] py-[30px] grid ">
          <h1 className=" text-[#000] text-center font-Ubuntu text-[36px] not-italic font-bold leading-normal">
            Let’s Work Together
          </h1>
          <p className=" text-[#000] text-center font-Inter text-[16px] not-italic font-normal leading-[24px]">
            Some vehicles, however, are more conductive to be armored than
            others. Again, please call the experts at Pak Armoring to discuss
            your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row lg:flex-row items-center  justify-center gap-[32px]">
            <button className="flex  py-[12px] px-[40px] lg:py-[10px] lg:px-[20px] justify-center items-center gap-[8px] bg-[#205228] rounded-[4px] text-[#fff]">
              Download Catalog
            </button>
            <button className="flex py-[12px] px-[40px] lg:py-[10px] lg:px-[20px] justify-center items-center gap-[8px] bg-[#fff] rounded-[4px] text-[#205228] border-[1px] border-[#205228]">
              Request a Quote
            </button>
          </div>
        </div>
        <div className="px-[30px] ">
          <img
            src={CatalogImage}
            alt="carImage"
            className="w-[347.514px] h-[202px] object-scale-down shrink-0 mx-auto lg:w-[700px] lg:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
