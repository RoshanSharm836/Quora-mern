const { body, validationResult } = require("express-validator");

module.exports = post_credit_check = [
  body("first_name").exists().isString(),
  body("last_name").exists().isString(),
  body("class").exists().isNumeric(),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
