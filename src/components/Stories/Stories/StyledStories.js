const { default: styled } = require("styled-components");


const StyledStories = styled.div`
  .storiesList{
    display: flex;
    overflow-x: hidden;
    padding: 20px 16px 10px;
    border: solid 1px #eee;
    background-color:white;
  }


  position: relative;
  .leftAngle,
  .rightAngle {
    position: absolute;
    top:50%;
    transform:translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    color: white;
    z-index: 99555;
    cursor:pointer;
    font-size: 20px;
  }
  .leftAngle{
    left:10px;
  }

  .rightAngle{
    right:10px;
  }

  .scrollControl{
    position:absolute;
    right:0;
    left:0;
    top:0;
    bottom:0;
  }

`;

export { StyledStories };
