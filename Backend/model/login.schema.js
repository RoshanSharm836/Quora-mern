const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const login = mongoose.model("login", loginSchema);
module.exports = login;
