const storage = require("../storage");

onConnection = io => {
  io.on("connection", socket => {
    storage.getDevices().then(devices => {
      socket.emit("initialize", devices);
      require("./statusChangeListener")(socket);
    });
  });
};

module.exports = onConnection;
