const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/will", (req, res) => {
  res.send("Hello world");
});
app.get("/ready", (req, res) => {
  res.send("It works!!!!");
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
