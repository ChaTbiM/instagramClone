import React from "react";
import ProfilePicture from "../../Profile/ProfilePicture/ProfilePicture";
import Post from "../Post/Post";
import { PostsContainer } from "./style";

function Posts() {
  const temp = Array.from(Array(15).keys());

  const renderPosts = () => {
    return temp.map(() => {
      return <Post />;
    });
  };

  return <PostsContainer>{renderPosts()}</PostsContainer>;
}

export default Posts;
