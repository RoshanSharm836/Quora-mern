const express = require("express");
const bcrypt = require("bcryptjs");
const login = require("../model/login.schema");
const signup = require("../model/signup.schema");

const { createtoken, verifytoken } = require("../middleware/token.middleware");
const loginroutes = express.Router();

// compareing password

loginroutes.get("/header", async (req, res) => {
  try {
    console.log("kjabsdjks");
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    console.log(token);
    const verify = await verifytoken(token);
    console.log(verify);
    if (verify) {
      const data = await signup.findById({ _id: verify });
      return res.status(200).send({
        data: { name: data.name, email: data.email, id: data._id },
        auth: true,
      });
    } else {
      return res.status(401).send({ message: "token invalid", auth: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});
loginroutes.get("/auth", async (req, res) => {
  try {
    const data = await signup.find();
    console.log(data);
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

loginroutes.post("/auth", async (req, res) => {
  //login
  const emails = req.body.email;
  const passwords = req.body.password;
  // console.log(emails, passwords);
  try {
    // console.log(req.body);

    const data = await signup.findOne({ email: emails });
    if (!data) {
      console.log("invalid gmail");
      return res.status(401).send({ message: "invalid userID or Password" });
    }
    const hash = await bcrypt.compare(passwords, data.password); // important
    if (hash) {
      console.log("first");
      const token = await createtoken(data);
      return res.status(200).send({ token: token, auth: true });
    } else {
      console.log("invalid userID or Password");
      return res.status(401).send({ message: "invalid userID or Password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

module.exports = loginroutes;
