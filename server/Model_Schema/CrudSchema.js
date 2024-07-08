const mongoose = require("mongoose");

const donerDetailSchema = new mongoose.Schema(
  {
    name: { required: true, type: String },
    bloodgroup: { required: true, type: String },
    date: { required: true, type: Date },
    location: { required: true, type: String },
    gender: { required: true, type: String },
    email: { required: true, type: String, unique: true },
  },
  { timestamps: true }
);

const donerDetail = mongoose.model("donerDetail", donerDetailSchema);

module.exports = { donerDetail };
