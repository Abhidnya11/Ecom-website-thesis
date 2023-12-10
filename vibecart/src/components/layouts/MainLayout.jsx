import React from "react";
import Navbar from "../navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <div
        id="Mainlayout"
        className="min-w-[1050px] max-w-[1300px] mx-auto my-6"
      >
        <div className="">
          <Navbar></Navbar>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
