import styled from "styled-components";

const StyledProfileModal = styled.div`
  background-color: white;
  position: fixed;
  top: ${(props) => props.top}px;
  border-radius: 7px;
  border: solid 1px #eee;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);

  right: 0;
  @media screen and (min-width: 940px) {
    right: calc(5px + (184 - 5) * ((100vw - 940px) / (1366 - 940)));
  }

  z-index: 100;
  min-width: 230px;
  .list {
    display: flex;
    flex-direction: column;
    color: black;
  }

  .list__item {
    padding: 0.8rem 1rem;
    text-decoration: none;
    color: black;
    font-size: 1em;
  }

  .list__item__icon {
    font-size: 16px;
    width: 16px;
    height: 16px;

    margin-right: 1rem;
    color: grey;
    vertical-align: bottom;
  }

  .list__item__text {
    line-height: 1rem;
    // font-size: 18px;
  }

  hr {
    color: #d3d3d3;
    width: 100%;
  }

  // position: relative;
`;

export default StyledProfileModal;
