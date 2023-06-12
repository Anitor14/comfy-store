import React from "react";
import Link from "next/link";
import Product from "./Product";

const PageHero = ({ title, product }) => {
  return (
    <section className="w-full sm:px-[80px] px-6 flex justify-center items-center bg-clr-primary-10">
      <div className="xl:max-w-[1280px] w-full">
        <div className="min-h-[20vh] w-full flex items-center text-clr-primary-1 font-[700]">
          <h3>
            <Link
              href={"/"}
              className="text-clr-primary-3 p-[0.5rem] hover:text-clr-primary-1 transition-transform duration-300"
            >
              Home
            </Link>
            {product && (
              <Link
                href="/products"
                className="text-clr-primary-3 p-[0.5rem] hover:text-clr-primary-1 transition-transform duration-300"
              >
                / Products
              </Link>
            )}
            / {title}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
