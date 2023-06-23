"use client";
import React from "react";
import { useProductsContext } from "../context/products_context";
import Link from "next/link";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  // we get the loading, error and featured_products.
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <section className="w-full sm:px-[80px] px-6 flex justify-center items-center bg-clr-grey-10">
      <div className="xl:max-w-[1280px] w-full py-[5rem]">
        <div className="text-center w-full">
          <h2 className="font-[700]">featured products</h2>
          <div className="underline"></div>
        </div>
        <div className="grid place-content-center  md:grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-[2.5rem] py-[3rem]  ">
          {featured.slice(0, 3).map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
        <div className="flex justify-center items-center">
          <Link
            href="/products"
            className="btn my-[0] mx-[auto]  text-center w-[148px]"
          >
            all products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
