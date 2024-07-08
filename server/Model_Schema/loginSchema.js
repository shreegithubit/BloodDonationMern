const mongoose = require("mongoose");
const loginSchema = mongoose.Schema(
  {
    username: { type: String },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String },
  },
  { timestamp: true }
);

const LoginModel = mongoose.model("LoginUsers", loginSchema);

module.exports = { LoginModel };
