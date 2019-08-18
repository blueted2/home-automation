const storage = require("node-persist");

getDevices = () => {
  console.log("devices read");
  return storage.getItem("devices");
};

module.exports = getDevices;
