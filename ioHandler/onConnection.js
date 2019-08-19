const storage = require("../storage");

onConnection = io => {
  io.on("connection", socket => {
    storage.getDevices().then(devices => {
      socket.emit("initialize", devices);
      require("./onStatusChange")(socket);
    });
  });
};

module.exports = onConnection;
