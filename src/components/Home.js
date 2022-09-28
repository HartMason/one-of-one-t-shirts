import React from "react";
import "./Home.css";
import tShirtCat from "../image/tShirtCat.jpg";
import backGround from "../image/backGround.jpg";
import Footer from "./Footer";
import Login from "../containers/Login";
import TransitionsModal from "./TransitionsModal";



const Home = () => {
  return (
    <div className="homeContainer"
    style={{
      backgroundImage: `url(${backGround})`,
      // position: "fixed",
      minWidth: "100%",
      backgroundSize: "contain",
      // backgroundSize: 'cover',
      backgroundRepeat: "no-repeat",
      // minHeight: "100%",
    }}>
      
     
      <h1 className="title">One of One T-Shirts</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <img className="onSaleTShirt" src={tShirtCat} alt="horse" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Footer />
    </div>
  );
};

export default Home;
