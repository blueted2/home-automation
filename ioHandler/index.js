const storage = require("../storage");

var namespaces = {switch_3: "test"};

function startSocketServer(server) {
  io = require("socket.io")(server);
  module.exports.io = io;
}

module.exports = {
  startSocketServer: startSocketServer,
  addNamepaceListener: require("./addNamespaceListener"),
  updateDevice: require("./updateDevice").updateDevice
};
