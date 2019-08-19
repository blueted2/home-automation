const storage = require("../storage");

onConnection = (io) => {
  io.on("connection", (socket) => {
    storage.getDevices().then((devices) => {
      socket.emit("initialize", devices);
    })
  })
}

module.exports = onConnection;