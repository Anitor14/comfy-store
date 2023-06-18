import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <section>
      <div className="grid gap-y-[2rem] gap-x-[1.5rem] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)]">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default GridView;
