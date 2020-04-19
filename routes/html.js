var path = require("path");
const app = require("express").Router();

app.get("/", (req, res) => {
  console.log("getting homepage");
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/exercise", (req, res) => {
  console.log("getting your exercises");
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

app.get("/stats", (req, res) => {
  console.log("getting your stats");
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = app;
