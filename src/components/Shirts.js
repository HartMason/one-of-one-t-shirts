import "./shirts.css";
import midWest from "../image/midWest.jpg";
import React, { useEffect, useState } from "react";
import Shirt from "./Shirt";

const Shirts = () => {
  const [shirts, setShirts] = useState([]);
  const fetchData = async () => {
    return await fetch("https://one-of-one-t-shirts.vercel.app/shirts/")
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA DATA", data);
        setShirts(data);
      })
      .catch((error) => console.error("error fetching shirts", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      {/* <div>
        <h1 className="tshirtHeader">T-SHIRTS</h1>
        <div className="shirtDisplay">
          <Link to="/shirt">
            <img className="onSaleTShirt" src={tShirtCat} alt="horse" />
          </Link>
          <Link to="/shirt">
            <img className="cares" src={tshirtCares} alt="cares" />
          </Link>
          <Link to="/shirt">
            <img className="pug" src={pug} alt="horse" />
          </Link>
        </div> */}

      <ul>
        {shirts.map((shirt) => (
          <li>
            <Shirt shirt={shirt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shirts;
