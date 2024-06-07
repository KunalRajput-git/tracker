const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const { APIID, APIHASH, SESSIONSTRING, USER_ID } = require("./constants");
const stringSession = new StringSession(SESSIONSTRING);

const trackStatus = async () => {
  const client = new TelegramClient(stringSession, APIID, APIHASH, {
    connectionRetries: 5,
  });

  await client.connect();
  let isNotified = false;
  setInterval(async () => {
    try {
      const user = await client.getEntity(USER_ID);
      const status = user.status;

      if (status.className === "UserStatusOnline") {
        if (!isNotified) {
          console.log(`sania is Online, ${new Date().toLocaleTimeString()}`);
        }
        isNotified = true;
      } else {
        const lastSeenDate = new Date(
          status.wasOnline * 1000
        ).toLocaleTimeString();
        console.log(`sania is offline, last seen at ${lastSeenDate}`);
        isNotified = false;
      }
    } catch (error) {
      console.error("Error fetching user status:", error);
    }
  }, 10000);
};

module.exports = trackStatus;
