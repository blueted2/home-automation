function startSocketServer(server) {
  require("../storage").setAllASDisconnected();
  console.log("Starting socket server");
  io = require("socket.io")(server, { pingInterval: 6000, pingTimeout: 5000 });
  module.exports.io = io;
  require("./onConnection")(io);
  require("./onControllerConnection")(io);
}

module.exports = {
  startSocketServer: startSocketServer,
  statusUpdate: require("./emitStatusChange"),
  emitStatusChange: emitStatusChange
};
