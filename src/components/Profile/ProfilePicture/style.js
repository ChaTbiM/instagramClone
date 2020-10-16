const { default: styled } = require("styled-components");

const StyledProfilePicture = styled.div`
  width: ${(props) => props.width};
  text-align: center;
  display: inline-block;
  .picture {
    display: inline-block;
    width: ${(props) => props.width};
    border-radius: 100px;
    border: double 3px transparent;
    border-radius: 80px;
    background-image: linear-gradient(white, white),
      radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .person__name {
    display: inline-block;
  }
`;

export { StyledProfilePicture };
