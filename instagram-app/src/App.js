import React from "react";
import data from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: data
    };
  }
  render() {
    return (
      <div>
        <div>
          <SearchBar />
        </div>
        <div>
          <PostContainer posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
