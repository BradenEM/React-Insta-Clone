import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="entire-navbar">
      <div className="navbar-left">
        <button>Icon</button>
        <button>Icon</button>
      </div>
      <div className="navbar-mid">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-right">
        <button>Icon</button>
        <button>Icon</button>
        <button>Icon</button>
      </div>
    </div>
  );
}

export default SearchBar;
