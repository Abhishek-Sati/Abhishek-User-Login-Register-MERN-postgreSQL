import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import Main from "./multi_wizard_Components/main";
import axios from "axios";
import "./App.css";
import Userhome from "./userhome";
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phoneNum: "",
      father_name: "",
      dob: "",
      gender: "",
      highschool_board: "",
      percentage10: 70,
      year_passing10: 2013,
      intermediate_board: "",
      percentage12: 70,
      year_passing12: 2015,
      graduate_from: "",
      graduate_year: 2020,
      current_work: "",
      designation: "",
      experience: 0,
      pan_number: "",
      about: "",
      address: "",
      P_address: "",
      landmark: "",
      city: "",
      my_state: "",
      country: "",
      pincode: "",
      hasAgreed: false,
      step: 1
    };
  }

  componentDidMount() {
    if (localStorage.token) {
      const token = localStorage.token;
      const decode = jwt_decode(token);
      this.setState({
        _id: decode._id,
        first_name: decode.first_name,
        last_name: decode.last_name,
        email: decode.email,
        phoneNum: decode.phoneNum,
        father_name: decode.father_name,
        dob: decode.dob,
        gender: decode.gender,
        highschool_board: decode.highschool_board,
        percentage10: decode.percentage10,
        year_passing10: decode.year_passing10,
        intermediate_board: decode.intermediate_board,
        percentage12: decode.percentage12,
        year_passing12: decode.year_passing12,
        graduate_from: decode.graduate_from,
        graduate_year: decode.graduate_year,
        current_work: decode.current_work,
        designation: decode.designation,
        experience: decode.experience,
        pan_number: decode.pan_number,
        about: decode.about,
        address: decode.address,
        P_address: decode.P_address,
        landmark: decode.landmark,
        city: decode.city,
        my_state: decode.my_state,
        country: decode.country,
        pincode: decode.pincode
      });
    }
  }
  deleteAccount = e => {
    const id = this.state._id;
    axios
      .post("users/delete", { _id: id })
      .then(() => {
        console.log("User deleted");
        localStorage.removeItem("token");
        this.props.history.push("/login");
      })
      .catch(e => {
        console.log("Unable to delete the user");
      });
  };
  showCompleteDetails = e => {
    e.preventDefault();
    this.setState({ step: 3 });
  };
  submitCompleteDetails = e => {
    e.preventDefault();
    this.setState({ step: 2 });
  };
  logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/login");
  }
  render() {
    const { step } = this.state;
    const {
      first_name,
      last_name,
      email,
      phoneNum,
      father_name,
      dob,
      gender,
      highschool_board,
      percentage10,
      year_passing10,
      intermediate_board,
      percentage12,
      year_passing12,
      graduate_from,
      graduate_year,
      current_work,
      designation,
      experience,
      pan_number,
      about,
      address,
      P_address,
      landmark,
      city,
      my_state,
      country,
      pincode
    } = this.state;
    const values = {
      first_name,
      last_name,
      email,
      phoneNum,
      father_name,
      dob,
      gender,
      highschool_board,
      percentage10,
      year_passing10,
      intermediate_board,
      percentage12,
      year_passing12,
      graduate_from,
      graduate_year,
      current_work,
      designation,
      experience,
      pan_number,
      about,
      address,
      P_address,
      landmark,
      city,
      my_state,
      country,
      pincode
    };
    switch (step) {
      case 1: {
        return (
          <div>
            <div>
              <div className="my__div">
                <h1>PROFILE</h1>
              </div>
              <div className="userprofile">
                <table className="table table-striped ">
                  <tbody>
                    <tr>
                      <td>First Name</td>
                      <td>{this.state.first_name}</td>
                    </tr>
                    <tr>
                      <td>Last Name</td>
                      <td>{this.state.last_name}</td>
                    </tr>
                    <tr>
                      <td>E-Mail</td>
                      <td>{this.state.email}</td>
                    </tr>
                    <tr>
                      <td>Phone Number</td>
                      <td>{this.state.phoneNum}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                className="profile__buttons"
                onClick={this.showCompleteDetails}
              >
                HOME
              </button>
              <button
                className="profile__buttons"
                onClick={this.submitCompleteDetails}
              >
                EDIT PROFILE
              </button>
              <button
                onClick={this.logout.bind(this)}
                className="profile__buttons"
              >
                LOGOUT
              </button>
              <button onClick={this.deleteAccount} className="profile__buttons">
                REMOVE ACCOUNT
              </button>
            </div>
          </div>
        );
      }
      case 2: {
        return (
          <Main
            _id={this.state._id}
            first_name={this.state.first_name}
            last_name={this.state.last_name}
            phoneNum={this.state.phoneNum}
            email={this.state.email}
            father_name={this.state.father_name}
            dob={this.state.dob}
            gender={this.state.gender}
            highschool_board={this.state.highschool_board}
            percentage10={this.state.percentage10}
            year_passing10={this.state.year_passing10}
            intermediate_board={this.state.intermediate_board}
            percentage12={this.state.percentage12}
            year_passing12={this.state.year_passing12}
            graduate_from={this.state.graduate_from}
            graduate_year={this.state.graduate_year}
            current_work={this.state.current_work}
            designation={this.state.designation}
            experience={this.state.experience}
            pan_number={this.state.pan_number}
            about={this.state.about}
            address={this.state.address}
            P_address={this.state.P_address}
            landmark={this.state.landmark}
            city={this.state.city}
            my_state={this.state.my_state}
            country={this.state.country}
            pincode={this.state.pincode}
            history={this.props.history}
          />
        );
      }
      case 3: {
        return (
          <Userhome
            values={values}
            history={this.props.history}
            submitCompleteDetails={this.submitCompleteDetails}
          />
        );
      }
      default: {
        this.setState({ step: 1 });
      }
    }
  }
}
export default Profile;
