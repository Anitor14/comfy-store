"use client";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  //gets the user session.
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      // getting all the providers
      const response = await getProviders();
      // storing it in the providers state.
      setProviders(response);
    };
    setUpProviders();
  }, []);
  return (
    <section className="w-full  sm:px-[80px] px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <div className="w-full flex items-center justify-between py-[10px]">
          <div className="flex items-center justify-between max-sm:w-full ">
            <Link href={"/"}>
              <Image
                src="/logo.svg"
                alt="comfy slot"
                width={175}
                height={175}
                className="object-contain"
              />
            </Link>
            <button
              type="button"
              className="bg-[transparent] border-[transparent] cursor-pointer sm:hidden"
              onClick={openSidebar}
            >
              <FaBars className="text-[2rem]" />
            </button>
          </div>

          <ul className="hidden sm:flex justify-center items-center">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id} className="my-0 mx-[0.5rem]">
                  <Link
                    href={url}
                    className="text-[1rem] text-clr-grey-3 capitalize tracking-[0.1rem] p-[0.5rem] hover:border-b-2 hover:border-clr-primary-1"
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
            {session?.user && (
              <li className="my-0 mx-[0.5rem]">
                <Link
                  href={"/checkout"}
                  className="text-[1rem] text-clr-grey-3 capitalize tracking-[0.1rem] p-[0.5rem] hover:border-b-2 hover:border-clr-primary-1"
                >
                  checkout
                </Link>
              </li>
            )}
          </ul>

          <CartButtons />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
