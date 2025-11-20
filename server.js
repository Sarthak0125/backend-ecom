const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const dbConnect = require("./db");
dbConnect();

app.get("/api/hello", (req, res) => {
  const hello = "Hello from the backend!";
  res.send(hello);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
