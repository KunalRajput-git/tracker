const { PORT } = require("./constants");

const express = require("express");
const trackStatus = require("./trackStatus");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  trackStatus();
});
