import React from "react";
import "./pugshirt.css";
import pug from "../image/pug.webp"


const PugShirt = () => {
  return (
    <div className="bodyPugShirt">
      <img className="buyShirtPug" src={pug} alt="pug" />
      <p className="buyPug">PugShirt</p>
      <h4>$20.00</h4>
    </div>
  );
};

export default PugShirt;
