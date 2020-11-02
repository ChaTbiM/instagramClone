const { default: styled } = require("styled-components");
const {animated} = require("react-spring");

// const StyledStories = styled(animated.div)`
const StyledStories = styled.div`




  .storiesList{
    display: flex;
    overflow-x: hidden;
    padding: 20px 16px 10px;
    border: solid 1px #eee;
    // margin:0 ;
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
    // z-index: 99555;
    right:0;
    left:0;
    top:0;
    bottom:0;
  }

`;

export { StyledStories };
