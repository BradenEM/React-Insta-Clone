import React from "react";
import "./App.css";
import PostsPage from "./components/PostsPage/PostsPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <PostsPage />
      </div>
    );
  }
}

export default App;
