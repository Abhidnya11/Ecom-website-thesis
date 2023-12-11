import React from "react";
import { BsPerson } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        id="navbar"
        className="flex items-center justify-between py-10 px-20"
      >
        <NavLink to={"/"}>
          <h1 className="text-2xl ">VibeCart</h1>
        </NavLink>

        <div className="flex gap-20">
          <NavLink to={"/shoes"}>
            <h2>Shoes</h2>
          </NavLink>
          <NavLink to={"/hoodies"}>
            <h2>Hoodies</h2>
          </NavLink>
        </div>
        <div className="flex gap-10 items-center">
          <NavLink to={"/cart"}>
            <h2>
              <BsCart2 size={22} />
            </h2>
          </NavLink>
          <NavLink to={"/account"}>
            <button className="flex gap-1 border-2 rounded-lg py-1 px-2">
              <BsPerson size={22} /> Login
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
