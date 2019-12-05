import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import "../App.css";
class Bussiness extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextstep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <i
            className="material-icons icons__active1"
            onClick={this.props.firstStep}
          >
            account_circle
          </i>
          <i
            className="material-icons icons__active2"
            onClick={this.props.secondStep}
          >
            import_contacts
          </i>
          <i className="material-icons icons__inactive">home</i>
          <i
            className="material-icons icons__active3"
            onClick={this.props.fourthStep}
          >
            check
          </i>
          <br />
          <AppBar title="Enter bussiness details"></AppBar>
          <TextField
            hintText="XYZ.."
            floatingLabelText="Currently working with"
            onChange={this.props.handleChange("current_work")}
            defaultValue={this.props.values.current_work}
          />
          <br />
          <TextField
            hintText="Manager/Senior Engineer"
            floatingLabelText="Enter your designation"
            onChange={this.props.handleChange("designation")}
            defaultValue={this.props.values.designation}
          />
          <br />
          <TextField
            hintText="0"
            floatingLabelText="Enter experience(in years)"
            onChange={this.props.handleChange("experience")}
            defaultValue={this.props.values.experience}
          />
          <br />
          <TextField
            hintText="XKSJF34S"
            floatingLabelText="Enter your PAN number"
            onChange={this.props.handleChange("pan_number")}
            defaultValue={this.props.values.pan_number}
          />
          <br />
          <TextField
            hintText="I am xyz......"
            floatingLabelText="Enter about your current job"
            onChange={this.props.handleChange("about")}
            defaultValue={this.props.values.about}
          />
          <br />
          <RaisedButton
            label="Previous"
            onClick={this.props.prevstep}
            primary={true}
            style={styles.button}
          />
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
export default Bussiness;
