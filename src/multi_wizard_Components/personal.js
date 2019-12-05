import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import "../App.css";
import RaisedButton from "material-ui/RaisedButton";
class Personal extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextstep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <i className="material-icons icons__inactive">account_circle</i>
          <i
            className="material-icons icons__active1"
            onClick={this.props.secondStep}
          >
            import_contacts
          </i>
          <i
            className="material-icons  icons__active2"
            onClick={this.props.thirdStep}
          >
            home
          </i>
          <i
            className="material-icons  icons__active3"
            onClick={this.props.fourthStep}
          >
            check
          </i>
          <br />
          <AppBar title="Enter personal details"></AppBar>
          <TextField
            hintText="Enter your first name"
            floatingLabelText="First Name"
            onChange={this.props.handleChange("first_name")}
            defaultValue={this.props.values.first_name}
          />
          <br />
          <TextField
            hintText="Enter your last name"
            floatingLabelText="Last Name"
            onChange={this.props.handleChange("last_name")}
            defaultValue={this.props.values.last_name}
          />
          <br />
          <TextField
            hintText="Enter your E-Mail"
            floatingLabelText="E-Mail"
            onChange={this.props.handleChange("email")}
            defaultValue={this.props.values.email}
          />
          <br />
          <TextField
            hintText="1234567890"
            floatingLabelText="Enter your Phone Number"
            onChange={this.props.handleChange("phoneNum")}
            defaultValue={this.props.values.phoneNum}
          />
          <br />
          <TextField
            hintText="Enter your father's name"
            floatingLabelText="Father's Name"
            onChange={this.props.handleChange("father_name")}
            defaultValue={this.props.values.father_name}
          />
          <br />
          <TextField
            hintText="Male/Female"
            floatingLabelText="Enter Gender"
            onChange={this.props.handleChange("gender")}
            defaultValue={this.props.values.gender}
          />
          <br />
          <TextField
            hintText="01/01/2000"
            floatingLabelText="Enter your date of birth"
            onChange={this.props.handleChange("dob")}
            defaultValue={this.props.values.dob}
          />
          <br />
          <RaisedButton
            label="Next"
            onClick={this.props.nextstep}
            primary={true}
            style={styles.button}
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
export default Personal;
