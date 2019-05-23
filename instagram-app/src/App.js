import React from "react";
import data from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

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
        <SearchBar />
      </div>
    );
  }
}

export default App;
