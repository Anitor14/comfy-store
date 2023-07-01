"use client";
import React from "react";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    console.log("i don click");
    toggleAmount(id, "inc");
  };

  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <article className="grid grid-cols-[200px,auto,auto] md:grid-cols-[1fr,1fr,1fr,1fr,auto] grid-rows-[75px] gap-[3rem,1rem] justify-center mb-[3rem] items-center">
      <div className="grid grid-cols-[75px,125px] md:grid-cols-[100px,200px] grid-rows-[75px] items-center text-left gap-4 md:gap-[1rem]">
        <img
          src={image}
          alt={name}
          className="w-full h-full block rounded-[0.25rem] object-cover"
        />
        <div>
          <h5 className="text-[0.75rem] md:text-[0.85rem] mb-0 font-[700]">
            {name}
          </h5>
          <p className="text-clr-grey-5 text-[0.75rem] md:text-[0.85rem] capitalize mb-0 flex items-center tracking-[0.1rem] justify-start">
            color:
            <span
              className="inline-block w-2 md:w-3 h-2 md:h-3 bg-[red] ml-2 rounded-full"
              style={{ background: color }}
            />
          </p>
          <h5 className="text-[0.75rem] md:hidden mb-0 font-[700] text-clr-primary-5">
            {formatPrice(price)}
          </h5>
        </div>
      </div>
      <h5 className="hidden md:block text-[1rem] text-clr-primary-1 font-[400]">
        {formatPrice(price)}
      </h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="hidden md:block text-clr-grey-5 font-[400] text-[1rem] mb-0">
        {formatPrice(price * amount)}
      </h5>
      <button
        className=" text-[red] bg-transparent border border-transparent tracking-[0.1rem] bg-clr-red-dark w-6 h-6 items-center justify-center rounded-[0.25rem] text-[0.75rem] cursor-pointer"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </article>
  );
};

export default CartItem;
