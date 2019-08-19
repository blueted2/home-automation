const storage = require("node-persist");

getDevices = () => {
  return storage.getItem("devices");
};

module.exports = getDevices;
