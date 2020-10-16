import React from "react";
import ProfilePicture from "../../Profile/ProfilePicture/ProfilePicture";
import { StyledPost } from "./StyledPost";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

function Post() {
  const temp = Array.from(Array(3).keys());
  const renderComments = () => {
    return temp.map((el, index) => {
      return (
        <p className="post__comment">
          <span className="post__comment__from">name..</span>
          <span className="post__comment__content">comment {index + 1}</span>
        </p>
      );
    });
  };
  const PostPicture = require("../../../assets/profile.jpg");
  return (
    <StyledPost>
      <div className="post__header">
        <ProfilePicture width="small" />
        <p className="person__name">name ..</p>
      </div>
      <img src={PostPicture} alt="" className="post__picture" />
      <div className="post__footer">
        <div className="post__footer__interactions">
          <div className="post__footer__interactions__left">
            <FontAwesomeIcon
              className="interaction__icon main__interactions"
              icon={faHeart}
            />
            <FontAwesomeIcon
              className="interaction__icon main__interactions"
              icon={faComment}
            />
            <FontAwesomeIcon
              className="interaction__icon main__interactions"
              icon={faShareAlt}
            />
          </div>
          <FontAwesomeIcon className="interaction__icon" icon={faBookmark} />
        </div>
        <p className="post__views">82 views</p>
        {renderComments()}
        <p className="post__time">59 minutes ago</p>
      </div>
      <div className="create__comment">
        <input
          type="text"
          placeholder="Add a comment..."
          className="create__comment__content"
        />
        <button className="add__comment">Post</button>
      </div>

      {/* 
        top
          profile picture + name 
          options Modal
        picture
        bottom
          actions
            left
              like 
              comment 
              share Modal
            right
              bookmark
          list of comments

      */}
    </StyledPost>
  );
}

export default Post;
