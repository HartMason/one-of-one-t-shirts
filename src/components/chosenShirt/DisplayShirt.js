import React from "react";
import "./DisplayShirt.css";
import OpenModal from "./OpenModal";
import FetchShirts from "../FetchShirts";


const DisplayShirt = () => {
  return (
    <div className="displayShirtBackground">
      <OpenModal />
      <FetchShirts />
    </div>
  );
};

export default DisplayShirt;
