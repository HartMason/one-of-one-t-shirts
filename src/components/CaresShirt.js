import React from "react";
import "./caresshirt.css";
import tshirtCares from "../image/tshirtCares.jpg"


const PugShirt = () => {
  return (
    <div className="bodyCaresShirt">
      <img className="buyCaresShirt" src={tshirtCares} alt="cares" />
      <p className="buyPug">No One Cares Shirt</p>
      <h4>$20.00</h4>
    </div>
  );
};

export default PugShirt;
