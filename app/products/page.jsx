"use client";
import React from "react";
import PageHero from "../../components/PageHero";
import Filters from "../../components/Filters";
import Sort from "../../components/Sort";
import ProductList from "../../components/ProductList";

const Products = () => {
  return (
    <main>
      <PageHero title="products" />
      <section className="w-full sm:px-[80px] px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <div className="grid md:grid-cols-4 gap-y-12 gap-x-6 mx-auto my-16">
            <Filters />
            <div className="md:col-span-3">
              <Sort />
              <ProductList />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
