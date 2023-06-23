import React from "react";
import { useCartContext } from "@/context/cart_context";
import Link from "next/link";
import CartColumns from "@/components/CartColumns";
const CartContent = () => {
  return (
    <section className="w-full sm:px-[80px] px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full py-[5rem]">
        <CartColumns />
      </div>
    </section>
  );
};

export default CartContent;
