const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const signup = mongoose.model("signup", signupSchema);
module.exports = signup;
