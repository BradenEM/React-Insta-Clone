import React from "react";

function CommentSection(props) {
  console.log(props);

  return (
    <>
      {props.comments.map(comments => (
        <div key={comments.text} className="comments">
          <p>
            <strong>{comments.username}</strong> {comments.text}
          </p>
        </div>
      ))}
    </>
  );
}

export default CommentSection;
