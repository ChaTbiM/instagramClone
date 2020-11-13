import React from "react";
import usePosts from "../../../hooks/usePosts";
import Post from "../Post/Post";
import { StyledPosts } from "./StyledPosts";

function Posts() {
  const { data, isError, isLoading } = usePosts();
  // const temp = Array.from(Array(15).keys());

  if (isLoading) {
    return <span>Loading ....</span>;
  }

  if (isError) {
    return (
      <span>
        server is not available right now ! , please try it in your local
        development environment
      </span>
    );
  }

  const renderPosts = () => {
    return data.map((post, index) => {
      return <Post post={post} key={`post-${index}`} />;
    });
  };
  return <StyledPosts>{renderPosts()}</StyledPosts>;
}

export default Posts;
