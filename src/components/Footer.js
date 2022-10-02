import React from "react";
import "./footer.css";

import Instagram from "../image/Instagram.png";
import twitter from "../image/twitter.png"

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footerHeader">FOOTER</h1>
      <img src={Instagram} alt="instagram" width="50px"></img>
      <img src={twitter} alt="instagram" width="50px"></img>
    </div>
  );
};

export default Footer;
