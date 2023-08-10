import React from "react";
import CatalogImage from "../../Assert/images/catalog.png";
const Catalog = () => {
  return (
    <div className="bg-[#E6E6E6] w-[390px] shrink-0  flex  items-center flex-col ">
      <div className="flex flex-col gap-[40px] px-[30px] py-[30px]">
        <h1 className="w-[355.14px] text-[#000] text-center font-Ubuntu text-[36px] not-italic font-bold leading-normal">
          Let’s Work Together
        </h1>
        <p className="w-[355.14px] text-[#000] text-center font-Inter text-[16px] not-italic font-normal leading-[24px]">
          Some vehicles, however, are more conductive to be armored than others.
          Again, please call the experts at Pak Armoring to discuss your
          specific needs.
        </p>
        <div className="flex flex-col items-center  w-[355.14px] gap-[32px]">
          <button className="flex w-[326px] py-[12px] px-[40px] justify-center items-center gap-[8px] bg-[#205228] rounded-[4px] text-[#fff]">
            Download Catalog
          </button>
          <button className="flex w-[326px] py-[12px] px-[40px] justify-center items-center gap-[8px] bg-[#fff] rounded-[4px] text-[#205228] border-[1px] border-[#205228]">
            Request a Quote
          </button>
        </div>
        <div>
          <img
            src={CatalogImage}
            alt="carImage"
            className="w-[347.514px] h-[202px] shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
