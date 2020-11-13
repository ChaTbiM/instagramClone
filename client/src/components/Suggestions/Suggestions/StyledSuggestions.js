const { default: styled } = require("styled-components");

const StyledSuggestions = styled.div`
margin-top:1.8rem;  

  .header {
    display: flex;
    justify-content: space-between;
  }

  .header__title {
    color:rgb(169,169,169);
    font-weight:500;
  }

  .header__all{
    text-decoration:none;
    font-size:12px;
    color:black;
  }

  .footer{
    width:100%;
    margin-top:2rem;
  }

  .footer__link {
    font-size:11px;
    color:rgb(169,169,169);
    text-decoration:none;
    :not(:first-of-type):before{
      content:"• ";
    }

    :not(:first-of-type){
      margin-left:2px;
    }
  }


  .footer_copyright{
    font-size:11px;
    color:rgb(169,169,169);
    margin-top:1.7rem;

  }
  
`;

export { StyledSuggestions };
