// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   const header = req.headers.authorization;
//   if (!header || !header.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Unauthorized no token provided" });
//   }
//   const token = header.split(" ")[1];
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
//     req.userId = {  id: decoded.id, role: decoded.role };
//     next();
//   } catch (e) {
//     return res.status(401).json({ message: "Invalid token or expired" });
//   }
// };
