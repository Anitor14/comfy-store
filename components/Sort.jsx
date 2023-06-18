import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  console.log(`this is the grid view ${grid_view}`);

  return (
    <section className="grid max-sm:gap-y-[0.75rem] gap-x-[2rem] mb-[2rem] max-sm:grid-cols-[1fr] grid-cols-[auto,auto,1fr,auto] items-center">
      <div className="w-[50px] grid grid-cols-[1fr,1fr] gap-x-[0.5rem]">
        <button
          className={`${
            grid_view ? "bg-clr-black text-[white]" : ""
          } bg-transparent border-b border-solid border-clr-black text-clr-black w-[1.5rem] rounded-[0.25rem] h-[1.5rem] flex items-center justify-center cursor-pointer`}
          onClick={setGridView}
        >
          <BsFillGridFill className="text-[1rem]" />
        </button>
        <button
          className={`${
            !grid_view ? "bg-clr-black text-clr-white" : ""
          } bg-transparent border-b border-solid border-clr-black text-clr-black w-[1.5rem] rounded-[0.25rem] h-[1.5rem] flex items-center justify-center cursor-pointer`}
          onClick={setListView}
        >
          <BsList className="text-[1rem]" />
        </button>
      </div>
      <p className="capitalize  mb-0"> {products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort" className="inline-block mr-[0.5rem]">
          sort by
        </label>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={updateSort}
          className="border-transparent text-[1rem] capitalize py-[0.25rem] px-[0.5rem]"
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;
