import React from "react";

const Contact = () => {
  return (
    <section className="w-full sm:px-[80px] px-6 flex justify-center items-center py-[5rem]">
      <div className="xl:max-w-[1280px] w-full py-[5rem]">
        <h3 className="text-normal font-[700]">
          Join our newsletter and get 20% off
        </h3>
        <div className=" md:grid md:grid-cols-2 md:gap-8 md:items-center md:mt-8">
          <p className="leading-[2] max-w-[45em] text-clr-grey-5 md:mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
