const updateDevice = require("./updateDevice");
const getDevices = require("./getDevices");
const storage = require("node-persist");

setAllAsDisconnected = () => {
  getDevices()
    .then(devices => {
      for (var i = 0; i < devices.length; i++) {
        devices[i].connected = false;
      }

      storage.setItem("devices", devices);
    })
    .catch(error => {
      reject(error);
    });
};

module.exports = setAllAsDisconnected;
