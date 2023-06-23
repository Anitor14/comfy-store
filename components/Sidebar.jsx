"use client";
import React from "react";
import Link from "next/link";
import { useProductsContext } from "../context/products_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import CartButtons from "./CartButtons";
import Image from "next/image";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { data: session } = useSession();
  return (
    <aside
      className={` sm:hidden fixed  top-0 left-0 w-screen h-screen bg-clr-white transition-transform duration-300 ${
        isSidebarOpen
          ? "translate-x-0 z-10"
          : "-translate-x-full z-[1] text-center"
      }`}
    >
      <div className="flex items-center justify-between px-[1.5rem] py-[1rem]">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="comfy slot"
            width={100}
            height={100}
            className="object-contain self-center"
          />
        </Link>

        <button
          className="text-[2rem] bg-transparent text-clr-primary-5 hover:text-clr-red-light border-transparent transition-all duration-300 ease-linear cursor-pointer  "
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="mb-[2rem]">
        {links.map(({ id, text, url }) => {
          return (
            <li key={id}>
              {
                <Link
                  href={url}
                  onClick={closeSidebar}
                  className="block text-left text-[1rem] capitalize py-[1rem] px-[1.5rem] text-clr-grey-3 hover:text-clr-grey-2 hover:bg-clr-grey-10 transition-prop hover:pl-[2rem]  "
                >
                  {text}
                </Link>
              }
            </li>
          );
        })}
        {session?.user && (
          <li>
            <Link
              href={"/checkout"}
              onClick={closeSidebar}
              className="block text-left text-[1rem] capitalize py-[1rem] px-[1.5rem] text-clr-grey-3 hover:text-clr-grey-2 hover:bg-clr-grey-10 transition-prop hover:pl-[2rem]  "
            >
              checkout
            </Link>
          </li>
        )}
      </ul>
      <div className="w-full flex items-center justify-center">
        <CartButtons show={"show"} />
      </div>
    </aside>
  );
};

export default Sidebar;
