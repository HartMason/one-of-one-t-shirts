// import React, { useState, useEffect } from "react";
import tShirtCat from "../image/tShirtCat.jpg";
import tshirtCares from "../image/tshirtCares.jpg";
import pug from "../image/pug.webp";
import "./shirts.css";
import { Link } from "react-router-dom";
import midWest from "../image/midWest.jpg";
// import nightsky from "../image/NightSky.jpg";

const Shirts = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${midWest})`,
        maxWidth: "100%",
        height: "1000px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        margin: "0%",
      }}
    >
      <h1 className="tshirtHeader">T-SHIRTS</h1>
      <div className="shirtDisplay">
        <Link to="/displayShirts">
          <img className="onSaleTShirt" src={tShirtCat} alt="horse" />
        </Link>
        <Link to="/displayShirts">
          <img className="cares" src={tshirtCares} alt="cares" />
        </Link>
        <Link to="/displayshirts">
          <img className="pug" src={pug} alt="horse" />
        </Link>
      </div>
    </div>
  );
};

export default Shirts;
