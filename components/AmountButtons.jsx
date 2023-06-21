import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className="w-[140px] grid grid-cols-[repeat(3,1fr)] items-center">
      <button
        className="bg-transparent border-transparent cursor-pointer py-[1rem] px-0 w-[2rem] h-[1rem] flex items-center justify-center"
        onClick={decrease}
      >
        <FaMinus />
      </button>
      <h2 className="mb-0 font-[500]">{amount}</h2>
      <button
        className="bg-transparent border-transparent cursor-pointer py-[1rem] px-0 w-[2rem] h-[1rem] flex items-center justify-center"
        onClick={increase}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
