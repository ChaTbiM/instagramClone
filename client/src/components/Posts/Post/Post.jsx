import React from "react";
import ProfilePicture from "../../Profile/ProfilePicture/ProfilePicture";
import { StyledPost } from "./StyledPost";
import {
  Bookmark,
  Heart,
  Share2,
  MessageCircle,
  MoreHorizontal,
} from "react-feather";

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

  return (
    <StyledPost>
      <div className="post__header">
        <span className="post__header__story">
          <ProfilePicture url={user.avatar} size="medium" isStory />
        </span>
        <p className="person__name">{user.name}</p>
        <MoreHorizontal className="more__interaction" />
      </div>
      <img src={image} alt="" className="post__picture" />
      <div className="post__footer">
        <div className="post__footer__interactions">
          <div className="post__footer__interactions__left">
            <Heart className="interaction__icon main__interactions" />
            <MessageCircle className="interaction__icon main__interactions" />
            <Share2 className="interaction__icon main__interactions" />
          </div>
          <Bookmark className="interaction__icon main__interactions" />
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
