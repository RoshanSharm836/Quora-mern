const express = require("express");
const comment = require("../model/comment.model");
const commentRoute = express.Router();

commentRoute.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  try {
    console.log(postId);
    const data = await comment
      .find({ post_id: postId })
      .sort({ createdAt: -1 });
    console.log("comet", data);
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
commentRoute.post("/", async (req, res) => {
  console.log(req.body);
  try {
    var obj = {
      comment: req.body.content,
      user_id: req.body.userID,
      username: req.body.username,
      post_id: req.body.postId,
    };
    const data = await comment.create(obj);
    console.log(data);
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = commentRoute;
