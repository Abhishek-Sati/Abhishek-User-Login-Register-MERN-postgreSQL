import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SignUpForm from "./register";
import SignInForm from "./login";
import Profile from "./userprofile";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Form">
            <Route exact path="/" component={SignUpForm}></Route>
            <Route path="/login" component={SignInForm}></Route>
            <Route path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
