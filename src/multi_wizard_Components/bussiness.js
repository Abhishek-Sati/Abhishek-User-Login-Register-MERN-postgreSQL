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
          <i
            className="material-icons  logout__icon"
            onClick={this.props.logout}
          >
            exit_to_app
          </i>
          <br />
          <AppBar title="Enter bussiness details"></AppBar>
          <TextField
            hintText="XYZ.."
            floatingLabelText="Currently working with"
            name="current_work"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.current_work}
          />
          <br />
          <TextField
            hintText="Manager/Senior Engineer"
            floatingLabelText="Enter your designation"
            name="designation"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.designation}
          />
          <br />
          <TextField
            hintText="0"
            floatingLabelText="Enter experience(in years)"
            name="experience"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.experience}
          />
          <br />
          <TextField
            hintText="XKSJF34S"
            floatingLabelText="Enter your PAN number"
            name="pan_number"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.pan_number}
          />
          <br />
          <TextField
            hintText="I am xyz......"
            floatingLabelText="Enter about your current job"
            name="about"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.about}
          />
          <br />
          {this.props.values.errorBussiness !== "" ? (
            <span className="span__styles">
              {this.props.values.errorBussiness}
            </span>
          ) : null}
          <br />
          <RaisedButton
            label="Previous"
            onClick={this.props.secondStep}
            primary={true}
            style={styles.button}
          />
          <RaisedButton
            label="Next"
            onClick={this.props.fourthStep}
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
