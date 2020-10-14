import React from "react";
import Story from "../Story/Story";
import { StoriesContainer } from "./style";

function Stories() {
  const temp = Array.from(Array(15).keys());

  const renderStories = () => {
    return temp.map(() => {
      return <Story />;
    });
  };

  return <StoriesContainer>{renderStories()}</StoriesContainer>;
}

export default Stories;
