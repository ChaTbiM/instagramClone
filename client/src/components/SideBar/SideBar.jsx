import React from "react";
import ProfilePicture from "../Profile/ProfilePicture/ProfilePicture";
import Suggestions from "../Suggestions/Suggestions/Suggestions";
import { StyledSideBar } from "./StyledSideBar";

function SideBar() {
  return (
    <StyledSideBar>
      <div className="profile">
        <ProfilePicture size="large" />
        <div className="profile__text">
          <p className="profile__text__username">chatbim</p>
          <p className="profile__text__name">mustapha chatbi</p>
        </div>
        <a href="www.google.com" className="profile__switch">
          Switch
        </a>
      </div>
      <Suggestions />
    </StyledSideBar>
  );
}

export default SideBar;
