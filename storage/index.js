const storage = require("node-persist");

(async () => {
  storage.init();
})();

module.exports = {
  addDevice: require("./addDevice"),
  deviceSchema: require("./deviceSchema"),
  getDevice: require("./getDevice"),
  getDevices: require("./getDevices"),
  removeDevice: require("./removeDevice"),
  validateDevice: require("./validateDevice"),
  clearDevices: require("./clearDevices"),
  updateDevice: require("./updateDevice")
};