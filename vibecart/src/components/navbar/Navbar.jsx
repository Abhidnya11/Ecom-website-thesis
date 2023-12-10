import React from "react";
import { BsCart2 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
const Navbar = () => {
  return (
    <div id="navbar" className="border-b">
      <div className="flex items-center justify-between w-full mx-auto max-w-[1200px] border-b">
        <h2 className="text-2xl ">VibeCart</h2>
        <ul className="flex">
          <li className="px-3 hover:underline cursor-pointer">
            <div className="relative">
              <BsPerson size={24} />
            </div>
          </li>
          <li className="px-3 hover:underline cursor-pointer">
            <div className="relative">
              <BsCart2 size={22} />
            </div>
          </li>
        </ul>
      </div>
      <div className="py-3 ">
        <ul className="flex justify-center gap-8">
          <li>Shoes</li>
          <li>Hoodies</li>
          <li>Covers</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
