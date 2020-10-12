const { default: styled } = require("styled-components");

const StoryContainer = styled.div`
  width: 66px;
  text-align: center;
  margin: 1rem;
  .story__image {
    display: inline-block;
    width: 66px;
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

export { StoryContainer };
