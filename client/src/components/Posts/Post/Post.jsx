import React, { useCallback } from "react";
import ProfilePicture from "../../Profile/ProfilePicture/ProfilePicture";
import { StyledPost } from "./StyledPost";
import {
  Bookmark,
  Heart,
  Share2,
  MessageCircle,
  MoreHorizontal,
} from "react-feather";
import Comment from "../Comment/Comment";
import { Link } from "react-router-dom";

function Post({ post }) {
  let { image, sincePublished, numberOfLikes, user, comments } = post;

  const numberOfComments = useCallback(() => {
    return comments.length;
  }, [comments]);

  const renderComments = () => {
    return comments.map((comment, index) => {
      if (index === 0 && numberOfComments() >= 3) {
        return (
          <Comment comment={comment} key={`comments-${index}`}>
            <Link to="/p/postid"> read All {numberOfComments()} comments</Link>
          </Comment>
        );
      }

      if (index >= 3 && numberOfComments() >= 3) return null;

      return <Comment comment={comment} key={`comments-${index}`} />;
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
