import React from "react";
import styled from "styled-components";

export default function Profile({ closeModal }) {
  // setTimeout(() => {
  //   closeModal();
  // }, 4000);
  return (
    <StyledProfileModal className="unique">profile modal</StyledProfileModal>
  );
}

const StyledProfileModal = styled.div`
  font-size: 30px;
  position: absolute;
  top: 300px;
`;
