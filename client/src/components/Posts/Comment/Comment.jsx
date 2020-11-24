import React from "react";

function Comment({ comment, children }) {
  return (
    <>
      <p className="post__comment">
        <span className="post__comment__from">{comment.user.name}</span>
        <span className="post__comment__content">{comment.text}</span>
      </p>
      <div>{children}</div>
    </>
  );
}

export default Comment;
