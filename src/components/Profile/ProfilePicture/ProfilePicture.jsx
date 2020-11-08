import React from "react";
import { StyledProfilePicture } from "./StyledProfilePicture";

const ProfilePicture = React.forwardRef((props, ref) => {
  const profileImage = require("../../../assets/profile.jpg");

  const { size, isStory, isActive } = props;
  let width, outerMargin;

  if (size === "small") {
    width = 22;
  } else if (size === "medium") {
    width = 32;
  } else if (size === "large") {
    width = 52;
  } else if (size === "extraLarge") {
    width = 150;
  }

  // if (isActive) {
  outerMargin = 6;
  if (isStory) {
    outerMargin = 8;
  }

  // List of widths
  //   small 22
  //   medium 32
  //   large 56
  //   extraLarge 150

  return (
    <StyledProfilePicture
      isActive
      isStory
      outerMargin={outerMargin}
      width={width}
    >
      <img
        ref={ref}
        src={profileImage}
        alt="story"
        className={isStory || isActive ? "picture picture__inside" : "picture"}
      />
      {isActive && <div className="active__wrapper"></div>}
      {isStory && <div className="story__wrapper"></div>}
    </StyledProfilePicture>
  );
});

export default ProfilePicture;
