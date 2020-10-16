import React from "react";
import { StyledStory } from "./StyledStory";

function Story() {
  const profileImage = require("../../../assets/profile.jpg");
  return (
    <StyledStory>
      <img src={profileImage} alt="story" className="story__image" />
      <p className="person__name">name...</p>
    </StyledStory>
  );
}

export default Story;
