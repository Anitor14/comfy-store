import React from "react";
import { formatPrice } from "../utils/helpers";
import Link from "next/link";

const ListView = ({ products }) => {
  return (
    <section className="grid gap-y-[3rem]">
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article
            key={id}
            className="md:grid md:grid-cols-[auto,1fr] md:gap-x-[2rem] md:items-center "
          >
            <img
              src={image}
              alt={name}
              className="block w-[300px] h-[200px] object-cover rounded-[0.25rem] mb-[1rem]"
            />
            <div>
              <h4 className="mb-[0.5rem] font-[700]">{name}</h4>
              <h5 className="text-clr-primary-6 mb-[0.75rem] font-[700]">
                {formatPrice(price)}
              </h5>
              <p className="max-w-[45em] mb-[1rem]">
                {description.substring(0, 150)}...
              </p>
              <Link
                href={`/products/${id}`}
                className="btn text-[0.5rem] py-[0.25rem] px-[0.5rem]"
              >
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
