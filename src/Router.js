import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Icons from "./components/Icons";
import Shirts from "./components/Shirts";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/icons" element={<Icons/>} />
      <Route path="/shirts" element={<Shirts/>} />
    </Routes>
  );
};

export default Router;
