import React from "react";
import { Story } from "./style";

function StoryListItem() {
  const profileImage = require("../../../assets/profile.jpg");
  return (
    <Story>
      <img src={profileImage} alt="story image" className="story__image" />
      <p className="person__name">name...</p>
    </Story>
  );
}

export default StoryListItem;
