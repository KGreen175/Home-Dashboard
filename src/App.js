import React, { Component } from "react";
import DashBoardContainer from "./containers/DashBoardContainer";
import LoginContainer from "./containers/LoginContainer";
import * as loginService from "./services/loginService";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false, loginUrl: "", outlookCookie: undefined };
  }

  async componentDidMount() {
    const loginResponse = await loginService.getOutLookLoginUrl();
    await this.setState({
      loginUrl: loginResponse.data.signInUrl,
      outlookCookie: loginResponse.data.cookies
    });
  }

  handleLogin = async () => {
    window.location.href = this.state.loginUrl;
  };

  render() {
    if (this.state.outlookCookie === undefined) {
      return (
        <div className="App">
          <header className="App-header">
            <LoginContainer login={this.handleLogin} />
          </header>
        </div>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <DashBoardContainer />
        </header>
      </div>
    );
  }
}

export default App;
