import styled from "styled-components";

const StyledMainMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: white;
  border-bottom: solid 1px #eee;
  z-index: 100;

  .list {
    margin: 1rem auto;

    max-width: 940px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .list__item {
    list-style: none;
  }

  .logo {
    width: 100px;
    height: 30px;
    font-size: 20px;
  }

  .list__icons__item {
    margin-left: 1.5rem;
    font-size: 1.5rem;
    color: gray;
  }

  .search__bar {
    position: relative;
  }

  .search__icon {
    position: absolute;
    left: 0.25rem;
    font-size: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .search {
    // width: 200px;
    padding: 0.25rem 0.25rem 0.25rem 1.5rem;
  }
`;

export { StyledMainMenu };
