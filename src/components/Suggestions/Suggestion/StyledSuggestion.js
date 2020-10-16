const { default: styled } = require("styled-components");

const StyledSuggestion = styled.div`
  padding-top: 1rem;
  display: flex;

  .suggested__profiles__text {
    margin-left: 1rem;
  }

  .follow {
    margin-left: auto;
  }
`;

export { StyledSuggestion };
