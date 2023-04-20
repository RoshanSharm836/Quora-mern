const express = require("express");
const likes = require("../model/like.model");
// const likes = require("../model/likes.model");
const likesRoute = express.Router();

likesRoute.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  try {
    console.log(postId);
    const data = await likes.find({ post_id: postId });
    console.log("comet", data);
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
likesRoute.post("/", async (req, res) => {
  const check = await likes.find({
    post_id: req.body.postId,
    user_id: req.body.userID,
  });
  try {
    // console.log(req.body);
    var obj = {
      user_id: req.body.userID,
      post_id: req.body.postId,
    };
    console.log("check", check.length);
    if (check.length === 0) {
      const data = await likes.create(obj);
      console.log("avdhvd", data);
      return res.status(200).send("likes added");
    } else {
      res.status(401).send(false);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = likesRoute;
