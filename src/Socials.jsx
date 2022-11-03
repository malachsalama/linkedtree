import React from "react";
import slack from "./slack.png";
import github from "./github.svg";

const Socials = () => (
  <div className="socials">
    <img src={slack} id="slack" alt="slack" />
    <img src={github} id="github" alt="github" />
  </div>
);

export default Socials;
