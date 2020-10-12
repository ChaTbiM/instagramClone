import styled from "styled-components";

const MainMenuContainer = styled.nav`
  max-width: 1000px;
  margin: 0 auto;
  background-color: white;

  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 0 2rem;
    margin: 1rem 0;
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

export { MainMenuContainer };
