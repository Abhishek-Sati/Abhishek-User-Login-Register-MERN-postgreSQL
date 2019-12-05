import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import "../App.css";
class Address extends Component {
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
          <i
            className="material-icons icons__active3"
            onClick={this.props.thirdStep}
          >
            home
          </i>
          <i className="material-icons icons__inactive">check</i>
          <br />
          <AppBar title="Enter address details"></AppBar>
          <TextField
            hintText="kamola,kaladhungi"
            floatingLabelText="Enter your current address"
            onChange={this.props.handleChange("address")}
            defaultValue={this.props.values.address}
          />
          <br />
          <TextField
            hintText="kamola,kaladhungi"
            floatingLabelText="Enter your permanent address"
            onChange={this.props.handleChange("P_address")}
            defaultValue={this.props.values.P_address}
          />
          <br />
          <TextField
            hintText="near millitary farm"
            floatingLabelText="Enter landmark"
            onChange={this.props.handleChange("landmark")}
            defaultValue={this.props.values.landmark}
          />
          <br />
          <TextField
            hintText="Haldwani"
            floatingLabelText="Enter your city"
            onChange={this.props.handleChange("city")}
            defaultValue={this.props.values.city}
          />
          <br />
          <TextField
            hintText="Uttarakhand"
            floatingLabelText="Enter state"
            onChange={this.props.handleChange("my_state")}
            defaultValue={this.props.values.my_state}
          />
          <br />
          <TextField
            hintText="263140"
            floatingLabelText="Enter pincode"
            onChange={this.props.handleChange("pincode")}
            defaultValue={this.props.values.pincode}
          />
          <br />
          <TextField
            hintText="India"
            floatingLabelText="Enter your Country name"
            onChange={this.props.handleChange("country")}
            defaultValue={this.props.values.country}
          />
          <br />
          <RaisedButton
            label="Previous"
            onClick={this.props.prevstep}
            primary={true}
            style={styles.button}
          />
          <RaisedButton
            label="Submit"
            onClick={this.props.handleSubmit}
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
export default Address;
