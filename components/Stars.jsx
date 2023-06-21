import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className="text-[#ffb900] font-[1rem] mr-[0.25rem]">
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className="flex items-center mb-[0.5rem]">
      <div className="flex items-center">{tempStars}</div>
      <p className="ml-[0.5rem] mb-0">{reviews} customer reviews</p>
    </div>
  );
};

export default Stars;
