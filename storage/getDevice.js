const getDevices = require("./getDevices");

getDevice = deviceId => {
  return new Promise((resolve, reject) => {
    getDevices().then(devices => {
      const device = devices.find(d => d.deviceId === deviceId);  
      if (device) {
        resolve(device);
      } else {
        reject(Error("Device does not exist."));
      }
    }).catch(() => {
      reject(Error("Error reading file"));
    });
  });
};

module.exports = getDevice;
