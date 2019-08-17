const storage = require("node-persist");

clearDevices = confirmation => {
  if (confirmation === "1234") {
    storage.setItem("devices", []);
  }
};

module.exports = clearDevices();
