import React from "react";
import tShirtCat from "../image/tShirtCat.jpg";

const Shirts = () => {
  return (
    <div className="shirtsContainer">
      <img className="onSaleTShirt" src={tShirtCat} alt="horse" />
    </div>
  );
};

export default Shirts;
