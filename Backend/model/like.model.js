const mongoose = require("mongoose");

const likesSchema = new mongoose.Schema(
  {
    user_id: String,
    post_id: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const likes = mongoose.model("likes", likesSchema);
module.exports = likes;
