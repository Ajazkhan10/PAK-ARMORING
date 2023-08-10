import React from "react";
import mainLogo from "../../Assert/svg/image.svg";
import groupLogo from "../../Assert/svg/Group.svg";
import phoneLogo from "../../Assert/svg/phone.svg";
const Navbar = () => {
  return (
    <div>
      <navbar className=" h-[80px] w-[390px]  bg-light_white flex justify-center items-center lg:w-[1512px]">
        <div className="h-[55.81396px] w-[342px] flex items-center  justify-between ">
          <div className="lg:hidden">
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
            <div>
              <h1>PAK ARMORING (PVT) LTD.</h1>
              <p>ARMORED VEHICLES SPECIALIST</p>
            </div>
          </div>
          <div className="lg:hidden">
            <img className="w-[24px] h-[8px]" src={groupLogo} alt="Logo" />
          </div>
        </div>
      </navbar>
    </div>
  );
};

export default Navbar;
