import React from "react";
import "./App.css";
import PostsPage from "./components/PostsPage/PostsPage";
import withAuthenticate from "./components/authenticate/withAuthenticate";
import LoginPage from "./components/LoginPage/LoginPage";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
