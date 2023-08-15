import React from "react";
import CatalogImage from "../../Assert/images/catalog.png";
import { Button } from "../../Extra/Button";
const Catalog = () => {
  return (
    <div className="bg-[#E6Egrid  mx-auto  shrink-0   items-center px-[30px] py-[30px] ">
      <div className=" grid lg:grid-cols-2 items-center justify-center mx-auto gap-[20px]">
        <div className=" gap-[40px] px-[30px] py-[30px] grid ">
          <h1 className=" text-[#000]  font-Ubuntu text-[36px] not-italic font-bold leading-normal">
            Let’s Work Together
          </h1>
          <p className=" text-[#000]  font-Inter text-[16px] not-italic font-normal leading-[24px]">
            Some vehicles, however, are more conductive to be armored than
            others. Again, please call the experts at Pak Armoring to discuss
            your specific needs.
          </p>
          <div className="object-contain  flex flex-col sm:flex-row lg:flex-row  gap-[32px]">
            <Button label="Download Catalog" />
            <Button label="Request a Quote" />
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
