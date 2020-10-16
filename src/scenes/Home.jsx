import React from "react";
import styled from "styled-components";
import MainMenu from "../components/Navigations/MainMenu/MainMenu";
import Posts from "../components/Posts/Posts/Posts";
import SideBar from "../components/SideBar/SideBar";
import Stories from "../components/Stories/Stories/Stories";

function Home() {
  return (
    <HomeContainer>
      {/* // left
    //  - stories
    //  - posts 
    // right
    // - profile
    // - suggestions */}
      {/* <MainMenu /> */}
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
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 6.4rem;

  .content {
    flex-basis: 61%;
    max-width: 61%;
  }

  .sidebar {
    flex-basis: 30%;
    max-width: 30%;
    margin-top: 1rem;
  }
`;
