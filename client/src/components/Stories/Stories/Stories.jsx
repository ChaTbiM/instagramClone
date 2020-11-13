import React, { useEffect, useState, useCallback } from "react";
import { useSpring, animated } from "react-spring";

import Story from "../Story/Story";
import { StyledStories } from "./StyledStories";
import { ChevronRight, ChevronLeft } from "react-feather";
import useUsers from "../../../hooks/useUsers";

function Stories() {
  const { data, isLoading, isError } = useUsers(); // users data
  let [x, setX] = useState(0);
  let [scrollWidthLimit, setScrollWidthLimit] = useState(0);
  let [scrollRight, setScrollRight] = useState(true);
  let [scrollLeft, setScrollLeft] = useState(false);
  let [numberOfStories, setNumberOfStories] = useState(8);

  const scrollStepWidth = 320;
  // const temp = Array.from(Array(15).keys());
  // const numberOfStories = data.length ? data.length : 8;

  const renderStoriesFunction = (users) =>
    users.map((user, index) => (
      <Story
        name={user.name}
        avatar={user.avatar}
        isStory={true}
        key={`story-${index}`}
      />
    ));

  const renderStories = useCallback(
    (users) => renderStoriesFunction(users),
    []
  );
  useEffect(() => {
    if (data) {
      setNumberOfStories(data.length);
    }
  }, [data]);
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
    // if (scrollRef) {
    setScrollWidthLimit(numberOfStories * 60 - 20);
    // }
  }, [numberOfStories]);

  useEffect(() => {
    if (scrollWidthLimit !== 0) {
      if (x < scrollWidthLimit) setScrollRight(true);

      if (x > 0) setScrollLeft(true);

      if (x === scrollWidthLimit) setScrollRight(false);

      if (x === 0) setScrollLeft(false);
    }
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
      setX(x - scrollStepWidth);
    } else if (x - scrollStepWidth < 0) {
      setX(0);
    }

    if (x === 0) setScrollLeft(false);
  };

  const AnimatedStories = animated.div;

  if (isLoading) {
    return "loading.....";
  }

  if (isError) {
    return "error please refresh page...";
  }

  return (
    <StyledStories>
      <div className="scrollControl">
        {scrollLeft && (
          <ChevronLeft onClick={scrollLeftHandler} className="leftAngle" />
        )}

        {scrollRight && (
          <ChevronRight onClick={scrollRightHandler} className="rightAngle" />
        )}
      </div>

      <AnimatedStories
        scrollLeft={scrollProps.scroll}
        // ref={scrollRef}
        className="storiesList"
      >
        {renderStories(data)}
        rendered stories
      </AnimatedStories>
    </StyledStories>
  );
}

export default Stories;
