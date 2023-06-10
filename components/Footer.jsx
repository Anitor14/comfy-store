import React from "react";

const Footer = () => {
  return (
    <footer className="h-[5rem] flex flex-col sm:flex-row justify-center items-center bg-clr-black">
      <h5 className="text-clr-white m-[0.1rem] font-[400] text-normal leading-[1.25]">
        &copy; {new Date().getFullYear()}
        <span className="text-clr-primary-5 ">ComfySloth</span>
      </h5>
      <h5 className="text-clr-white m-[0.1rem] font-[400] text-normal leading-[1.25]">
        All rights reserved
      </h5>
    </footer>
  );
};

export default Footer;
