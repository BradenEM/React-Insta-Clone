import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

function PostContainer(props) {
  console.log(props);
  return (
    <>
      {props.posts.map(posts => (
        <div key={posts.timestamp} className="posts">
          <div className="post-title">
            <img
              className="thumbnail"
              src={posts.thumbnailUrl}
              alt={`${posts.username}'s profile avatar`}
            />
            <h2 className="username">{posts.username}</h2>
          </div>
          <div className="img-container">
            <img
              className="post-image"
              src={posts.imageUrl}
              alt={`${posts.username}'s uploaded media`}
            />
          </div>
          <div>
            <CommentSection comments={posts.comments} />
          </div>
        </div>
      ))}
    </>
  );
}

export default PostContainer;
