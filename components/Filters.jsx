"use client";
import React, { useEffect, useContext, useReducer } from "react";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <section className="">
      <div className="md:sticky md:top-[1rem]">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="mb-[1.25rem]">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="search"
              onChange={updateFilters}
              className="p-[0.5rem] bg-clr-grey-10 border-transparent rounded-[0.25rem] leading-[0.1rem] placeholder:capitalize"
            />
          </div>
          {/* end of search input */}
          {/* category */}
          <div className="mb-[1.25rem]">
            <h5 className="mb-[0.5rem] font-[700]">category</h5>
            <div>
              {categories.map((c, index) => {
                console.log(category === c.toLowerCase());
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    className={`${
                      category === c.toLowerCase() ? "border-clr-grey-5 " : ""
                    } block  my-[0.25em] mx-0 py-[0.25rem] px-0 capitalize bg-transparent border-solid border-b border-transparent  text-clr-grey-5 cursor-pointer `}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of category */}
          {/* company */}
          <div className="mb-[1.25rem]">
            <h5 className="mb-[0.5rem] font-[700]">Company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="bg-clr-grey-10 rounded-[0.25rem] border-transparent p-[0.25rem]"
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of company */}
          {/* colors */}
          <div className="mb-[1.25rem]">
            <h5 className="mb-[0.5rem] font-[700]">colors</h5>
            <div className="flex items-center">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`
                      ${
                        color === "all"
                          ? " opacity-[1] border-clr-grey-5 bg-[red]"
                          : ""
                      } flex items-center justify-center my-[0.25em] py-[0.25rem] px-0 mx-0 mr-[0.5rem] capitalize bg-transparent border-solid border-b border-transparent text-clr-grey-5 cursor-pointer  opacity-[0.5]`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    onClick={updateFilters}
                    data-color={c}
                    className={`${
                      color === c ? "opacity-[1]" : ""
                    }  w-[1rem] h-[1rem] rounded-full bg-[#222] mr-[0.5rem] border-none cursor-pointer opacity-[0.5] flex items-center justify-center `}
                  >
                    {color === c && (
                      <FaCheck className="text-[0.5rem] text-clr-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          {/* price */}
          <div className="mb-[1.25rem]">
            <h5 className="mb-[0.5rem] font-[700]">price</h5>
            <p className="mb-[0.25rem]">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className="mb-[1.25rem] grid items-center capitalize gap-[0.5rem] text-[1rem] grid-cols-[auto,1fr]">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          {/* end of shipping */}
          {/* clear button */}
          <button
            type="button"
            className="bg-clr-red-dark text-clr-white py-[0.25rem] px-[0.5rem] rounded-[0.25rem]"
            onClick={clearFilters}
          >
            clear filters
          </button>
        </form>
      </div>
    </section>
  );
};

export default Filters;
