import Button from "react-bootstrap/Button";
import React, { Component } from "react";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Get Your Day Started!</h1>
        <Button variant="primary" onClick={this.props.login}>
          Login
        </Button>
      </div>
    );
  }
}

export default LoginContainer;
