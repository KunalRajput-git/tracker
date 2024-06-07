const {
  PORT,
  SELFPING_CRON_EXPRESSION,
  SELF_PING_URL,
} = require("./constants");
const cron = require("node-cron");
const express = require("express");
const trackStatus = require("./trackStatus");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const selfPing = cron.schedule(
  SELFPING_CRON_EXPRESSION,
  async () => {
    await axios.get(SELF_PING_URL);
  },
  {
    timezone: "Asia/Calcutta",
  }
);

app.listen(PORT, () => {
  selfPing.start();
  trackStatus();
});
