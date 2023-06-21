import React, { useState } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import AmountButtons from "./AmountButtons";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  // add to cart.
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
      sss;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <section className="mt-[2rem]">
      <div className="grid grid-cols-[125px,1fr] items-center">
        <span className="capitalize font-[700]">colors :</span>
        <div className="flex">
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                onClick={() => setMainColor(color)}
                className={`${
                  mainColor === color ? "opacity-[1]" : "opacity-[0.5]"
                } w-[1.5rem] h-[1.5rem] rounded-full bg-[#222] mr-[0.5rem] border-none cursor-pointer flex items-center justify-center`}
              >
                {mainColor === color ? (
                  <FaCheck className="font-[0.75rem] text-clr-white" />
                ) : (
                  ""
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div></div>
      <div className="mt-[2rem]">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <Link
          href="/cart"
          className="btn mt-[1rem] w-[140px]"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </section>
  );
};

export default AddToCart;
