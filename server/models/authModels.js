const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  username: {
    type: "String",
    required: true,
    min: 6,
    max: 35,
  },
  password: {
    type: "String",
    required: true,
    max: 1024,
    min: 8,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  firstName: {
    type: "String",
    required: true,
    min: 6,
    max: 35,
  },
  lastName: {
    type: "String",
    min: 1,
    max: 35,
  },
});

module.exports = mongoose.model("register_table", authSchema);