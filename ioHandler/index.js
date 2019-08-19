function startSocketServer(server) {
  io = require("socket.io")(server);
  module.exports.io = io;
  require("./onConnection")(io);

  io.on("statusChange", (device) => {
    console.log("a");
  })
}

module.exports = {
  startSocketServer: startSocketServer,
  statusUpdate: require("./emitStatusChange"),
  emitStatusChange: emitStatusChange
};
