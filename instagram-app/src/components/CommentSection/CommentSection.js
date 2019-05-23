import React from "react";
import "./CommentSection.css";

function CommentSection(props) {
  console.log(props);

  return (
    <div className="comment-section">
      <div>
        <button>Like</button>
        <button>Comment</button>
      </div>
      {props.comments.map(comments => (
        <div key={comments.text} className="comments">
          <p>
            <strong>{comments.username}</strong> {comments.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CommentSection;
