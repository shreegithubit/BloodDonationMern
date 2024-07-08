const express = require("express");
const {
  handleGetdata,
  handelCreatedata,
} = require("../Controller/CrudControl");
const route = express.Router();

route.get("/collectData", handleGetdata);
route.put("/createData", handelCreatedata);

module.exports = route;
