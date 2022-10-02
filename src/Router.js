import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

import Shirts from "./components/Shirts";
import DisplayShirt from "./components/chosenShirt/DisplayShirt";
import ProtectedRoutes from "./components/ProtectedRoutes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/shirtss" element={<Shirts />} />
      <Route path="/displayShirts" element={<DisplayShirt />} />
    </Routes>
  );
};

export default Router;
