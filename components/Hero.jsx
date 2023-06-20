import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full sm:px-[80px] px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <div className="min-h-[60vh] md:h-[calc(100vh-5rem)] grid md:grid-cols-2 place-content-center md:gap-[8rem]">
          <article>
            <h1 className="md:mb-[2rem] font-[700] leading-[50px]">
              design your <br /> comfort zone
            </h1>
            <p className="leading-[40px] max-w-[45em] mb-[2rem] text-clr-grey-5 font-[400] md:font-[1.25rem] text-[16px] md:text-[20px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </p>
            <Link
              href={"/products"}
              className="btn py-[0.75rem] px-[1.5rem] text-[1rem]"
            >
              shop now
            </Link>
          </article>
          <article className="hidden md:block relative img-container">
            <img
              src="/hero/hero-bcg.jpeg"
              alt="nice table"
              className="w-full h-[550px] relative rounded-[0.25rem] block object-contain"
            />
            <img
              src="/hero/hero-bcg-2.jpeg"
              alt="person working"
              className="absolute bottom-0 left-0 w-[250px] transform translate-x-[-50%] rounded-[0.25rem]"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;
