const { default: styled } = require("styled-components");

const StyledProfilePicture = styled.div`
  position: relative;

  .story__wrapper {
    width: calc(${(props) => props.width} + 8px);
    height: calc(${(props) => props.width} + 8px);
    position: relative;
    border-radius: 1000px;
    border: double 2px transparent;
    background-image: linear-gradient(white, white),
      radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #265aeb 90%
      );

    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .picture {
    z-index: 99;
    width: ${(props) => props.width};
    height: ${(props) => props.width};
    border-radius: 50%;
  }

  .picture__inside {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: calc((${(props) => props.width} + 8px) / 2);
  }
`;

export { StyledProfilePicture };
