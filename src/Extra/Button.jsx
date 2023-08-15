import React from "react";

export const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      className="w-[150px] text-light_white flex px-[4px] py-[12px] hover:bg-[#5a705d] items-center justify-center rounded-[4px] bg-secondary_green "
    >
      {label}
    </button>
  );
};
