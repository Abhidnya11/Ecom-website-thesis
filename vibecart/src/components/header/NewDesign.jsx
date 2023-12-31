import React from "react";
import ProductCard from "../product/ProductCard";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewDesign = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidestoShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div id="Newdesign" className="flex justify-center">
        <div className=" max-w-[1441px] pb-[10rem] px-4 bg-white">
          <div className="flex justify-between">
            <h1 className="text-2xl md:text-4xl mb-4">Trending</h1>
            <div className="flex justify-end">
              <h3 className="text-xs md:text-sm w-[50%] ">
                Exceptional designs, handpicked for the extraordinary—experience
                our unique collection.
                <a
                  className="flex items-center gap-1 underline text-orange-600 text-xs md:text-sm"
                  href="http://localhost:3001/"
                >
                  Full collection <BsBoxArrowUpRight size={12} />
                </a>
              </h3>
            </div>
          </div>

          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDesign;
