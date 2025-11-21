const jwt = require("jsonwebtoken");

exports.generateAccessToken = (userId) => {
  return jwt.sign(
    { id: userId, role: userId.role },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: "15m",
    }
  );
};

exports.generateRefreshToken = (userId) => {
  return jwt.sign(
    { id: userId, role: userId.role },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: "7d",
    }
  );
};
