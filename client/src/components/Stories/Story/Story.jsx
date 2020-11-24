import React from "react";
import ProfilePicture from "../../Profile/ProfilePicture/ProfilePicture";
import { StyledStory } from "./StyledStory";

function Story({ user, isStory }) {
  const { userName, avatar } = user;

  let shortName =
    userName.length > 10
      ? `${userName.substring(0, 10).toLowerCase()}...`
      : userName.toLowerCase();
  return (
    <StyledStory
      to={{
        pathname: `/stories/${userName.toLowerCase()}/${user.stories[0].id}`,
        state: { user, storyIndex: 0 },
      }}
    >
      <ProfilePicture url={avatar} size="large" isStory={isStory} />
      <p className="person__name">{shortName}</p>
    </StyledStory>
  );
}

export default Story;
