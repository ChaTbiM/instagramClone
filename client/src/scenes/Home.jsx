import React from "react";
import styled from "styled-components";
import Posts from "../components/Posts/Posts/Posts";
import SideBar from "../components/SideBar/SideBar";
import Stories from "../components/Stories/Stories/Stories";
import usePosts from "../hooks/usePosts";
import useUsers from "../hooks/useUsers";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import usePageLoading from "../hooks/usePageLoading";

function Home() {
  const users = useUsers();
  const posts = usePosts();
  const [pageLoading] = usePageLoading();

  return (
    <HomeContainer>
      {pageLoading && <ProgressBar />}
      <div className="content">
        <Stories users={users} />
        <Posts posts={posts} />
      </div>

      <div className="sidebar">
        <SideBar />
      </div>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  display: flex;
  justify-content: space-between;
  max-width: 940px;
  margin: 0 auto;

  .content {
    width: 615px;
  }

  .sidebar {
    width: 292px;
    margin-top: 24px;
  }

  @media screen and (max-width: 999px) {
    justify-content: center;

    .sidebar {
      display: none;
    }
  }

  @media screen and (max-width: 615px) {
    .content {
      width: 100%;
    }
  }
`;
