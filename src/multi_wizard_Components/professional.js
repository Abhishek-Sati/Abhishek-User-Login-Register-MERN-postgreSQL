import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import "../App.css";
class Professional extends Component {
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
          <i className="material-icons icons__inactive">import_contacts</i>
          <i
            className="material-icons icons__active2"
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
          <AppBar title="Enter professional details"></AppBar>
          <TextField
            hintText="CBSE"
            floatingLabelText="Enter 10th board"
            onChange={this.props.handleChange("highschool_board")}
            defaultValue={this.props.values.highschool_board}
          />
          <br />
          <TextField
            hintText="70.0"
            floatingLabelText="Enter 10th percentage"
            onChange={this.props.handleChange("percentage10")}
            defaultValue={this.props.values.percentage10}
          />
          <br />
          <TextField
            hintText="2013"
            floatingLabelText="Enter 10th passing year"
            onChange={this.props.handleChange("year_passing10")}
            defaultValue={this.props.values.year_passing10}
          />
          <br />
          <TextField
            hintText="CBSE"
            floatingLabelText="Enter 12th board"
            onChange={this.props.handleChange("intermediate_board")}
            defaultValue={this.props.values.intermediate_board}
          />
          <br />
          <TextField
            hintText="70.0"
            floatingLabelText="Enter 12th percentage"
            onChange={this.props.handleChange("percentage12")}
            defaultValue={this.props.values.percentage12}
          />
          <br />
          <TextField
            hintText="2015"
            floatingLabelText="Enter 12th passing out year"
            onChange={this.props.handleChange("year_passing12")}
            defaultValue={this.props.values.year_passing12}
          />
          <br />
          <TextField
            hintText="Graphic Era Hill University,Bhimtal"
            floatingLabelText="Enter college/university name"
            onChange={this.props.handleChange("graduate_from")}
            defaultValue={this.props.values.graduate_from}
          />
          <br />
          <TextField
            hintText="2020"
            floatingLabelText="Enter Graduation Completion year"
            onChange={this.props.handleChange("graduate_year")}
            defaultValue={this.props.values.graduate_year}
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
export default Professional;
