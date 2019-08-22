const getDevices = require("./getDevices");
const getDevice = require("./getDevice");
const storage = require("node-persist");

removeDevice = deviceId => {
  return new Promise((resolve, reject) => {
    getDevice(deviceId)
      .then(device => {
        getDevices()
          .then(devices => {
            new_devices = devices.filter(d => d.deviceId !== deviceId);
            console.log(new_devices);
            storage.setItem("devices", new_devices);
            resolve(device);
          })
          .catch(error => {
            reject(error);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports = removeDevice;
