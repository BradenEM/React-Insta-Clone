import React from "react";
import CommentSection from "../CommentSection/CommentSection";

function PostContainer(props) {
  console.log(props);
  return (
    <>
      {props.posts.map(posts => (
        <div key={posts.timestamp} className="posts">
          <div>
            <img
              src={posts.thumbnailUrl}
              alt={`${posts.username}'s profile avatar`}
            />
            <h2>{posts.username}</h2>
          </div>
          <div>
            <img
              src={posts.imageUrl}
              alt={`${posts.username}'s uploaded media`}
            />
          </div>
          <div>
            <button>Like</button>
            <button>Comment</button>
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
