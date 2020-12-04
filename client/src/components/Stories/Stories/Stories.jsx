import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import Story from "../Story/Story";
import { StyledStories } from "./StyledStories";
import { ChevronRight, ChevronLeft } from "react-feather";

function Stories({ users }) {
  const { data, isLoading, isError } = users; // users data
  let [x, setX] = useState(0);
  let [scrollWidthLimit, setScrollWidthLimit] = useState(0);
  let [scrollRight, setScrollRight] = useState(false);
  let [scrollLeft, setScrollLeft] = useState(false);
  let [numberOfStories, setNumberOfStories] = useState(8);

  const scrollStepWidth = 320;
  const renderStoriesFunction = () =>
    data.map((user, index) => {
      if (user.stories.length) {
        return <Story user={user} isStory={true} key={`story-${index}`} />;
      }
    });

  const renderStories = (users) => renderStoriesFunction(users);
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
    console.log(data, "users data");
    if (data && data.length >= 9) {
      setScrollRight(true);
    }
  }, [data]);

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
        {renderStories()}
      </AnimatedStories>
    </StyledStories>
  );
}

export default Stories;
