import React from "react";
import ProfilePicture from "../Profile/ProfilePicture/ProfilePicture";
import Suggestions from "../Suggestions/Suggestions/Suggestions";
import { StyledSideBar } from "./StyledSideBar";

function SideBar() {
  return (
    <StyledSideBar>
      <ProfilePicture size="large" />
      <Suggestions />
    </StyledSideBar>
  );
}

export default SideBar;