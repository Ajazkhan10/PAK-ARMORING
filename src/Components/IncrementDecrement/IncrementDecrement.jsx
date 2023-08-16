import React from "react";
import MinusIcon from "../../Assert/svg/Minus-Icon.svg";
import PlusIcon from "../../Assert/svg/icons_plus.svg";
import { Faqs } from "./Faqs";
const IncrementDecrement = () => {
  const FaqsPlusMinus = [
    {
      id: 1,
      head: "Who is Pak Armoring (Pvt) Ltd.?",
      para: "Pak Armoring (Pvt) Ltd. (Pak Armoring) is a premier vehicle armoring company that armors all major makes and models of cars and SUV’s while maintaining the vehicle’s original appearance and performance. Since beginning operations over 10 years ago. Pak Armoring has produced in excess of 100 armored passenger vehicles. By using proprietary armoring designs and installation techniques as well as the latest lightweight armoring materials. Pak Armoring provides the most technologically advanced protected vehicles available. These vehicles have been delivered to heads of state, corporate executives, celebrities, religious leaders, and civilian contractors all over the world.",
    },
    {
      id: 2,
      head: "Can any vehicle be armored?",
      para: "Yes. Some vehicles, however, are more conductive to be armored than others. Again, please call the experts at Pak Armoring to discuss your specific needs.",
    },
    {
      id: 3,
      head: "What parts of a vehicle get armored?",
      para: "The purpose of armoring a car is to protect the passengers. Towards that end, armor engineers focus on the occupants first by creating a cocoon of protection by enveloping the passenger cabin. Pak Armoring armors the entire passenger compartment, the glass, floors, pillar posts, roofs, doors – thus providing a maximum coverage of protection for vehicle passengers. In addition, other areas (battery, fuel tank, tires, ECM module, etc.) of the vehicle are, or can be protected.",
    },
    {
      id: 4,
      head: "How long will it take to armor my vehicle?",
      para: "Our delivery times currently vary from 45 to 60 working days on the majority of vehicle models. Pak Armoring is able to accomplish this due to the volume of vehicles being armored and by keeping in stock armor components for most of the popular luxury vehicles.",
    },
  ];

  return (
    <div className="w-full px-[80px] my-[40px] flex flex-col gap-[30px]">
      <h1 className="text-[30px] font-bold">FAQs</h1>
      {FaqsPlusMinus.map((node) => {
        return <Faqs {...node} MinusIcon={MinusIcon} PlusIcon={PlusIcon} />;
      })}
    </div>
  );
};

export default IncrementDecrement;
