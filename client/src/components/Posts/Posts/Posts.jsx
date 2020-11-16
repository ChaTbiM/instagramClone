import React from "react";
import { StyledPosts } from "./StyledPosts";
import Post from "../Post/Post";

function Posts({ posts }) {
  const { data, isError, isLoading } = posts;

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
  return (
    <StyledPosts>
      {/* {pageLoading && <ProgressBar />} */}
      {renderPosts()}
    </StyledPosts>
  );
}

export default Posts;
