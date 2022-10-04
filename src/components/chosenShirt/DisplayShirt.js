import React from "react";
import "./DisplayShirt.css";
import OpenModal from "./OpenModal";
import FetchShirts from "../FetchShirts";
import midWest from "../../image/midWest.jpg"



const DisplayShirt = () => {
  return (
    <div style={{
      backgroundImage: `url(${midWest})`,
      maxWidth: "100%",
      height: "1000px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      margin: "0%",
    }}>
      <OpenModal />
      <FetchShirts />
    </div>
  );
};

export default DisplayShirt;
