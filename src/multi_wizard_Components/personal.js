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
            name="first_name"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.first_name}
          />
          <br />
          <TextField
            hintText="Enter your last name"
            floatingLabelText="Last Name"
            name="last_name"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.last_name}
          />
          <br />
          <TextField
            hintText="Enter your E-Mail"
            floatingLabelText="E-Mail"
            name="email"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.email}
          />
          <br />
          <TextField
            hintText="1234567890"
            floatingLabelText="Enter your Phone Number"
            name="phoneNum"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.phoneNum}
          />
          <br />
          <TextField
            hintText="Enter your father's name"
            floatingLabelText="Father's Name"
            name="father_name"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.father_name}
          />
          <br />
          <TextField
            hintText="Male/Female"
            floatingLabelText="Enter Gender"
            name="gender"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.gender}
          />
          <br />
          <TextField
            hintText="01/01/2000"
            floatingLabelText="Enter your date of birth"
            name="dob"
            onChange={e => this.props.handleChange(e)}
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
