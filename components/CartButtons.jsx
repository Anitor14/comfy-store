"use client";
import React, { useEffect, useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaUserMinus,
  FaUserPlus,
} from "react-icons/fa";
import Link from "next/link";

import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useCartContext } from "@/context/cart_context";

const CartButtons = ({ show }) => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const { total_items } = useCartContext();

  useEffect(() => {
    const setUpProviders = async () => {
      // getting all the providers.
      const response = await getProviders();
      // storing it in the providers state.
      setProviders(response);
    };
    setUpProviders();
  }, []);
  return (
    <div
      className={`${
        show ? "grid" : "hidden"
      } md:grid grid-cols-2 items-center w-[225px]`}
    >
      <Link
        href={"/cart"}
        className="text-clr-grey-1 text-[1.5rem] flex items-center tracking-normal"
      >
        Cart
        <span className="flex items-center relative">
          <FaShoppingCart className="h-[1.6rem] ml-[5px]" />
          <span className="absolute top-[-10px] right-[-16px] bg-clr-primary-5 w-[16px] h-[16px] flex items-center justify-center rounded-full text-[0.75rem] text-clr-white p-[12px]">
            {total_items}
          </span>
        </span>
      </Link>
      {session?.user ? (
        <button
          type="button"
          onClick={signOut}
          className="flex items-center bg-[transparent] text-[1.5rem] cursor-pointer text-clr-grey-1 "
        >
          Logout <FaUserMinus className="ml-[5px]" />
        </button>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => {
              return (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="flex items-center bg-[transparent] text-[1.5rem] cursor-pointer text-clr-grey-1 "
                >
                  Login
                  <FaUserPlus className="ml-[5px]" />
                </button>
              );
            })}
        </>
      )}
    </div>
  );
};

export default CartButtons;
