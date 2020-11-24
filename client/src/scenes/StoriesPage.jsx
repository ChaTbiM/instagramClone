import React, { useCallback, useEffect } from "react";
import { MoreHorizontal } from "react-feather";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProfilePicture from "../components/Profile/ProfilePicture/ProfilePicture";
import { X, ChevronRight, ChevronLeft } from "react-feather";

function StoriesPage({ toggleMainMenu }) {
  const location = useLocation();
  const { storyIndex, user } = location.state;
  const { stories, avatar } = user;

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

  const nextStory = () => {
    return {
      pathname: `/stories/${printUserName()}/${stories[storyIndex].id}`,
      state: {
        user,
        storyIndex: storyIndex + 1,
      },
    };
  };

  const prevStory = () => {
    return {
      pathname: `/stories/${printUserName()}/${stories[storyIndex].id}`,
      state: {
        user,
        storyIndex: storyIndex - 1,
      },
    };
  };

  return (
    <StyledStoriesPage>
      <div className="left">
        {storyIndex - 1 >= 0 && (
          <Link className="previous" to={{ ...prevStory() }}>
            <ChevronLeft />
          </Link>
        )}
      </div>
      <div className="content">
        <div className="story__header">
          <ProfilePicture avatar={avatar} size="medium" />
          <div className="username">{printUserName()}</div>
          <MoreHorizontal className="more__interaction" />
        </div>
        <div className="timer"></div>
        <img src={stories[storyIndex].image} width="310" height="545" />
      </div>
      <div className="right">
        <Link className="close" to="/">
          <X className="close__icon" />
        </Link>

        {storyIndex + 1 < stories.length && (
          <Link className="next" to={{ ...nextStory() }}>
            <ChevronRight />
          </Link>
        )}
      </div>
    </StyledStoriesPage>
  );
}

const StyledStoriesPage = styled.div`
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

  .timer {
    width: 98%;
    height: 4px;
    background-color: grey;
    margin: 1rem auto;

    border-radius: 20px;
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
`;
export default StoriesPage;
