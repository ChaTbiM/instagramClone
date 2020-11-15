import React from "react";
import styled from "styled-components";

function AppLoader() {
  return (
    <Container>
      <p>🖐</p>
      <p>🖐🖐🖐</p>
      <p>🖐</p>
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
  p {
    font-size: 100px;
  }
`;

export default AppLoader;
