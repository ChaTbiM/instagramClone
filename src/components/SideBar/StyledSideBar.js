const { default: styled } = require("styled-components");

const StyledSideBar = styled.aside`
  position: fixed;
  width: 300px;
  font-size:14px;

  .profile {
    display:flex;
    justify-content:flex-start;
    align-items:center;

  }

  .profile__text { 
    margin-left:1rem;
  }

  .profile__text__username{
    font-weight:600
  }

  .profile__text__name {
    color:rgb(169,169,169);
    font-weight:400;
    margin-top:8px;
  }

  .profile__switch {
    margin-left:auto;
    color:#159EF7;
    text-decoration:none;
  }

`;

export { StyledSideBar };
