import React, { useEffect } from "react";
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
    return <span>Error Bro ! ....</span>;
  }

  const renderPosts = () => {
    return data.map((post, index) => {
      return <Post post={post} key={`post-${index}`} />;
    });
  };
  return <StyledPosts>{renderPosts()}</StyledPosts>;
}

export default Posts;
