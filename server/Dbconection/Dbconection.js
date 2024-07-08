const mongoose = require("mongoose");

const Dbconection = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/BloodDoner")
    .then(() => {
      console.log("Database Connectd to BloodDoner");
    })
    .catch((err) => {
      console.log("err", err);
    });
};

module.exports = { Dbconection };
