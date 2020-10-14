import React from "react";
import styled from "styled-components";
import Posts from "../components/Posts/Posts/Posts";
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
      <div className="content">
        <Stories />
        <Posts />
      </div>

      <div className="sidebar">
        <div>profile</div>
        <div>suggestions</div>
      </div>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;

  justify-content: space-between;

  .content {
    flex-basis: 61%;
    max-width: 61%;
  }
`;
