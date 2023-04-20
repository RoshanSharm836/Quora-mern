const bcrypt = require("bcryptjs");

module.exports = async function securedPassword(req, res, next) {
  const hash = await bcrypt.hash(req.body.password, 4);
  console.log(hash); //new password
  req.body.password = hash; // then updating password with hash
  next();
};

/////////////////////////////////////////////////////////////
// module.exports = async function comparePassword(req, res, next) {
//   const hash = await bcrypt.hash(req.body.password, 4);
//   console.log(hash); //new password
//   req.body.password = hash; // then updating password with hash
//   next();
// };
