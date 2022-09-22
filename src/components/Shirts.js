import React from "react";
import tShirtCat from "../image/tShirtCat.jpg";
import aboutBackground from "../image/aboutBackground.jpg";
import Footer from "./Footer";

const Shirts = () => {
  return (
    <div className="shirtsContainer"
    style={{
      backgroundImage: `url(${aboutBackground})`,
      position: "fixed",
      minWidth: "100%",
      backgroundSize: "contain",
      // backgroundSize: 'cover',
      backgroundRepeat: "no-repeat",
      minHeight: "100%",
    }}
    >
      <img className="onSaleTShirt" src={tShirtCat} alt="horse" />
      <Footer />
    </div>
  );
};

export default Shirts;
