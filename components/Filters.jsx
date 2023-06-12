"use client";
import React, { useEffect, useContext, useReducer } from "react";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: { max_price },
  } = useFilterContext();
  return <div className="bg-[red]">{max_price}</div>;
};

export default Filters;
