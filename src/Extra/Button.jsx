import React from "react";

export const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      className=" w-[150px] mx-auto text-light_white bg-[#155214] hover:text-[#ffd257] flex px-[4px] py-[12px]  items-center justify-center rounded-[4px] bg-secondary_green "
    >
      {label}
    </button>
  );
};
