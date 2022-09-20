import React from "react";
import "./Home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <h1>One of One T-Shirts</h1>
      <Footer/>
    </div>
  );
};

export default Home;
