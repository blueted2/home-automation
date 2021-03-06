const storage = require("node-persist");

module.exports = {
  addDevice: require("./addDevice"),
  deviceSchema: require("./deviceSchema"),
  getDevice: require("./getDevice"),
  getDevices: require("./getDevices"),
  removeDevice: require("./removeDevice"),
  validateDevice: require("./validateDevice"),
  clearDevices: require("./clearDevices"),
  updateDevice: require("./updateDevice"),
  setAllASDisconnected: require("./setAllASDisconnected")
};

