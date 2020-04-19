const app = require("express").Router();
const workout = require("../models/workout");

app.get("/api/workouts", function (req, res) {
  workout
    .find({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log("An error has occurred"), err;
    });
});

app.get("/api/workouts/stats", function (req, res) {
  workout
    .find({})
    .then(function (data) {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/workouts", function ({ body }, res) {
  console.log("adding a new workout for you!");
  workout
    .create(body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
  workout
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.put("/api/workouts/:id", function (req, res) {
  workout
    .findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    )
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
module.exports = app;
