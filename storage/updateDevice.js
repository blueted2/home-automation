const validateDevice = require("./validateDevice");
const getDevices = require("./getDevices.js");
const storage = require("node-persist");
const merge = require("lodash.merge");

updateDevice = (deviceId, newDevice) => {
  const ioHandler = require("../ioHandler");
  return new Promise((resolve, reject) => {
    getDevice(deviceId)
      .then(oldDevice => {
        const updatedDevice = merge(oldDevice, newDevice);
        const validationError = validateDevice(updatedDevice);

        if (validationError) {
          reject(validationError);
          return;
        }

        getDevices()
          .then(devices => {
            devices[devices.findIndex(d => d.deviceId === deviceId)] = updatedDevice;
            storage.setItem("devices", devices);
            var device = newDevice;
            newDevice.deviceId = deviceId;

            if (newDevice.status) {
              ioHandler.emitStatusChange({
                deviceId: deviceId,
                status: newDevice.status
              });
            } else {
              ioHandler.emitConfigChange(newDevice);
            }

            resolve(updatedDevice);
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

module.exports = updateDevice;
