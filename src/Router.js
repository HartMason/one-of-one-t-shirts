import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Icons from "./components/Icons";
import Shirts from "./components/Shirts";
import DisplayShirt from "./components/DisplayShirt";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/icons" element={<Icons/>} />
      <Route path="/shirts" element={<Shirts/>} />
      <Route path="/displayShirt" element={<DisplayShirt/>} />
    </Routes>
  );
};

export default Router;
