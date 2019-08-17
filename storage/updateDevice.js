const validateDevice = require("./validateDevice");
const getDevices = require("./getDevices.js");
const storage = require("node-persist");
const merge = require('lodash.merge');

updateDevice = (deviceId, newDevice) => {
  return new Promise((resolve, reject) => {
    getDevice(deviceId).then((oldDevice) => {
      const updatedDevice = merge(oldDevice, newDevice);
      const validationError = validateDevice(updatedDevice);
      if(validationError){
        reject(validationError);
      }else{
        getDevices().then((devices) => {
          devices[devices.indexOf(oldDevice)] = updatedDevice;
          resolve(updatedDevice);
        });
      }

    }).catch((error) => {
      reject(error);
    });

  });
};

module.exports = updateDevice;