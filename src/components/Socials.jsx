import React from "react";
import slack from "../assets/slack.png";
import github from "../assets/github.svg";

const Socials = () => (
  <div className="socials">
    <img src={slack} id="slack" alt="slack" />
    <img src={github} id="github" alt="github" />
  </div>
);

export default Socials;
