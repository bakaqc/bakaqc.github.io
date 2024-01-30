import React from "react";
import logo from "../assets/logo.svg";
import avt from "../assets/avt.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <img src={avt} alt="Logo" className="w-20 h-20 m-4 rounded-full" />
          <h2 className="hidden md:block font-bold text-x">Quoc Chuong</h2>
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
      <ul className="absolute bg-white w-full px-8 md:hidden">
        <li>Home</li>
        <li>About</li>
        <li>Support</li>
        <li>PlatForm</li>
        <div className="flex flex-col my-4">
          <h2 className="hidden md:block font-bold text-x">Quoc Chuong</h2>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
