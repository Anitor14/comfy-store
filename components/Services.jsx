"use client";
import React from "react";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <section className="w-full sm:px-[80px] px-6 flex justify-center items-center bg-clr-primary-10 py-[5rem] lg:py-0 ">
      <div className="xl:max-w-[1280px] w-full py-[5rem] translate-center">
        <article className="grid md:grid-cols-2 ">
          <h3 className="text-clr-primary-1 mb-[2rem] font-[700]">
            custom furniture <br /> built only for you.
          </h3>
          <p className>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </article>
        <div className="mt-[4rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-[2.5rem]">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article
                key={id}
                className="bg-clr-primary-7 px-[2.5rem] py-[2.5rem] rounded-[0.25rem] text-center"
              >
                <span className="w-[4rem] h-[4rem] grid mx-auto place-items-center mb-[1rem] rounded-full bg-clr-primary-10 text-clr-primary-1 text-[2rem]">
                  {icon}
                </span>
                <h4 className="text-clr-primary-1 font-[700]">{title}</h4>
                <p className="text-clr-primary-2">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
