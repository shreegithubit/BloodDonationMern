const express = require("express");
const {
  handleCreateUser,
  handleLogInUser,
} = require("../Controller/registerControl");
const route = express();

route.put("/signup", handleCreateUser);
route.post("/login", handleLogInUser);

module.exports = route;
