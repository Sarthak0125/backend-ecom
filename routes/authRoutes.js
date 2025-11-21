const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  refreshToken,
  logout,
  signupAdmin,
} = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminOnly");

router.post("/signup", signup);
router.post("/login", login);
router.post("/refresh-token", refreshToken);
router.post("/logout", auth, logout);

router.post("/admin/signup", auth, adminOnly, signupAdmin);

router.get("/profile", auth, (req, res) => {
  res.json({ message: "This is a protected route", userId: req.userId });
});

module.exports = router;
