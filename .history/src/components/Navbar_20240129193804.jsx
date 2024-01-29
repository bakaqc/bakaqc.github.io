import React from "react";
import logo from "../assets/logo.svg";
import avt from "../assets/avt.svg";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[85%] w-full h-[80px]"
          />
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>PlatForm</li>
          </ul>
        </div>
        <div className="flex items-center">
          <h2 className="hidden md:block">Quoc Chuong</h2>
          <div className="flex items-center">
            <img src={avt} alt="Logo" className="w-10 h-10 rounded-full" />
          </div>
          {/* <img
            src={avt}
            alt="avatar"
            className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[85%] w-full h-[80px]"
            style={{ borderRadius: "100%" }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
