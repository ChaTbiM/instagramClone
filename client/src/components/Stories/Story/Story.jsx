import React from "react";
import ProfilePicture from "../../Profile/ProfilePicture/ProfilePicture";
import { StyledStory } from "./StyledStory";

function Story({ name, avatar, isStory }) {
  let shortName = name.length > 10 ? `${name.substring(0, 10)}...` : name;
  return (
    <StyledStory>
      <ProfilePicture url={avatar} size="large" isStory={isStory && true} />
      <p className="person__name">{shortName}</p>
    </StyledStory>
  );
}

export default Story;
