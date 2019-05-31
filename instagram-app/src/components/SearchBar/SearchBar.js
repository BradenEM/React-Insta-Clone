import React from "react";
import "./SearchBar.css";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderMid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderRight = styled.div`
  width: 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Spacer = styled.div`
  width: 2px;
  height: 90%;
  background: black;
  margin: 0 15px 0 15px;
`;

const SearchInput = styled.input`
  text-align: center;
  background: lightgray;
  border: 1px solid black;
  border-radius: 2px;
  height: 20px;
`;

const SearchBar = props => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <i className="fab fa-instagram icon" />
        <Spacer />
        <span className="insta-name">Insta-Clone</span>
      </HeaderLeft>
      <HeaderMid>
        <form>
          <SearchInput
            type="text"
            placeholder="Search"
            onChange={props.commenceSearch}
            value={props.searchInput}
          />
        </form>
      </HeaderMid>
      <HeaderRight>
        <i className="fa fa-compass icon right-1" />
        <i className="far fa-heart icon right-2" />
        <i className="fas fa-user-ninja icon right-3" />
      </HeaderRight>
    </HeaderWrapper>
  );
};

export default SearchBar;
