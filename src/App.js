import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";
// import Cart from "./components/Cart";
import Single from "./components/Single";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product data={data} />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </>
  );
}
