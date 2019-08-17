const validateDevice = require("./validateDevice");
const getDevices = require("./getDevices.js");
const storage = require("node-persist");

addDevice = device => {
  return new Promise((resolve, reject) => {
    const validationError = validateDevice(device);
    if (validationError) {
      reject(validationError);
      return;
    }

    getDevices().then(devices => {
      if (devices.find(d => d.deviceId === device.deviceId)) {
        reject(Error("Already exists"));
      } else {
        devices.push(device);
        storage.setItem("devices", devices);
        resolve(device);
      }
    }).catch(() => {
      reject(Error("Error reading file"));
    });
  });
};

module.exports = addDevice;