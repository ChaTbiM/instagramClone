import React from "react";
import ProfilePicture from "../../Profile/ProfilePicture/ProfilePicture";
import { StyledSuggestion } from "./StyledSuggestion";

function Suggestion() {
  return (
    <StyledSuggestion>
      <ProfilePicture size="medium" />
      <div className="suggested__profiles">
        <p className="suggested__profiles__name">name</p>
        <p className="suggested__profiles__new">new to instagram</p>
      </div>
      <p className="follow">follow</p>
    </StyledSuggestion>
  );
}

export default Suggestion;
