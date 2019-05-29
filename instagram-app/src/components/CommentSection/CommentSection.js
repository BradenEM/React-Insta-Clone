import React from "react";
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      username: "Braden",
      text: "",
      likes: 0
    };
  }

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      username: this.state.username,
      text: this.state.text
    };
    console.log(this.state);
    const commentsCopy = this.state.comments;
    commentsCopy.push(newComment);
    this.setState({ comments: commentsCopy });
  };

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  };

  addLike = e => {
    e.preventDefault();
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return (
      <div className="comment-section">
        <div className="like-bar">
          <i className="far fa-heart small-icon" onClick={this.addLike} />
          <span className="likes">{this.state.likes}</span>
          <i className="far fa-comment small-icon" />
        </div>
        {this.state.comments.map(comment => (
          <div key={comment.text} className="comment">
            <p>
              <strong>{comment.username}</strong> {comment.text}
            </p>
          </div>
        ))}
        <div>
          <form onSubmit={this.addNewComment}>
            <input
              className="comment-input"
              type="text"
              placeholder="   Add a comment..."
              onChange={this.changeHandler}
              value={this.state.commentText}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CommentSection;
