const express = require("express");
const connection = require("./config/db");
const loginroutes = require("./Routes/login.routes");
const signuproutes = require("./Routes/signup.routes");
const cors = require("cors");
const postroutes = require("./Routes/post.route");
const commentRoute = require("./Routes/comment.route");
const likesRoute = require("./Routes/like.route");
const PORT = process.env.PORT || 3059;
const app = express();

app.use(cors());
app.use(express.json()); //very important
app.use(express.urlencoded({ extended: true })); //very important

// app.use("/api", loginroutes);
app.use("/user/login", loginroutes);
app.use("/user/register", signuproutes);
app.use("/post", postroutes);
app.use("/post/comment", commentRoute);
app.use(`/post/like`, likesRoute);

app.listen(PORT, () => {
  connection();
  console.log("server started", PORT);
});
