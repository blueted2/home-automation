


function startSocketServer(server) {
  io = require("socket.io")(server);
  module.exports.io = io;
  require("./statusChangeListener")(io);
  require("./onConnection")(io);
}

module.exports = {
  startSocketServer: startSocketServer,
  addNamepaceListener: require("./addNamespaceListener"),
  updateDevice: require("./updateDevice").updateDevice,
};
