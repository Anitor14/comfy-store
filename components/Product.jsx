"use client";
import React from "react";
import { formatPrice } from "../utils/helpers";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Product = ({ image, name, price, id }) => {
  return (
    <div>
      <div className="relative bg-clr-black rounded-[0.25rem] container">
        <div className="h-[225px]">
          <img
            src={image}
            alt={name}
            className="w-[100%] h-[100%] object-cover rounded-[0.25rem]"
          />
        </div>
        <Link
          href={`/products/${id}`}
          className={
            "link absolute top-[50%] left-[50%]  bg-clr-primary-5 flex justify-center items-center w-[2.5rem] h-[2.5rem] rounded-full opacity-[0] cursor-pointer"
          }
        >
          <FaSearch className={"text-[1.25rem] text-clr-white"} />
        </Link>
      </div>
      <footer className="mt-[1rem] flex justify-between items-center">
        <h5 className="mb-0 font-[400]">{name}</h5>
        <p className="mb-0 font-[400]">{formatPrice(price)}</p>
      </footer>
    </div>
  );
};

export default Product;
