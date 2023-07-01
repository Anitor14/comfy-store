"use client";
import React from "react";
import { useCartContext } from "@/context/cart_context";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import { formatPrice } from "@/utils/helpers";
import Link from "next/link";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  // get the user session.
  const { data: session } = useSession();
  return (
    <section className="mt-12 flex justify-center md:justify-end">
      <div>
        <article className="border border-solid border-clr-grey-8 py-6 px-12">
          <h5 className="grid grid-cols-[200px,1fr]">
            subtotal: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p className="grid grid-cols-[200px,1fr] capitalize">
            shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4 className="grid grid-cols-[200px,1fr] mt-8">
            order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {session?.user ? (
          <Link href={"/checkout"} className="btn">
            proceed to checkout
          </Link>
        ) : (
          <button className="btn w-full text-center font-[700] mt-4">
            login
          </button>
        )}
      </div>
    </section>
  );
};

export default CartTotals;
