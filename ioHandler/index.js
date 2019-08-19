function startSocketServer(server) {
  io = require("socket.io")(server);
  module.exports.io = io;
  require("./onConnection")(io);
}

module.exports = {
  startSocketServer: startSocketServer,
  addNamepaceListener: require("./addNamespaceListener"),
  statusUpdate: require("./emitStatusChange"),
  emitStatusChange: emitStatusChange
};
