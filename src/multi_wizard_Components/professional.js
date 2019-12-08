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
          <i
            className="material-icons  logout__icon"
            onClick={this.props.logout}
          >
            exit_to_app
          </i>
          <br />
          <AppBar title="Enter professional details"></AppBar>
          <TextField
            hintText="CBSE"
            floatingLabelText="Enter 10th board"
            name="highschool_board"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.highschool_board}
          />
          <br />
          <TextField
            hintText="70.0"
            floatingLabelText="Enter 10th percentage"
            name="percentage10"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.percentage10}
          />
          <br />
          <TextField
            hintText="2013"
            floatingLabelText="Enter 10th passing year"
            name="year_passing10"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.year_passing10}
          />
          <br />
          <TextField
            hintText="CBSE"
            floatingLabelText="Enter 12th board"
            name="intermediate_board"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.intermediate_board}
          />
          <br />
          <TextField
            hintText="70.0"
            floatingLabelText="Enter 12th percentage"
            name="percentage12"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.percentage12}
          />
          <br />
          <TextField
            hintText="2015"
            floatingLabelText="Enter 12th passing out year"
            name="year_passing12"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.year_passing12}
          />
          <br />
          <TextField
            hintText="Graphic Era Hill University,Bhimtal"
            floatingLabelText="Enter college/university name"
            name="graduate_from"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.graduate_from}
          />
          <br />
          <TextField
            hintText="2020"
            floatingLabelText="Enter Graduation Completion year"
            name="graduate_year"
            onChange={e => this.props.handleChange(e)}
            defaultValue={this.props.values.graduate_year}
          />
          <br />
          {this.props.values.errorProfessional !== "" ? (
            <span className="span__styles">
              {this.props.values.errorProfessional}
            </span>
          ) : null}
          <br />
          <RaisedButton
            label="Previous"
            onClick={this.props.firstStep}
            primary={true}
            style={styles.button}
          />
          <RaisedButton
            label="Next"
            onClick={this.props.thirdStep}
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
