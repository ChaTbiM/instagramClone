import styled from "styled-components";

const StyledMainMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: white;
  border-bottom: solid 1px #eee;
  z-index: 100;
  padding: 0 1rem;

  .list {
    padding: 10.5px 0;
    margin: 0 auto;
    margin-top: 5px;

    position: relative;

    max-width: 940px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 700px) {
      margin: 0 0.5rem;
    }

    flex-wrap: wrap;
  }

  .list__item {
    list-style: none;
  }

  .logo {
    // width: 100px;
    height: 30px;
    font-size: 20px;
    text-align: center;
  }
  .list__icons {
    display: inline-flex;
    align-items: center;
    justify-content: flex-between;
    width: 200px;

    box-sizing: border-box;
  }
  .list__icons__item {
    margin-right: 20px;

    @media screen and (max-width: 380px) {
      margin-right: 10.5px;
    }
    width: 22px;
    height: 22px;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.8);
  }

  .search__bar {
    position: relative;
    @media screen and (max-width: 590px) {
      display: none;
    }
    vertical-align: middle;
  }

  .search__icon {
    position: absolute;
    left: 0.25rem;
    // font-size: 10px;
    width: 14px;
    top: 52%;
    transform: translateY(-50%);
    color: grey;
    vertical-align: bottom;
  }

  .search {
    font-size: 1em;
    padding: 0.1rem 0.1rem 0.1rem 1.5rem;
  }

  .clickable {
    cursor: pointer;
  }

  .arrow-up {
    position: absolute;
    right: 6.5px;
    bottom: -11px;
    // bottom: -13px;
    // width: 0;
    // height: 0;
    // border-left: 10px solid transparent;
    // border-right: 10px solid transparent;
    // border-bottom: 20px solid white;
    width: 18px;
    height: 18px;
    transform: rotate(45deg);
    background: white;
    box-shadow: 0 0 8px #d3d3d3;

    z-index: 100;
  }
`;

export { StyledMainMenu };
