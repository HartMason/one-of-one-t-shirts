import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Shirts from "./components/Shirts";
import Shirt from "./components/Shirt";
import SignUp from "./components/SignUp"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shirt" element={<Shirt />} />
      <Route path="/shirts" element={<Shirts />} />
      <Route path="/sign-up" element={<SignUp/>} />
    </Routes>
  );
};

export default Router;
