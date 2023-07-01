"use client";
import React, { useEffect, useState } from "react";
import { useCartContext } from "@/context/cart_context";
import Link from "next/link";
import CartColumns from "@/components/CartColumns";
import CartItem from "@/components/CartItem";
import CartTotals from "./CartTotals";
const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  const [cartState, setCartState] = useState([]);
  useEffect(() => {
    setCartState(cart);
  }, []);

  return (
    <section className="w-full sm:px-[80px] px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full py-[5rem]">
        <CartColumns />
        {cartState.map((item) => {
          console.log(`this is the first items ===> ${item}`);
          return <CartItem key={item.id} {...item} />;
        })}
        <hr />
        <div className="flex justify-between mt-8">
          <Link
            href={"/products"}
            className="border border-transparent capitalize py-1 px-2 bg-clr-primary-5 text-clr-white rounded-[0.25rem] tracking-[0.1rem] font-[400] cursor-pointer"
          >
            continue shipping
          </Link>
          <button
            type="button"
            className="border border-transparent capitalize py-1 px-2  text-clr-white rounded-[0.25rem] tracking-[0.1rem] font-[400] cursor-pointer bg-clr-black"
            onClick={clearCart}
          >
            clear shopping cart
          </button>
        </div>
        <CartTotals />
      </div>
    </section>
  );
};

export default CartContent;
