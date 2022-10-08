import "./shirts.css";
import midWest from "../image/midWest.jpg";
// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tShirtCat from "../image/tShirtCat.jpg"
import tshirtCares from "../image/tshirtCares.jpg"
import pug from "../image/pug.webp"

const Shirts = () => {
  // const [shirts, setShirts] = useState([]);
  // const fetchData = async () => {
  //   return await fetch("https://one-of-one-t-shirts.vercel.app/shirts/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("DATA DATA", data);
  //       setShirts(data);
  //     })
  //     .catch((error) => console.error("error fetching shirts", error));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

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
      }}>

      
        <p className="tshirtHeader">T-SHIRTS</p>
        <div className="shirtDisplay">
          <Link to="/cat-shirt" style={{textDecoration:"none"}}>
            <img className="shirtCat" src={tShirtCat} alt="cat" />
          <h3 className="catShirt">Cat Shirt</h3>
          </Link>
          <Link to="/cares-shirt" style={{textDecoration:"none"}}>
            <img className="cares" src={tshirtCares} alt="cares" />
          <h3 className="caresShirt">No One Cares Shirt</h3>
          </Link>
          <Link to="/pug-shirt" style={{textDecoration:"none"}}>
            <img className="pug" src={pug} alt="horse" />
          <h3 className="pugShirt">Pug Shirt</h3>
          </Link>
        </div>

      {/* <ul>
        {shirts.map((shirt) => (
          <li>
            <Shirt shirt={shirt} />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Shirts;
