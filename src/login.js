import React, { Component, Fragment } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      error: false,
      emailError: "",
      passError: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ error: false, emailError: "", passError: "" });
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  Validate = () => {
    if (!this.state.email.includes("@")) {
      this.setState({ emailError: "invalid email" });
      return false;
    }
    if (this.state.password.length < 6) {
      this.setState({ passError: "Please enter the complete password" });
      return false;
    }
    return true;
  };
  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.Validate();
    if (isValid) {
      const user = {
        email: this.state.email,
        password: this.state.password
      };
      axios
        .post("users/login", {
          email: user.email,
          password: user.password
        })
        .then(res => {
          if (!res.data.error) {
            localStorage.setItem("token", res.data);
            this.props.history.push("/profile");
          } else {
            this.setState({ error: true });
          }
        })
        .catch(e => {
          console.log("Please ! Start the Express Server");
        });
    }
  }

  render() {
    return (
      <Fragment>
        <h1 className="h1">Welcome To EntranceZone</h1>
        <div className="PageSwitcher">
          <NavLink
            to="/login"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            SIGN IN
          </NavLink>
          <NavLink
            exact
            to="/"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            SIGN UP
          </NavLink>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="FormField__Input"
                placeholder="Enter your email"
                name="email"
                autoComplete="on"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div style={{ color: "red" }}>{this.state.emailError}</div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="FormField__Input"
                placeholder="Enter your password"
                name="password"
                autoComplete="off"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div style={{ color: "red" }}>{this.state.passError}</div>
            {this.state.error ? (
              <span className="span__styles">
                please enter the correct email or password
              </span>
            ) : null}
            <div className="FormField">
              <button className="FormField__Button mr-20">Sign In</button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
export default SignInForm;
