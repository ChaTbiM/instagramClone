import React from "react";
import Post from "../Post/Post";
import { StyledPosts } from "./StyledPosts";

function Posts() {
  const temp = Array.from(Array(15).keys());

  const renderPosts = () => {
    return temp.map((element,index) => {
      return <Post key={`post-${index}`} />;
    });
  };

  return <StyledPosts>{renderPosts()}</StyledPosts>;
}

export default Posts;
