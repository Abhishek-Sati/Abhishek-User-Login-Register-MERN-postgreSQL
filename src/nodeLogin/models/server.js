const express = require("express");
const port = process.env.PORT;
const cors = require("cors");
const bp = require("body-parser");
const app = express();
app.use(bp.json());
app.use(cors());
app.use(
  bp.urlencoded({
    extended: false
  })
);
const users = require("../routes/users");
app.use("/users", users);
app.listen(port, () => {
  console.log("Connected to port " + port);
});
