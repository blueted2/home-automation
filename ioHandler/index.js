const storage = require("../storage");


function startSocketServer(server) {
  io = require("socket.io")(server);
  module.exports.io = io;
}

module.exports = {
  startSocketServer: startSocketServer,
  addNamepaceListener: require("./addNamespaceListener"),
  updateDevice: require("./updateDevice").updateDevice
};
