import React, { useCallback, useRef, useEffect } from "react";
import { MoreHorizontal } from "react-feather";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProfilePicture from "../components/Profile/ProfilePicture/ProfilePicture";
import { X, ChevronRight, ChevronLeft } from "react-feather";
import { useQueryCache } from "react-query";

function StoriesFull({ toggleMainMenu }) {
  let history = useHistory();
  const location = useLocation();
  const { storyIndex, user } = location.state;
  const { stories, avatar } = user;
  const timerRef = useRef();
  const queryCache = useQueryCache();

  const printUserName = useCallback(() => {
    const userName = user.userName;
    return userName.toLowerCase();
  }, [user]);

  useEffect(() => {
    toggleMainMenu(false);
    return () => {
      toggleMainMenu(true);
    };
  }, [toggleMainMenu]);

  const nextStoryLink = useCallback(() => {
    return {
      pathname: `/stories/${printUserName()}/${stories[storyIndex].id}`,
      state: {
        user,
        storyIndex: storyIndex + 1,
      },
    };
  }, [printUserName, stories, storyIndex, user]);

  const prevStoryLink = () => {
    if (storyIndex - 1 >= 0) {
      return {
        pathname: `/stories/${printUserName()}/${stories[storyIndex].id}`,
        state: {
          user,
          storyIndex: storyIndex - 1,
        },
      };
    }
  };

  const nextStory = useCallback(() => {
    if (storyIndex + 1 < stories.length) {
      history.push(nextStoryLink());
    } else {
      queryCache.invalidateQueries("users", { id: user.id });
      history.push("/");
    }
  }, [history, nextStoryLink, queryCache, stories.length, storyIndex, user.id]);

  useEffect(() => {
    if (timerRef.current) {
      timerRef.current.addEventListener("animationend", nextStory);
    }
    return () => {
      if (timerRef.current) {
        timerRef.current.removeEventListener("animationend", nextStory);
      }
    };
  }, [nextStory, timerRef]);

  return (
    <StyledStoriesFull>
      <div className="left">
        <Link
          className={storyIndex - 1 >= 0 ? "previous" : "hidden"}
          to={{ ...prevStoryLink() }}
        >
          <ChevronLeft />
        </Link>
      </div>
      <div className="content">
        <div className="story__header">
          <ProfilePicture url={avatar} size="medium" />
          <div className="username">{printUserName()}</div>
          <MoreHorizontal className="more__interaction" />
        </div>
        <div className="loading__container">
          {stories.map((story, index) => {
            if (index === storyIndex) {
              return (
                <div key={`story-timer-${index}`} className="timer__container">
                  <div ref={timerRef} className="timer"></div>
                </div>
              );
            }
            return (
              <div
                key={`story-timer-${index}`}
                className="timer__container"
              ></div>
            );
          })}
        </div>
        <img
          alt="story"
          src={stories[storyIndex].image}
          width="310"
          height="545"
        />
      </div>
      <div className="right">
        <Link className="close" to="/">
          <X className="close__icon" />
        </Link>

        <Link
          className={storyIndex + 1 < stories.length ? "next" : "hidden"}
          to={{ ...nextStoryLink() }}
        >
          <ChevronRight />
        </Link>
      </div>
    </StyledStoriesFull>
  );
}

const StyledStoriesFull = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #262626;
  height: 100vh;
  padding-top: 0.1rem;

  .content {
    margin: 0 1rem;
  }

  .story__header {
    display: flex;
    align-items: center;
    color: white;
  }
  .username {
    margin-left: 0.7em;
  }

  .loading__container {
    width: 100%;
    display: flex;
    flex-basis: 1;
  }

  .timer__container {
    flex-grow: 1;
    height: 4px;
    background-color: grey;
    margin: 1rem auto;
    border-radius: 20px;
    position: relative;
    :not(:last-of-type) {
      margin-right: 4px;
    }
  }

  @keyframes example {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  .timer {
    height: 100%;
    background: red;
    animation-name: example;
    animation-duration: 5s;
  }

  .more__interaction {
    margin-left: auto;
  }

  .close {
    position: absolute;
    top: 5.5rem;
  }

  .next,
  .previous,
  .close {
    color: white;
  }

  .hidden {
    visibility: hidden;
  }
`;

export default StoriesFull;
