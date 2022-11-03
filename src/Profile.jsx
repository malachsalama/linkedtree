import React from "react";
import profile from "./profile__img.svg";
import desktop from "./avatar__share__button.svg";
import mobile from "./dots__horizontal.svg";

const Profile = () => (
  <>
    <header className="App-header">
      <img src={profile} id="profile__img" alt="avatar" />
      <img src={desktop} id="avatar__share__button__desktop" alt="share" />
      <img src={mobile} id="avatar__share__button__mobile" alt="more" />
    </header>
    <p id="twitter">Malach Salama</p>
    <p id="slack" className="Hidden">
      Salama
    </p>
  </>
);

export default Profile;
