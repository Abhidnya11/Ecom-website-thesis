import React from "react";
import ProductCard from "../product/ProductCard";
import { BsBoxArrowUpRight } from "react-icons/bs";

const NewDesign = () => {
  return (
    <>
      <div id="Newdesign" className="flex justify-center">
        <div className=" max-w-[1441px] py-[10rem] px-4 bg-white">
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
    // <div id="Newdesign" className="container   mx-auto">
    //   <h1 className="text-3xl mt-40 mb-6 px-4">New Designs</h1>
    //   <div className="grid grid-cols-4 gap-8">
    //     <div className="px-4">
    //       <div className="h-80 w-full border-2">
    //         <img
    //           className="h-full"
    //           src="https://p.turbosquid.com/ts-thumb/0m/Vhquk5/pYTTZ54n/untitled.487/jpg/1539942232/600x600/fit_q87/12e2505872b72f22c40812f08e28cf6200d767bc/untitled.487.jpg"
    //           alt=""
    //         />
    //       </div>
    //       <div className="flex justify-between">
    //         <h4>Hello</h4>
    //         <h4>Hello</h4>
    //       </div>
    //       <h4>40 euro</h4>
    //       <button className="w-full bg-slate-600 mt-4 py-2 border rounded-lg">
    //         Add to cart
    //       </button>
    //     </div>
    //     <div className="px-4">
    //       <div className="h-80 w-full border-2">
    //         <img src="" alt="" />
    //       </div>
    //       <div className="flex justify-between">
    //         <h4>Hello</h4>
    //         <h4>Hello</h4>
    //       </div>
    //       <h4>40 euro</h4>
    //       <button className="w-full bg-slate-600 mt-4 py-2 border rounded-lg">
    //         Add to cart
    //       </button>
    //     </div>
    //     <div className="px-4">
    //       <div className="h-80 w-full border-2">
    //         <img src="" alt="" />
    //       </div>
    //       <div className="flex justify-between">
    //         <h4>Hello</h4>
    //         <h4>Hello</h4>
    //       </div>
    //       <h4>40 euro</h4>
    //       <button className="w-full bg-slate-600 mt-4 py-2 border rounded-lg">
    //         Add to cart
    //       </button>
    //     </div>
    //     <div className="px-4">
    //       <div className="h-80 w-full border-2">
    //         <img src="" alt="" />
    //       </div>
    //       <div className="flex justify-between">
    //         <h4>Hello</h4>
    //         <h4>Hello</h4>
    //       </div>
    //       <h4>40 euro</h4>
    //       <button className="w-full bg-slate-600 mt-4 py-2 border rounded-lg">
    //         Add to cart
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NewDesign;
