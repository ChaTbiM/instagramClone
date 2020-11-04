import React, { useRef, useEffect, useState, useCallback } from "react";
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
  // I might be able to improve scrolling logic later --- using Steps Counter ( counting clicks ) and then scroll to one of scroll step width interval ---- example , srollStepWidth = 320 =>>> 320 , 640 , 960 ...
  let [x, setX] = useState(0);
  let [scrollWidthLimit, setScrollWidthLimit] = useState(0);
  let [scrollRight, setScrollRight] = useState(true);
  let [scrollLeft, setScrollLeft] = useState(false);

  const temp = Array.from(Array(15).keys());
  const numberOfStories = temp.length;
  const scrollStepWidth = 320;

  const renderStoriesFunction = (data) =>
    data.map((el, index) => <Story number={index} key={`story-${index}`} />);

  const renderStories = useCallback(() => renderStoriesFunction(temp), [temp]);

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

  useEffect(() => {
    if (scrollRef) {
      setScrollWidthLimit(numberOfStories * 60 - 20);
    }
  }, [scrollRef, numberOfStories]);

  useEffect(() => {
    if (scrollWidthLimit !== 0) {
      if (x < scrollWidthLimit) setScrollRight(true);

      if (x > 0) setScrollLeft(true);

      if (x === scrollWidthLimit) setScrollRight(false);

      if (x === 0) setScrollLeft(false);
    }

    console.log(x, scrollWidthLimit, "x and scrollWidthLimit");
  }, [scrollWidthLimit, x]);

  const scrollRightHandler = () => {
    if (x + scrollStepWidth <= scrollWidthLimit) {
      setX(x + scrollStepWidth);
    } else if (x + scrollStepWidth > scrollWidthLimit) {
      setX(x + (scrollWidthLimit - x));
    }

    if (
      (scrollWidthLimit - x) % scrollStepWidth !== 0 &&
      scrollWidthLimit - x <= scrollStepWidth * 2
    ) {
      // setScrollRight(false);
      setTimeout(
        () => {
          setX(x + (scrollWidthLimit - x));
        },
        500,
        [setX, x, scrollWidthLimit]
      );
    }
  };

  const scrollLeftHandler = () => {
    if (x - scrollStepWidth >= 0) {
      console.log("first");
      setX(x - scrollStepWidth);
    } else if (x - scrollStepWidth < 0) {
      console.log("second");
      setX(0);
    }

    if (x === 0) setScrollLeft(false);
  };

  const AnimatedStories = animated.div;

  return (
    <StyledStories>
      <div className="scrollControl">
        {scrollLeft && (
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            onClick={scrollLeftHandler}
            className="leftAngle"
          />
        )}

        {scrollRight && (
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            onClick={scrollRightHandler}
            className="rightAngle"
          />
        )}
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
