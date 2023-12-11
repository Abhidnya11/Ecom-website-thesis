import React from "react";
// import Product from "../product/Product";

const NewDesign = () => {
  return (
    <div id="Newdesign" className="container   mx-auto">
      <h1 className="text-3xl mt-40 mb-6 px-4">New Designs</h1>
      <div className="grid grid-cols-4 gap-8">
        <div className="px-4">
          <div className="h-80 w-full border-2">
            <img
              className="h-full"
              src="https://p.turbosquid.com/ts-thumb/0m/Vhquk5/pYTTZ54n/untitled.487/jpg/1539942232/600x600/fit_q87/12e2505872b72f22c40812f08e28cf6200d767bc/untitled.487.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-between">
            <h4>Hello</h4>
            <h4>Hello</h4>
          </div>
          <h4>40 euro</h4>
          <button className="w-full bg-slate-600 mt-4 py-2 border rounded-lg">
            Add to cart
          </button>
        </div>
        <div className="px-4">
          <div className="h-80 w-full border-2">
            <img src="" alt="" />
          </div>
          <div className="flex justify-between">
            <h4>Hello</h4>
            <h4>Hello</h4>
          </div>
          <h4>40 euro</h4>
          <button className="w-full bg-slate-600 mt-4 py-2 border rounded-lg">
            Add to cart
          </button>
        </div>
        <div className="px-4">
          <div className="h-80 w-full border-2">
            <img src="" alt="" />
          </div>
          <div className="flex justify-between">
            <h4>Hello</h4>
            <h4>Hello</h4>
          </div>
          <h4>40 euro</h4>
          <button className="w-full bg-slate-600 mt-4 py-2 border rounded-lg">
            Add to cart
          </button>
        </div>
        <div className="px-4">
          <div className="h-80 w-full border-2">
            <img src="" alt="" />
          </div>
          <div className="flex justify-between">
            <h4>Hello</h4>
            <h4>Hello</h4>
          </div>
          <h4>40 euro</h4>
          <button className="w-full bg-slate-600 mt-4 py-2 border rounded-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewDesign;
