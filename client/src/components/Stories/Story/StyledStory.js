const { default: styled } = require("styled-components");

const StyledStory = styled.div`
  text-align: center;
  margin-right: 20px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  :last-of-type {
    padding-right: 20px;
    margin-right: 20px;
  }

  .person__name {
    display: inline-block;
    width: 150%;
  }
`;

export { StyledStory };
