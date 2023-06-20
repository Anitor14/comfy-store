"use client";
import React, { useState } from "react";

const ProductImages = ({ images = [[]] }) => {
  console.log(images);
  const [main, setMain] = useState(images[0]);
  return (
    <section>
      <img
        src={main.url}
        alt=""
        className="w-full max-sm:h-[300px] h-[600px] md:h-[500px] object-cover block rounded-[0.25rem]"
      />
      <div className="mt-[1rem] grid grid-cols-[repeat(5,1fr)] gap-x-[1rem] mb-[2rem]">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt=""
              key={index}
              className={`${
                image.url === main.url
                  ? "border-2 border-solid border-clr-primary-5 opacity-[1]"
                  : ""
              } h-[100px] max-sm:h-[50px] md:h-[75px] cursor-pointer w-full object-cover rounded-[0.25rem] opacity-[0.5] block`}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
