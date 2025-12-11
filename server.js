const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();
const User = require("./models/e-commerce/user.models")
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/category")
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const dbConnect = require("./db");
dbConnect();

app.use(cors({
  origin: "http://localhost:5173", // frontend URL
    credentials: true,
}))

app.get("/api/hello", (req, res) => {
  const hello = "Hello from the backend!";
  res.send(hello);
});
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes); 
// Bootstrap an admin user if none exists
(async function bootstrapAdmin() {
  try {
    const bootstrapEmail = process.env.ADMIN_BOOTSTRAP_EMAIL;
    const bootstrapPassword = process.env.ADMIN_BOOTSTRAP_PASSWORD;
    if (bootstrapEmail && bootstrapPassword) {
      const existingAdmin = await User.findOne({ role: "admin" });
      if (!existingAdmin) {
        const admin = new User({
          username: "admin",
          email: bootstrapEmail,
          password: bootstrapPassword,
          role: "admin",
        });
        await admin.save();
        console.log("Bootstrapped admin:", bootstrapEmail);
      }
    }
  } catch (err) {
    console.error("bootstrap error", err);
  }
})();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
