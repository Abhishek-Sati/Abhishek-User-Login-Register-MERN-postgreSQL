import React, { Component } from "react";
import Personal from "./personal";
import Professional from "./professional";
import Bussiness from "./bussiness";
import Address from "./address";
import axios from "axios";
import Userhome from "../userhome";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      pincode: this.props.pincode,
      emailError: false,
      errorPersonal: "",
      errorProfessional: "",
      errorBussiness: "",
      errorAddress: ""
    };
  }
  logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({
      emailError: false,
      errorPersonal: "",
      errorProfessional: "",
      errorBussiness: "",
      errorAddress: ""
    });
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
    if (
      e.target.name === "email" &&
      e.target.value !== null &&
      e.target.value !== "" &&
      e.target.value.includes("@") &&
      e.target.value !== this.props.email
    ) {
      axios
        .post("users/checkEmail", {
          email: e.target.value
        })
        .then(res => {
          if (res.data.error) {
            this.setState({ emailError: true });
          } else {
            this.setState({ emailError: false });
          }
        })
        .catch(e => {
          console.log("Connection to the api failed");
        });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    let validateAddress = this.validateAddressInfo();
    if (validateAddress) {
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
    } else {
      this.setState({
        errorAddress: "Please ! Complete the address details with valid input"
      });
    }
  };
  validPersonalInfo = () => {
    if (this.state.first_name === "" || this.state.first_name === null) {
      return false;
    }
    if (this.state.last_name === "" || this.state.last_name === null) {
      return false;
    }
    if (
      this.state.email === "" ||
      this.state.email === null ||
      !this.state.email.includes("@")
    ) {
      return false;
    }
    if (this.state.emailError) {
      return false;
    }
    if (
      isNaN(this.state.phoneNum) ||
      this.state.phoneNum === "" ||
      this.state.phoneNum === null
    ) {
      return false;
    }
    if (this.state.father_name === "") {
      return false;
    }
    if (this.state.dob === null || this.state.dob === "") {
      return false;
    }
    if (
      this.state.gender === "" ||
      this.state.gender === null ||
      (this.state.gender.toUpperCase() !== "MALE" &&
        this.state.gender.toUpperCase() !== "FEMALE")
    ) {
      return false;
    } else {
      return true;
    }
  };
  validProfessionalInfo = () => {
    if (
      this.state.highschool_board === null ||
      this.state.highschool_board === ""
    ) {
      return false;
    }
    if (
      isNaN(this.state.percentage10) ||
      this.state.percentage10 === null ||
      this.state.percentage10 === "" ||
      this.state.percentage10 > 100
    ) {
      return false;
    }
    if (
      isNaN(this.state.year_passing10) ||
      this.state.year_passing10 === null ||
      this.state.year_passing10 === ""
    ) {
      return false;
    }
    if (
      this.state.intermediate_board === null ||
      this.state.intermediate_board === ""
    ) {
      return false;
    }
    if (
      isNaN(this.state.percentage12) ||
      this.state.percentage12 === null ||
      this.state.percentage12 === "" ||
      this.state.percentage12 > 100
    ) {
      return false;
    }
    if (
      isNaN(this.state.year_passing12) ||
      this.state.year_passing12 === null ||
      this.state.year_passing12 === ""
    ) {
      return false;
    }
    if (this.state.graduate_from === null || this.state.graduate_from === "") {
      return false;
    }
    if (
      isNaN(this.state.graduate_year) ||
      this.state.graduate_year === null ||
      this.state.graduate_year === ""
    ) {
      return false;
    } else {
      return true;
    }
  };
  validateBussinessInfo = () => {
    if (this.state.current_work === "" || this.state.current_work === null) {
      return false;
    }
    if (this.state.designation === "" || this.state.designation === null) {
      return false;
    }
    if (
      this.state.experience === "" ||
      this.state.experience === null ||
      isNaN(this.state.experience)
    ) {
      return false;
    }
    if (this.state.pan_number === "" || this.state.pan_number === null) {
      return false;
    }
    if (this.state.about === "" || this.state.about === null) {
      return false;
    }
    return true;
  };
  validateAddressInfo = () => {
    if (this.state.address === null || this.state.address === "") {
      return false;
    }
    if (this.state.P_address === null || this.state.P_address === "") {
      return false;
    }
    if (this.state.landmark === null || this.state.landmark === "") {
      return false;
    }
    if (
      this.state.pincode === null ||
      this.state.pincode === "" ||
      isNaN(this.state.pincode) ||
      this.state.pincode.length < 5
    ) {
      return false;
    }
    if (this.state.city === null || this.state.city === "") {
      return false;
    }
    if (this.state.state === null || this.state.state === "") {
      return false;
    }
    if (this.state.country === null || this.state.country === "") {
      return false;
    }
    return true;
  };
  firstStep = e => {
    e.preventDefault();
    let validPersonal = this.validPersonalInfo();
    if (validPersonal) {
      this.setState({ step: 1 });
    } else {
      this.setState({
        errorPersonal: "Please ! Complete the personal details with valid input"
      });
    }
  };
  secondStep = e => {
    e.preventDefault();
    let validPersonal = this.validPersonalInfo();
    if (validPersonal) {
      this.setState({ step: 2 });
    } else {
      this.setState({
        errorPersonal: "Please ! Complete the personal details with valid input"
      });
    }
  };
  thirdStep = e => {
    e.preventDefault();
    let validPersonal = this.validPersonalInfo();
    let validProfessional = this.validProfessionalInfo();
    if (validProfessional && validPersonal) {
      this.setState({ step: 3 });
    } else {
      this.setState({
        errorProfessional:
          "Please ! Complete the professional details with valid input"
      });
    }
  };
  fourthStep = e => {
    e.preventDefault();
    let validPersonal = this.validPersonalInfo();
    let validProfessional = this.validProfessionalInfo();
    let validateBussiness = this.validateBussinessInfo();
    if (validPersonal && validProfessional && validateBussiness) {
      this.setState({ step: 4 });
    } else {
      this.setState({
        errorBussiness:
          "Please ! Complete the bussiness details with valid input"
      });
    }
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
      pincode,
      errorPersonal,
      errorProfessional,
      errorBussiness,
      errorAddress,
      emailError
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
      pincode,
      errorPersonal,
      errorProfessional,
      errorBussiness,
      errorAddress,
      emailError
    };
    switch (step) {
      case 1: {
        return (
          <Personal
            handleChange={this.handleChange}
            values={values}
            secondStep={this.secondStep}
            thirdStep={this.thirdStep}
            fourthStep={this.fourthStep}
            logout={this.logout}
          />
        );
      }
      case 2: {
        return (
          <Professional
            handleChange={this.handleChange}
            values={values}
            firstStep={this.firstStep}
            thirdStep={this.thirdStep}
            fourthStep={this.fourthStep}
            logout={this.logout}
          />
        );
      }
      case 3: {
        return (
          <Bussiness
            handleChange={this.handleChange}
            values={values}
            firstStep={this.firstStep}
            secondStep={this.secondStep}
            fourthStep={this.fourthStep}
            logout={this.logout}
          />
        );
      }
      case 4: {
        return (
          <Address
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            values={values}
            firstStep={this.firstStep}
            secondStep={this.secondStep}
            thirdStep={this.thirdStep}
            logout={this.logout}
          />
        );
      }
      case 5: {
        return <Userhome values={values} logout={this.logout} />;
      }
      default: {
        this.setState({ step: 1 });
      }
    }
  }
}

export default Main;
