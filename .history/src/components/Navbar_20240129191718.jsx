import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex item-center">
          <img
            src={logo}
            alt="logo"
            className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[85%] w-full h-[80px]"
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
