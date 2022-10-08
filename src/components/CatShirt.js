import React from "react";
import "./catshirt.css";
import tShirtCat from "../image/tShirtCat.jpg"

const CatShirt = () => {
  return (
    <div className="bodyCatShirt">
      <img className="buyShirtCat" src={tShirtCat} alt="cat" />
      <p className="buyCat">CatShirt</p>
    </div>
  );
};

export default CatShirt;
