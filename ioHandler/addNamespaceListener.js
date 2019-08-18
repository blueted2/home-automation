addNamespaceListener = device => {
  const id = device.deviceId;
  const path = "/" + id;
  const ioHandler = require(".");
  io = ioHandler.io;
  if (io.nsps[id]) {
    return;
  }

  console.log(`Adding new namespace: ${path}`);
  io.of(path);
};

module.exports = addNamespaceListener;
