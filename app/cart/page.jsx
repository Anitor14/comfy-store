"use client";
import React from "react";
import { useCartContext } from "@/context/cart_context";
import Link from "next/link";
import CartContent from "@/components/CartContent";
import PageHero from "@/components/PageHero";
const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <main className="min-h-[calc(100vh-5rem)] py-[5rem] px-[0rem]">
        <div className="text-center">
          <h2 className="mb-[1rem] text-normal font-[700]">
            Your cart is empty
          </h2>
          <Link href="/products" className="btn">
            fill it
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <main className="min-h-[calc(100vh-(20vh+10rem))]">
        <CartContent />
      </main>
    </main>
  );
};

export default CartPage;
