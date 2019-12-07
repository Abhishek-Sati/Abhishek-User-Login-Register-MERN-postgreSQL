import React, { Component } from "react";
import "./App.css";
class Userhome extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.values;
  }
  logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/login");
  }
  render() {
    return (
      <div>
        <div className="my__div">
          <h2>HOME</h2>
        </div>
        <table className="table table-striped">
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
            <tr>
              <td>Father's Name</td>
              <td>{this.state.father_name}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{this.state.gender}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{this.state.dob}</td>
            </tr>
            <tr>
              <td>10th Board</td>
              <td>{this.state.highschool_board}</td>
            </tr>
            <tr>
              <td>10th Percentage</td>
              <td>{this.state.percentage10}</td>
            </tr>
            <tr>
              <td>10th Passing year</td>
              <td>{this.state.year_passing10}</td>
            </tr>
            <tr>
              <td>Intermediate Board</td>
              <td>{this.state.intermediate_board}</td>
            </tr>
            <tr>
              <td>Intermediate Percentage</td>
              <td>{this.state.percentage12}</td>
            </tr>
            <tr>
              <td>Intermediate passing year</td>
              <td>{this.state.year_passing12}</td>
            </tr>
            <tr>
              <td>College Name</td>
              <td>{this.state.graduate_from}</td>
            </tr>
            <tr>
              <td>Graduation year</td>
              <td>{this.state.graduate_year}</td>
            </tr>
            <tr>
              <td>Currenting Working in</td>
              <td>{this.state.current_work}</td>
            </tr>
            <tr>
              <td>Designation</td>
              <td>{this.state.designation}</td>
            </tr>
            <tr>
              <td>Experience(in years)</td>
              <td>{this.state.experience}</td>
            </tr>
            <tr>
              <td>PAN Number</td>
              <td>{this.state.pan_number}</td>
            </tr>
            <tr>
              <td>About Current work</td>
              <td>{this.state.about}</td>
            </tr>
            <tr>
              <td>Current Address</td>
              <td>{this.state.address}</td>
            </tr>
            <tr>
              <td>Permanent Address</td>
              <td>{this.state.P_address}</td>
            </tr>
            <tr>
              <td>Landmark</td>
              <td>{this.state.landmark}</td>
            </tr>
            <tr>
              <td>Pincode</td>
              <td>{this.state.pincode}</td>
            </tr>
            <tr>
              <td>District</td>
              <td>{this.state.city}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{this.state.my_state}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{this.state.country}</td>
            </tr>
          </tbody>
        </table>
        <button className="profile__buttons" onClick={this.logout.bind(this)}>
          LOGOUT
        </button>
      </div>
    );
  }
}

export default Userhome;
