import React from "react";
import data from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchInput: "",
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: data });
  }

  commenceSearch = e => {
    e.preventDefault();
    // eslint-disable-next-line
    let posts = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div>
        <div>
          <SearchBar commenceSearch={this.commenceSearch} />
        </div>
        <div>
          <PostContainer
            posts={
              this.state.filteredPosts.length > 0
                ? this.state.filteredPosts
                : this.state.posts
            }
          />
        </div>
      </div>
    );
  }
}

export default PostsPage;
