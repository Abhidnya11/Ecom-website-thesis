import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hoodies from "./pages/Hoodies";
import Shoes from "./pages/Shoes";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoodie" element={<Hoodies />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
