import React, { useState } from "react";

export const Faqs = ({ para, MinusIcon, PlusIcon, head }) => {
  const [increase, setIncrese] = useState(false);
  const handleOpen = () => {
    setIncrese(!increase);
  };
  return (
    <ul className="">
      <li>
        <div className=" h-[1px] px-[30px] "></div>
        <div className="flex justify-between">
          <h1 className="head1 text-[20px] font-medium text-[#155214]">
            {head}
          </h1>
          <button onClick={handleOpen}>
            {increase ? (
              <img src={MinusIcon} alt="MinusIcon" />
            ) : (
              <img src={PlusIcon} alt="PlusIcon" />
            )}
          </button>
        </div>
        {increase ? <p>{para}</p> : ""}
      </li>
    </ul>
  );
};
