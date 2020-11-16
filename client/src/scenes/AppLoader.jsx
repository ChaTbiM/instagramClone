import React from "react";
import styled from "styled-components";

function AppLoader() {
  return (
    <Container>
      <span role="img" aria-label="jsx-a11y/accessible-emoji">
        🖐
      </span>
      <span role="img" aria-label="jsx-a11y/accessible-emoji">
        🖐🖐🖐
      </span>
      <span role="img" aria-label="jsx-a11y/accessible-emoji">
        🖐
      </span>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999999999999999999999999999;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    font-size: 100px;
  }
`;

export default AppLoader;
