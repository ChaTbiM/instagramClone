import React from "react";
import Story from "../Story/Story";
import { StyledStories } from "./StyledStories";

function Stories() {
  const temp = Array.from(Array(15).keys());

  const renderStories = () => {
    return temp.map(() => {
      return <Story />;
    });
  };

  return <StyledStories>{renderStories()}</StyledStories>;
}

export default Stories;
