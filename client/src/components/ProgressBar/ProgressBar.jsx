import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const ProgressBar = React.forwardRef((props, ref) => {
  const animationProps = useSpring({
    to: async (next) => {
      await next({ width: "100%", opacity: 1 });
    },
    from: { width: "20%", opacity: 0 },
  });

  return (
    <Container>
      <Progress ref={ref} style={animationProps} />
    </Container>
  );
});

const Container = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  height: 1px;
  background: white;
  z-index: 55555555555555555555555555555555;
`;

const Progress = styled(animated.div)`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  display: inline-block;
  height: 1px;
  opacity: 0;
  width: 0%;
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
`;
// const AnimatedProgress = animated(Progress);

export default React.memo(ProgressBar);
