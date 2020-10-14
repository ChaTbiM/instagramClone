import React from "react";
import { ProfilePictureContainer } from "./style";

function ProfilePicture(props) {
  const profileImage = require("../../../assets/profile.jpg");

  const width = props.width === "small" ? "42px" : "66px";

  return (
    <ProfilePictureContainer width={width}>
      <img src={profileImage} alt="story" className="picture" />
    </ProfilePictureContainer>
  );
}

export default ProfilePicture;
