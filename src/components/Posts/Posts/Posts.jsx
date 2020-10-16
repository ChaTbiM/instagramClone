import React from "react";
import Post from "../Post/Post";
import { StyledPosts } from "./style";

function Posts() {
  const temp = Array.from(Array(15).keys());

  const renderPosts = () => {
    return temp.map(() => {
      return <Post />;
    });
  };

  return <StyledPosts>{renderPosts()}</StyledPosts>;
}

export default Posts;
