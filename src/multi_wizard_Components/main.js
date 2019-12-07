import React, { Component } from "react";
import Personal from "./personal";
import Professional from "./professional";
import Bussiness from "./bussiness";
import Address from "./address";
import axios from "axios";
import Userhome from "../userhome";
class Main extends Component {
  state = {
    step: 1,
    dataCompleted: false,
    _id: this.props._id,
    first_name: this.props.first_name,
    last_name: this.props.last_name,
    email: this.props.email,
    phoneNum: this.props.phoneNum,
    father_name: this.props.father_name,
    dob: this.props.dob,
    gender: this.props.gender,
    highschool_board: this.props.highschool_board,
    percentage10: this.props.percentage10,
    year_passing10: this.props.year_passing10,
    intermediate_board: this.props.intermediate_board,
    percentage12: this.props.percentage12,
    year_passing12: this.props.year_passing12,
    graduate_from: this.props.graduate_from,
    graduate_year: this.props.graduate_year,
    current_work: this.props.current_work,
    designation: this.props.designation,
    experience: this.props.experience,
    pan_number: this.props.pan_number,
    about: this.props.about,
    address: this.props.address,
    P_address: this.props.P_address,
    landmark: this.props.landmark,
    city: this.props.city,
    my_state: this.props.my_state,
    country: this.props.country,
    pincode: this.props.pincode
  };
  nextstep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  prevstep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    if (
      e.target.name === "pincode" &&
      e.target.value !== null &&
      e.target.value.length >= 5
    ) {
      axios
        .get(`https://api.postalpincode.in/pincode/${e.target.value}`)
        .then(res => {
          this.setState({
            city: res.data[0].PostOffice[0].District,
            country: res.data[0].PostOffice[0].Country,
            my_state: res.data[0].PostOffice[0].State
          });
        })
        .catch(e => {});
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    const userdetails = {
      _id: this.state._id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phoneNum: this.state.phoneNum,
      father_name: this.state.father_name,
      dob: this.state.dob,
      gender: this.state.gender,
      highschool_board: this.state.highschool_board,
      percentage10: this.state.percentage10,
      year_passing10: this.state.year_passing10,
      intermediate_board: this.state.intermediate_board,
      percentage12: this.state.percentage12,
      year_passing12: this.state.year_passing12,
      graduate_from: this.state.graduate_from,
      graduate_year: this.state.graduate_year,
      current_work: this.state.current_work,
      designation: this.state.designation,
      experience: this.state.experience,
      pan_number: this.state.pan_number,
      about: this.state.about,
      address: this.state.address,
      P_address: this.state.P_address,
      landmark: this.state.landmark,
      city: this.state.city,
      my_state: this.state.my_state,
      country: this.state.country,
      pincode: this.state.pincode
    };
    axios
      .post("users/completeDetails", {
        _id: userdetails._id,
        first_name: userdetails.first_name,
        last_name: userdetails.last_name,
        email: userdetails.email,
        phoneNum: userdetails.phoneNum,
        father_name: userdetails.father_name,
        dob: userdetails.dob,
        gender: userdetails.gender,
        highschool_board: userdetails.highschool_board,
        percentage10: userdetails.percentage10,
        year_passing10: userdetails.year_passing10,
        intermediate_board: userdetails.intermediate_board,
        percentage12: userdetails.percentage12,
        year_passing12: userdetails.year_passing12,
        graduate_from: userdetails.graduate_from,
        graduate_year: userdetails.graduate_year,
        current_work: userdetails.current_work,
        designation: userdetails.designation,
        experience: userdetails.experience,
        pan_number: userdetails.pan_number,
        about: userdetails.about,
        address: userdetails.address,
        P_address: userdetails.P_address,
        landmark: userdetails.landmark,
        city: userdetails.city,
        my_state: userdetails.my_state,
        country: userdetails.country,
        pincode: userdetails.pincode
      })
      .then(res => {
        this.setState({ dataCompleted: true, step: 5 });
      })
      .catch(e => {});
  };
  firstStep = e => {
    e.preventDefault();
    this.setState({ step: 1 });
  };
  secondStep = e => {
    e.preventDefault();
    this.setState({ step: 2 });
  };
  thirdStep = e => {
    e.preventDefault();
    this.setState({ step: 3 });
  };
  fourthStep = e => {
    e.preventDefault();
    this.setState({ step: 4 });
  };
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
          <Personal
            nextstep={this.nextstep}
            handleChange={this.handleChange}
            values={values}
            secondStep={this.secondStep}
            thirdStep={this.thirdStep}
            fourthStep={this.fourthStep}
          />
        );
      }
      case 2: {
        return (
          <Professional
            nextstep={this.nextstep}
            handleChange={this.handleChange}
            prevstep={this.prevstep}
            values={values}
            firstStep={this.firstStep}
            thirdStep={this.thirdStep}
            fourthStep={this.fourthStep}
          />
        );
      }
      case 3: {
        return (
          <Bussiness
            nextstep={this.nextstep}
            handleChange={this.handleChange}
            prevstep={this.prevstep}
            values={values}
            firstStep={this.firstStep}
            secondStep={this.secondStep}
            fourthStep={this.fourthStep}
          />
        );
      }
      case 4: {
        return (
          <Address
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            prevstep={this.prevstep}
            values={values}
            firstStep={this.firstStep}
            secondStep={this.secondStep}
            thirdStep={this.thirdStep}
          />
        );
      }
      case 5: {
        return (
          <Userhome
            history={this.props.history}
            values={values}
            submitCompleteDetails={this.props.submitCompleteDetails}
          />
        );
      }
      default: {
        this.setState({ step: 1 });
      }
    }
  }
}

export default Main;
