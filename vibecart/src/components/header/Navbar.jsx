import React from "react";
import { BsPerson } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        id="navbar"
        className="container mx-auto flex items-center justify-between pt-4 pb-5 px-20 border-b border-gray-800"
      >
        <NavLink to={"/"}>
          <h1 className="text-2xl ">VibeCart</h1>
        </NavLink>

        <div className="flex gap-20">
          <NavLink to={"/shoes"}>
            <h2 className="hover:text-orange-600">Shoes</h2>
          </NavLink>
          <NavLink to={"/hoodies"}>
            <h2 className="hover:text-orange-600">Hoodies</h2>
          </NavLink>
        </div>
        <div className="flex gap-10 items-center">
          <NavLink to={"/cart"}>
            <h2 className="relative ">
              <BsCart2 className="h-9 w-6 flex-shrink-0 " size={22} />
              <span className="absolute flex item-center justify-center left-[12px] bottom-6 h-[18px] min-w-[18px] text-sm border border-orange-600 rounded-full">
                10
              </span>
            </h2>
          </NavLink>
          <NavLink to={"/account"}>
            <button className="flex gap-1 border-2 rounded-lg py-1 px-2 hover:bg-orange-600 hover:text-white">
              <BsPerson size={22} /> Login
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
