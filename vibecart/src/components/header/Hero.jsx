import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Main from "../assets/Hero-1.jpg";
const Hero = () => {
  return (
    <>
      <div id="hero" className="flex justify-between container mx-auto ">
        <img className="w-screen h-4/5 " src={Main} alt="" />
        <div
          id="overlay"
          className="absolute bottom-0 bg-sky-500/0 p-8 text-gray-800 mb-8"
        >
          <div
            id="over1"
            className="flex items-center justify-between pb-5 border-b-2 border-orange-600 w-[76vw]  "
          >
            <h1 className="text-3xl font-hairline">
              Prompt and Design with AI <br />
              <span className="text-xl">
                Write a prompt of design and add it to your hoodie
              </span>
            </h1>
            <h2 className="text-xl py-4 px-4 rounded-full border-2 border-orange-600">
              01
            </h2>
          </div>
          <div id="over2" className="flex items-center justify-between p-1vw">
            <span></span>
            <NavLink to={"/singleproduct/:id"}>
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg mt-2  hover:bg-orange-600  hover:text-white bg-white text-orange-600">
                Explore <BsArrowRight />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
