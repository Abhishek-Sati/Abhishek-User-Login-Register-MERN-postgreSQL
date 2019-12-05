const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
users.use(cors());
process.env.SECRET_KEY = "abhishekuserloginregister";
users.post("/register", (req, res) => {
  const userdata = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phoneNum: req.body.phoneNum,
    password: req.body.password
  };
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (!user) {
      bcrypt.hash(req.body.password, 8, (err, hash) => {
        userdata.password = hash;
        User.create(userdata)
          .then(user => {
            res.json({ status: user.email + "registered" });
          })
          .catch(e => {
            res.json({ incompleteDetails: "details incomplete" });
          });
      });
    } else {
      res.json({ error: "User already exists" });
    }
  });
});
users.post("/login", (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const olduser = {
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          phoneNum: user.phoneNum,
          father_name: user.father_name,
          dob: user.dob,
          gender: user.gender,
          highschool_board: user.highschool_board,
          percentage10: user.percentage10,
          year_passing10: user.year_passing10,
          intermediate_board: user.intermediate_board,
          percentage12: user.percentage12,
          year_passing12: user.year_passing12,
          graduate_from: user.graduate_from,
          graduate_year: user.graduate_year,
          current_work: user.current_work,
          designation: user.designation,
          experience: user.experience,
          pan_number: user.pan_number,
          about: user.about,
          address: user.address,
          P_address: user.P_address,
          landmark: user.landmark,
          city: user.city,
          my_state: user.my_state,
          country: user.country,
          pincode: user.pincode
        };
        let token = jwt.sign(olduser, process.env.SECRET_KEY, {
          expiresIn: 1440
        });
        res.send(token);
      } else {
        res.json({ error: "password did not match" });
      }
    })
    .catch(e => {
      res.json({ error: "User is not registered" });
    });
});
users.post("/completeDetails", (req, res) => {
  User.findByIdAndUpdate(
    {
      _id: req.body._id
    },
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phoneNum: req.body.phoneNum,
      father_name: req.body.father_name,
      dob: req.body.dob,
      gender: req.body.gender,
      highschool_board: req.body.highschool_board,
      percentage10: req.body.percentage10,
      year_passing10: req.body.year_passing10,
      intermediate_board: req.body.intermediate_board,
      percentage12: req.body.percentage12,
      year_passing12: req.body.year_passing12,
      graduate_from: req.body.graduate_from,
      graduate_year: req.body.graduate_year,
      current_work: req.body.current_work,
      designation: req.body.designation,
      experience: req.body.experience,
      pan_number: req.body.pan_number,
      about: req.body.about,
      address: req.body.address,
      P_address: req.body.P_address,
      landmark: req.body.landmark,
      city: req.body.city,
      my_state: req.body.my_state,
      country: req.body.country,
      pincode: req.body.pincode
    },
    err => {
      if (err) {
        res.json({ error: "cannot update" });
      } else {
        res.json({ success: "updated" });
      }
    }
  )
    .then(user => {
      return user;
    })
    .catch(e => {
      console.log("error" + e);
    });
});
module.exports = users;
