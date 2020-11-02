import React from "react";
import styled from "styled-components";
import Posts from "../components/Posts/Posts/Posts";
import SideBar from "../components/SideBar/SideBar";
import Stories from "../components/Stories/Stories/Stories";

function Home() {
  return (
    <HomeContainer>
      <div className="content">
        <Stories />
        <Posts />
      </div>

      <div className="sidebar">
        <SideBar />
      </div>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 940px;
  margin: 0 auto;
  padding-top: 6.4rem;


  .content {
    width: 65%;
  }

  .sidebar {
    width: 292px;
    margin-top: 1rem;
  }
`;
