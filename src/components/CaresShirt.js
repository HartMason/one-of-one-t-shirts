import React from "react";
import "./caresshirt.css";
import tshirtCares from "../image/tshirtCares.jpg"


const PugShirt = () => {
  return (
    <div className="bodyCaresShirt">
      <img className="buyCares" src={tshirtCares} alt="cares" />
      <p className="buyCaresShirt">No One Cares Shirt</p>
      <h4>$20.00</h4>
    </div>
  );
};

export default PugShirt;
