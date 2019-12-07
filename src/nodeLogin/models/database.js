const Sequelize = require("sequelize");
const sequelize = new Sequelize("userloginreg", "postgres", "abhi01sati", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
const User = sequelize.define(
  "user",
  {
    _id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    first_name: {
      type: Sequelize.STRING,
      required: true
    },
    last_name: {
      type: Sequelize.STRING,
      required: true
    },
    email: {
      type: Sequelize.STRING,
      required: true
    },
    phoneNum: {
      type: Sequelize.BIGINT,
      required: true
    },
    password: {
      type: Sequelize.STRING,
      required: true
    },
    father_name: {
      type: Sequelize.STRING
    },
    dob: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    highschool_board: {
      type: Sequelize.STRING
    },
    percentage10: {
      type: Sequelize.INTEGER
    },
    year_passing10: {
      type: Sequelize.INTEGER
    },
    intermediate_board: {
      type: Sequelize.STRING
    },
    percentage12: {
      type: Sequelize.INTEGER
    },
    year_passing12: {
      type: Sequelize.INTEGER
    },
    graduate_from: {
      type: Sequelize.STRING
    },
    graduate_year: {
      type: Sequelize.INTEGER
    },
    current_work: {
      type: Sequelize.STRING
    },
    designation: {
      type: Sequelize.STRING
    },
    experience: {
      type: Sequelize.INTEGER
    },
    pan_number: {
      type: Sequelize.STRING
    },
    about: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    P_address: {
      type: Sequelize.STRING
    },
    landmark: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    my_state: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    pincode: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to database is successfull");
  })
  .catch(e => {
    console.log("Connection to database is failed");
  });
sequelize
  .sync({
    force: false,
    alter: true,
    logging: console.log
  })
  .then(() => {
    console.log("Connected to postgreSQL database");
  })
  .catch(e => {
    console.log("Cant connect to database");
  });

module.exports = User;
