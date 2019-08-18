const storage = require("../storage");

addNamespaceListener = device => {
  const id = device.deviceId;
  const path = "/" + id;
  const ioHandler = require(".");
  io = ioHandler.io;
  if (!io.nsps[id]) {
    console.log(`Adding new namespace: ${path}`);
    new_nsp = io.of(path);
  }

  new_nsp.on("connection", socket => {
    storage.getDevices().then(devices => {
      device = devices.find(c => {
        return c.deviceId === id;
      });

      if (device) {
        socket.emit("update", device);
        console.log(`Sent device: ${device.config.name}`);
      }
    });
  });
};

module.exports = addNamespaceListener;
