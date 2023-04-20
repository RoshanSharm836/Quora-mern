const jwt = require("jsonwebtoken");
const secretKey = "jsdbajkbskjabdjbakdb";

const createtoken = async ({ email, name, _id }) => {
  const token = await jwt.sign({ email, name, _id }, secretKey);
  return token;
};

const verifytoken = async (token) => {
  try {
    const userver = await jwt.verify(token, secretKey);

    if (userver) {
      var decoded = jwt.decode(token);
      console.log("decoded");
      return userver._id;
    } else {
      new Error("Token Invalid");
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { createtoken, verifytoken };
// 63e1725a3bf5d6dd8d510a28
