import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Post from "../Post/Post";
import { StyledPosts } from "./StyledPosts";
import ProgressBar from "../../ProgressBar/ProgressBar";
function Posts({ posts }) {
  const { data, isError, isLoading, isInitialData, updatedAt } = posts;
  // const prevUpdatedAt = useRef(updatedAt);
  // const [pageLoading, setPageLoading] = useState(true);
  // useEffect(() => {
  //   if (updatedAt !== prevUpdatedAt.current || isInitialData) {
  //     // console.log("new data");
  //     setPageLoading(true);
  //     // queryCache.setQueryData("homeLoading", true);
  //   } else {
  //     setPageLoading(false);
  //     // queryCache.setQueryData("homeLoading", false);
  //     // console.log("old Data");
  //   }
  // }, [isInitialData, isLoading, updatedAt]);

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
