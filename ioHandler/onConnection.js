const storage = require("../storage");

onConnection = io => {
  io.on("connection", socket => {
    storage
      .getDevices()
      .then(devices => {
        socket.emit("initialize", devices);
        require("./onStatusChange")(socket);
        require("./onControllerConnection")(socket);
      })
      .catch(error => {
        console.log(error);
      });
  });
};

module.exports = onConnection;
