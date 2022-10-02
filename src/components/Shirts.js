import React, { useState, useEffect } from "react";
import tShirtCat from "../image/tShirtCat.jpg";
import tshirtCares from "../image/tshirtCares.jpg";
import pug from "../image/pug.webp";
import "./shirts.css";
import { Link } from "react-router-dom";

const Shirts = () => {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4001/shirts/')
      .then(res => {
        return response.json()
    })
    .then(shirt_name => setShirts(Shirts))
  }, [])



  // const getData = () => {
  //   fetch("http://localhost:4001/shirts/")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       fetchShirtId(res);
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="shirtsContainer">
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
      <div className="shirtDescription">{setShirts.map((shirt, index) => {
        return <li key={index}>{shirt.shirt_name}</li>
      })}
      </div>
    </div>
  );
};

export default Shirts;
