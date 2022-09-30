import React, { useState, useEffect }from "react";
import tShirtCat from "../image/tShirtCat.jpg";
import nightSky from "../image/nightSky.jpg";
import Footer from "./Footer";
import tshirtCares from "../image/tshirtCares.jpg";
import pug from "../image/pug.webp";
import "./shirts.css";


const Shirts = () => {
  const [shirtId, fetchShirtId] = useState([])

  const getData = () => {
    fetch('http://localhost:4001/shirts/')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchShirtId(res)
      })
  }
  useEffect(() => {
    getData()
  }, [])

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
        <ul>
          {shirtId.map((item, i) => {
            return <li key={i}>{item.shirt_id}</li> 
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Shirts;
