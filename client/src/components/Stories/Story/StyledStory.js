const { default: styled } = require("styled-components");

const StyledStory = styled.div`
  text-align: center;
  margin-right:20px;

  // :first-of-type{
  //   margin-left:20px;
  // }
  :last-of-type {
    padding-right: 20px;
    margin-right:20px;
  }


  .person__name {
    display: inline-block;
  }
`;

export { StyledStory };
