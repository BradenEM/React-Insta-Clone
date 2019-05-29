import React from "react";
import data from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: data });
  }

  searchChangeHandler = e => {
    console.log(e.target.value);
    this.setState({ searchText: e.target.value });
  };

  commenceSearch = e => {
    e.preventDefault();
    console.log(e.target.value);
    const posts = this.state.posts.filter(s => {
      if (s.username.includes(this.state.searchText)) {
        return s;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div>
        <div>
          <SearchBar
            searchChangeHandler={this.searchChangeHandler}
            searchText={this.state.searchText}
            commenceSearch={this.commenceSearch}
          />
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

export default App;
