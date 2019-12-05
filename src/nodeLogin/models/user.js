const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNum: {
    type: Number,
    required: true
  },
  father_name: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  dob: {
    type: String
  },
  gender: {
    type: String
  },
  highschool_board: {
    type: String
  },
  percentage10: {
    type: Number
  },
  year_passing10: {
    type: Number
  },
  intermediate_board: {
    type: String
  },
  percentage12: {
    type: Number
  },
  year_passing12: {
    type: Number
  },
  graduate_from: {
    type: String
  },
  graduate_year: {
    type: Number
  },
  current_work: {
    type: String
  },
  designation: {
    type: String
  },
  experience: {
    type: Number
  },
  pan_number: {
    type: String
  },
  about: {
    type: String
  },
  address: {
    type: String
  },
  P_address: {
    type: String
  },
  landmark: {
    type: String
  },
  city: {
    type: String
  },
  my_state: {
    type: String
  },
  country: {
    type: String
  },
  pincode: {
    type: Number
  }
});
const User = mongoose.model("users", UserSchema);
module.exports = User;
