import React from "react";
import "./DisplayShirt.css";
import OpenModal from "./OpenModal";
import "./DisplayShirt.css";
import FetchShirts from "../FetchShirts";

const DisplayShirt = () => {
  return (
    <div className="displayShirt">
      <OpenModal />
      <FetchShirts />
    </div>
  );
};

export default DisplayShirt;
