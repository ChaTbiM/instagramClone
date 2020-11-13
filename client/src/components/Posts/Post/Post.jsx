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

function Post({ post }) {
  let { image, sincePublished, numberOfLikes, user, comment: comments } = post;
  const renderComments = () => {
    return comments.map((comment, index) => {
      return (
        <p key={`comment-${index}`} className="post__comment">
          <span className="post__comment__from">{comment.user.name}</span>
          <span className="post__comment__content">{comment.text}</span>
        </p>
      );
    });
  };
  // const PostPicture = require("../../../assets/profile.jpg");
  return (
    <StyledPost>
      <div className="post__header">
        <span className="post__header__story">
          <ProfilePicture url={user.avatar} size="medium" isStory />
        </span>
        <p className="person__name">{user.name}</p>
      </div>
      <img src={image} alt="" className="post__picture" />
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
        <p className="post__views">{numberOfLikes} likes</p>
        {renderComments()}
        <p className="post__time">{sincePublished} hours</p>
      </div>
      <div className="create__comment">
        <input
          type="text"
          placeholder="Add a comment..."
          className="create__comment__content"
        />
        <button className="add__comment">Post</button>
      </div>
    </StyledPost>
  );
}

export default Post;
