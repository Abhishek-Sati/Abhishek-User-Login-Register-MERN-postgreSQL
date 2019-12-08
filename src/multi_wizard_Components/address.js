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
          <i
            className="material-icons  logout__icon"
            onClick={this.props.logout}
          >
            exit_to_app
          </i>
          <br />
          <AppBar title="Enter Address Details"></AppBar>
          <TextField
            hintText="kamola,kaladhungi"
            floatingLabelText="Enter your current address"
            name="address"
            value={this.props.values.address}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <TextField
            hintText="kamola,kaladhungi"
            floatingLabelText="Enter your permanent address"
            name="P_address"
            value={this.props.values.P_address}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <TextField
            hintText="near millitary farm"
            floatingLabelText="Enter Landmark"
            name="landmark"
            value={this.props.values.landmark}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <TextField
            hintText="263140"
            floatingLabelText="Enter pincode"
            name="pincode"
            value={this.props.values.pincode}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <TextField
            hintText=""
            floatingLabelText="Enter District Name"
            name="city"
            value={this.props.values.city}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <TextField
            hintText="Uttarakhand"
            floatingLabelText="Enter State Name"
            name="my_state"
            value={this.props.values.my_state}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <TextField
            hintText="India"
            floatingLabelText="Enter your Country name"
            onChange={e => this.props.handleChange(e)}
            name="country"
            value={this.props.values.country}
          />
          <br />
          {this.props.values.errorAddress !== "" ? (
            <span className="span__styles">
              {this.props.values.errorAddress}
            </span>
          ) : null}
          <br />
          <RaisedButton
            label="Previous"
            onClick={this.props.thirdStep}
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
