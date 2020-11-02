import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { useSpring, animated } from "react-spring";

import Story from "../Story/Story";
import { StyledStories } from "./StyledStories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function Stories() {
  const scrollRef = useRef(null);

  let [x, setX] = useState(0);

  const temp = Array.from(Array(29).keys());

  
  const renderStoriesFunction = (data) =>
  data.map((el, index) => <Story number={index} key={`story-${index}`} />);
  
  const renderStories = useCallback(()=> renderStoriesFunction(temp),[temp]);

  const easingFunction = (x) => {
    return 1 - Math.pow(1 - x, 3);
    // return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  };
  const scrollProps = useSpring(
    { scroll: x, from: { scroll: 0 } },
    {
      config: {
        duration: 600,
        easing: easingFunction,
        friction: 50,
      },
    }
  );

  const scrollRight = () => {
    setX(x + 320);
  };

  const scrollLeft = () => {
    if (x >= 320) {
      setX(x - 320);
    }
  };

  const AnimatedStories = animated.div;

  return (
    <StyledStories>
      <div className="scrollControl">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={scrollLeft} className="leftAngle" />
          <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={scrollRight} className="rightAngle" />
      </div>

      <AnimatedStories
        scrollLeft={scrollProps.scroll}
        ref={scrollRef}
        className="storiesList"
      >
        {renderStories()}
      </AnimatedStories>
    </StyledStories>
  );
}

export default Stories;
