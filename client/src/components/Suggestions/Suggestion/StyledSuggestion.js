const { default: styled } = require("styled-components");

const StyledSuggestion = styled.div`
padding-top: 1rem;
  display: flex;  
  align-items:center;

  .suggested__profiles {
    margin-left: 1rem;
  }

  .follow {
    margin-left: auto;
  }


  .suggested__profiles__name{
    font-weight:600
  }

  .suggested__profiles__new {
    color:rgb(169,169,169);
    font-weight:400;
    font-size:12px;
  }

  .follow {
    margin-left:auto;
    color:#159EF7;
    text-decoration:none;
    cursor:pointer;
  }

`;

export { StyledSuggestion };
