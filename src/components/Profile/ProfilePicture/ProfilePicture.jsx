import React from "react";
import { StyledProfilePicture } from "./style";

function ProfilePicture(props) {
  const profileImage = require("../../../assets/profile.jpg");

  const width = props.width === "small" ? "42px" : "66px";

  return (
    <StyledProfilePicture width={width}>
      <img src={profileImage} alt="story" className="picture" />
    </StyledProfilePicture>
  );
}

export default ProfilePicture;
