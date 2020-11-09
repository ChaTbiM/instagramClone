import styled from "styled-components";

const StyledProfileModal = styled.div`
  background-color: white;
  position: absolute;
  top: ${(props) => props.top}px;

  right: 0;
  @media screen and (min-width: 940px) {
    right: calc(5px + (184 - 5) * ((100vw - 940px) / (1366 - 940)));
  }

  z-index: 9999999;
  min-width: 230px;
  .list {
    display: flex;
    flex-direction: column;
    color: black;
  }

  .list__item {
    padding: 0.5rem 1rem;
  }

  hr {
    width: 100%;
  }
`;

export default StyledProfileModal;
