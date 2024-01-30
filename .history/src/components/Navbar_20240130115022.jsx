import React, { useState } from "react";
import avt from "../assets/avt.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [toggle, setToggel] = useState(false);

  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <img
            src={avt}
            alt="Logo"
            className="sm:ml-10 ss:ml-10 md:ml-3 w-20 h-20 m-4 rounded-full"
          />
          <h2 className="md:block font-bold text-xl">Quoc Chuong</h2>
        </div>

        <div className="flex items-center">
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>PlatForm</li>
          </ul>
        </div>

        <div className="md:hidden">
          <img
            src={menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-10"
          />
        </div>
      </div>
      <ul
        className={
          !toggle ? "absolute bg-white w-full px-8 md:hidden" : "hidden"
        }
      >
        <li>Home</li>
        <li>About</li>
        <li>Support</li>
        <li>PlatForm</li>
        <div className="flex flex-col my-4">
          <button className="px-8 py-3"> Contact With Me</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
