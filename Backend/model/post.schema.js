const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    date: String,
    description: String,
    image: String,
    username: String,
    name: String,
    category: String,
    heading: String,
    body: String,
    author: String,
    upvotes: Number,
    postid: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const post = mongoose.model("post", postSchema);
module.exports = post;
