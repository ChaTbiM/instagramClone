import styled from "styled-components";

const StyledMainMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: white;
  border-bottom: solid 1px #eee;
  z-index: 100;
  padding:0 1rem;

  .list {
    padding:10.5px 0;
    margin: 0 auto;
    
 

    max-width: 940px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width:700px){
      margin:0 .5rem;
    }

    flex-wrap:wrap;
  }

  .list__item {
    list-style: none;
  }

  .logo {
    // width: 100px;
    height: 30px;
    font-size: 20px;
    text-align:center
  }
  .list__icons{
    display:inline-flex;
    align-items:center;
    justify-content:flex-between;
    width:200px;
   
    box-sizing:border-box;
  }
  .list__icons__item 
   {
    margin-right: 20px;

    @media screen and (max-width:380px){
      // margin-left:2rem;
      margin-right:10.5px;
    }

    font-size: 22px;
    color: gray;
  }

  .search__bar {
    position: relative;
    @media  screen and (max-width:590px){
      display:none;
    }
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

  .clickable{
    cursor:pointer;
  }




  
`;

export { StyledMainMenu };
