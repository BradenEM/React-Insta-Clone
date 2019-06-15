import React from "react";
import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "reactstrap";
// ! importing bootstrap messes up my centering

const Body = styled.div`
  display: flex;
  margin-top: 15%;
`;

const Wrapper = styled.div`
  margin: auto;
  width: 60%;
  height: 50vh;
  background: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid black;
`;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <div>
        <Body>
          <Wrapper>
            <h1>Insta-Clone</h1>
            <form>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </form>
            <form>
              <input
                type="text"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </form>
            <button onClick={this.login}>Login</button>
          </Wrapper>
        </Body>
      </div>
    );
  }
}

export default LoginPage;
