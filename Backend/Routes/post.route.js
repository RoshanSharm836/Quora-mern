const express = require("express");
const post = require("../model/post.schema");
const postroutes = express.Router();

postroutes.get("/", async (req, res) => {
  try {
    const data = await post.find();
    console.log(data);
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
postroutes.post("/", async (req, res) => {
  try {
    const data = await post.create(req.body);
    console.log(req.body);
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
postroutes.delete("/", async (req, res) => {
  try {
    await post.deleteMany();
    // console.log(data);
    return res.status(200).send("deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = postroutes;
