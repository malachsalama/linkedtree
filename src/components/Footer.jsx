import React from "react";
import zuri from "../assets/Zuri__Internship__Logo.svg";
import ingressive from "../assets/I4G.svg";

const Footer = () => (
  <div className="footer">
    <img src={zuri} id="zuri__logo" alt="zuri logo" />
    <p>HNG Internship 9 Frontend Task</p>
    <img src={ingressive} id="ingressive__logo" alt="ingressive logo" />
  </div>
);

export default Footer;
