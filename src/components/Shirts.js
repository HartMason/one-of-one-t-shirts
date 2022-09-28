import React from "react";
import tShirtCat from "../image/tShirtCat.jpg";
import nightSky from "../image/nightSky.jpg";
import Footer from "./Footer";
import tshirtCares from "../image/tshirtCares.jpg";
import pug from "../image/pug.webp";
import "./shirts.css";

const Shirts = () => {
  return (
    <div
      className="shirtsContainer"
      style={{
        backgroundImage: `url(${nightSky})`,
        // position: "fixed",
        minWidth: "100%",
        // backgroundSize: "contain",
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        // minHeight: "100%",
      }}
    >
      <h1>T-SHIRTS</h1>
      <div className="shirtDisplay">
        <img className="onSaleTShirt" src={tShirtCat} alt="horse" />
        <img className="cares" src={tshirtCares} alt="cares" />
        <img className="pug" src={pug} alt="horse" />
      </div>
      <div className="shirtDescription">
        <h1>Cat Shirt: Original</h1>
        <h1>Cat Shirt: Original</h1>
        <h1>Cat Shirt: Original</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Shirts;
