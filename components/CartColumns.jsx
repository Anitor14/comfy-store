"use client";
import React from "react";

const CartColumns = () => {
  return (
    <div className="hidden md:block">
      <div className="md:grid md:grid-cols-[316px,1fr,1fr,1fr,auto] justify-center gap-x-4">
        <h5 className="text-clr-grey-5 font-[400]">item</h5>
        <h5 className="text-clr-grey-5 font-[400]">price</h5>
        <h5 className="text-clr-grey-5 font-[400]">quantity</h5>
        <h5 className="text-clr-grey-5 font-[400]">subtotal</h5>
        <span className="w-8 h-8"></span>
      </div>
      <hr className="mt-4 mb-12" />
    </div>
  );
};

export default CartColumns;
