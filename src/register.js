import React, { Component, Fragment } from "react";
import axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";
class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phoneNum: "",
      hasAgreed: false,
      error1: false,
      error2: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ emailError: "", phoneNumError: "", passError: "" });
    this.setState({ error1: false });
    this.setState({ error2: false });
    let target = e.target;
    let value = target.value;
    if (target.type === "checkbox" && target.checked) {
      this.setState({ hasAgreed: target.checked });
    }
    let name = target.name;

    this.setState({
      [name]: value
    });
  }
  Validate = () => {
    if (this.state.first_name === "") {
      this.setState({ error2: true });
      return false;
    }
    if (this.state.last_name === "") {
      this.setState({ error2: true });
      return false;
    }
    if (!this.state.email.includes("@")) {
      this.setState({ emailError: "invalid email" });
      return false;
    }
    if (isNaN(this.state.phoneNum)) {
      this.setState({ phoneNumError: "Not a valid number" });
      return false;
    }
    if (this.state.password.length < 6) {
      this.setState({ passError: "Please ! Enter a valid password" });
      return false;
    }
    return true;
  };
  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.Validate();
    if (isValid && this.state.hasAgreed) {
      const newUser = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phoneNum: this.state.phoneNum,
        password: this.state.password
      };
      axios
        .post("users/register", {
          first_name: newUser.first_name,
          last_name: newUser.last_name,
          email: newUser.email,
          phoneNum: newUser.phoneNum,
          password: newUser.password,
          emailError: "",
          phoneNumError: "",
          passError: ""
        })
        .then(res => {
          if (res.data.error) {
            console.log(res.data.error);
            this.setState({ error1: true });
          } else if (res.data.incompleteDetails) {
            console.log(res.data.incompleteDetails);
            this.setState({ error2: true });
          } else {
            this.props.history.push("/login");
          }
        })
        .catch(e => {
          console.log("Please ! Start Express Server");
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
              <label className="FormField__Label" htmlFor="first_name">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                className="FormField__Input"
                placeholder="Enter your first name"
                name="first_name"
                autoComplete="off"
                value={this.state.first_name}
                onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="last_name">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                className="FormField__Input"
                placeholder="Enter your last name"
                name="last_name"
                autoComplete="off"
                value={this.state.last_name}
                onChange={this.handleChange}
              />
            </div>
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
              <label className="FormField__Label" htmlFor="phoneNum">
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNum"
                className="FormField__Input"
                placeholder="Enter your phone number"
                name="phoneNum"
                autoComplete="off"
                value={this.state.phoneNum}
                onChange={this.handleChange}
              />
            </div>
            <div style={{ color: "red" }}>{this.state.phoneNumError}</div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="FormField__Input"
                placeholder="Enter your password (greater than 6 words)"
                name="password"
                autoComplete="off"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div style={{ color: "red" }}>{this.state.passError}</div>
            <div className="FormField">
              <label className="FormField__CheckboxLabel">
                <input
                  className="FormField__Checkbox"
                  type="checkbox"
                  name="hasAgreed"
                  autoComplete="off"
                  value={this.state.hasAgreed}
                  onChange={this.handleChange}
                />
                I agree all statements in
                <a href="" className="FormField__TermsLink">
                  terms of service
                </a>
              </label>
            </div>
            {this.state.error1 ? (
              <span className="span__styles">
                Email or Phone number is already registered !{" "}
              </span>
            ) : null}
            {this.state.error2 ? (
              <span className="span__styles">
                Enter the complete details first
              </span>
            ) : null}
            <div className="FormField">
              <button className="FormField__Button mr-20">Sign Up</button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default SignUpForm;
