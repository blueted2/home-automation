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
    console.log(socket.id);
  });
};

module.exports = addNamespaceListener;
