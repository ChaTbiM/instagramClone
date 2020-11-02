import React from "react";
import ProfilePicture from "../../Profile/ProfilePicture/ProfilePicture";
import { StyledStory } from "./StyledStory";

function Story({number}) {


  

  return (
    <StyledStory >
      <ProfilePicture size="large" isStory={true} />
  <p className="person__name">{number}</p>
    </StyledStory>
  );
}

export default Story;
