const { User } = require('../models/User');
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.cookies.x_auth;
  jwt.verify(token, "secretToken", (err, decoded) => {
    if (err) throw err;
    User.findOne({ _id: decoded, token: token }, (err, user) => {
      if (err) return res.json({ success: false, err });
      if (!user) return res.json({ isAuth: false, error: true });
      req.token = token;
      req.user = user;
      next();
    });
  });
};
    //유저가 있으면 인증 Okay
    //유저가 없으면 인증 No!

    module.exports = { auth };