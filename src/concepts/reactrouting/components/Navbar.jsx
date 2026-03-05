import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-linear-to-r from-pink-400 to-gray-800 w-screen h-19.5 flex justify-around text-white">
      <div className="text-2xl font-bold font-sans w-[15%] h-full flex items-center justify-center">
        <Link to={"/"}>Logo</Link>
      </div>

      <ul className="w-[40%] h-full flex justify-around items-center">
        <li className="p-2 rounded-lg capitalize hover:bg-[#4C3260] cursor-pointer">
          <NavLink to={"/home"}>home</NavLink>
        </li>
        <li className="p-2 rounded-lg capitalize hover:bg-[#4C3260] cursor-pointer">
          <NavLink to={"/about"}>about</NavLink>
        </li>
        <li className="p-2 rounded-lg capitalize hover:bg-[#4C3260] cursor-pointer">
          <NavLink to={"/projects"}>projects</NavLink>
        </li>
        <li className="p-2 rounded-lg capitalize hover:bg-[#4C3260] cursor-pointer">
          <NavLink to={"/contact"}>contact</NavLink>
        </li>
      </ul>

      <div className="flex w-[10%] h-full items-center justify-center">
        <button className="font-bold px-3 py-2 rounded-lg bg-[#E43480] cursor-pointer">
          <Link to={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
