import React from "react";
import { StyledProfilePicture } from "./StyledProfilePicture";

function ProfilePicture(props) {
  const profileImage = require("../../../assets/profile.jpg");

  const { size, isStory } = props;
  let width;

  if (size === "small") {
    width = "22px";
  } else if (size === "medium") {
    width = "32px";
  } else if (size === "large") {
    width = "52px";
  } else if (size === "extraLarge") {
    width = "150px";
  }

  const renderStory = () => {
    if (isStory) {
      return <div className="story__wrapper"></div>;
    }

    return null;
  };

  // List of widths
  //   small 22
  //   medium 32
  //   large 56
  //   extraLarge 150

  return (
    <StyledProfilePicture width={width}>
      <img
        src={profileImage}
        alt="story"
        className={isStory ? "picture picture__inside" : "picture"}
      />
      {renderStory()}
    </StyledProfilePicture>
  );
}

export default ProfilePicture;
