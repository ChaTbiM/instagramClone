import React from "react";
import { StoryContainer } from "./style";

function Story() {
  const profileImage = require("../../../assets/profile.jpg");
  return (
    <StoryContainer>
      <img src={profileImage} alt="story image" className="story__image" />
      <p className="person__name">name...</p>
    </StoryContainer>
  );
}

export default Story;
