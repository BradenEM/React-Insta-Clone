import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  console.log(props);
  return (
    <div className="entire-navbar">
      <div className="navbar-left">
        <i className="fab fa-instagram icon" />
        <div className="spacer" />
        <span className="insta-name">Insta-Clone</span>
      </div>
      <div className="navbar-mid">
        <form>
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            value={props.searchText}
            onChange={props.searchChangeHandler}
            onSubmit={props.commenceSearch}
          />
        </form>
      </div>
      <div className="navbar-right">
        <i className="fa fa-compass icon right-1" />
        <i className="far fa-heart icon right-2" />
        <i className="fas fa-user-ninja icon right-3" />
      </div>
    </div>
  );
};

export default SearchBar;
