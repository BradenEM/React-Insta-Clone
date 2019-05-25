import React from "react";
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      username: "Braden",
      text: ""
    };
  }

  addNewComment = (e, indNum) => {
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

  // addNewComment((e, indNum) => {
  //   e.preventDefault();
  //   console.log(props.comments[indNum]);
  // });

  render() {
    console.log(this.state.comments);

    return (
      <div className="comment-section">
        <div>
          <button>Like</button>
          <button>Comment</button>
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
              type="text"
              placeholder="Add a comment..."
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
