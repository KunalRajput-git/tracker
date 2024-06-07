require("dotenv").config();
const APIID = Number(process.env.TELEGRAM_API_ID);
const APIHASH = process.env.TELEGRAM_API_HASH;
const SESSIONSTRING = process.env.SESSIONSTRING;
const SELFPING_CRON_EXPRESSION = "*/10 * * * *";
const USER_ID = "+919315068278" || 7289962164n;
const PORT = process.env.PORT || 4000;
const SELF_PING_URL = "https://tracker-gkny.onrender.com";

module.exports = {
  APIID,
  APIHASH,
  SESSIONSTRING,
  USER_ID,
  SELFPING_CRON_EXPRESSION,
  SELF_PING_URL,
  PORT,
};
