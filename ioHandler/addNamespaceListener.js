addNamespaceListener = device => {
  const ioHandler = require(".");
  io = ioHandler.io;
  if (!io.nsps[device.deviceId]) {
    console.log(`Adding new namespace: ${device.deviceId}`);
    io.of("/" + device.deviceId);
  }
};

module.exports = addNamespaceListener;
