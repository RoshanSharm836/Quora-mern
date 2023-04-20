const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);
const connection = (mongoose.connection = async () => {
  await mongoose.connect(process.env.DataBase_url);
});

module.exports = connection;
